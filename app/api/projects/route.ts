import { NextResponse, type NextRequest } from "next/server";
import { connectDb } from "@/lib/db";
import { ProjectModel, type Project } from "@/lib/models";

type SuccessResponse<T> = {
  status: "success";
  data: T;
  message?: string;
};

type ErrorResponse = {
  status: "error";
  message: string;
};

type NewProjectInput = Omit<Project, "createdAt">;

function isNonEmptyString(value: unknown, maxLength: number): value is string {
  return typeof value === "string" && value.trim().length > 0 && value.length <= maxLength;
}

function isUrl(value: unknown): value is string {
  return typeof value === "string" && /^https?:\/\/.+/i.test(value);
}

function isStringArray(value: unknown): value is string[] {
  return (
    Array.isArray(value) &&
    value.length > 0 &&
    value.every((item) => typeof item === "string" && item.trim().length > 0)
  );
}

function validateNewProject(body: unknown): { value?: NewProjectInput; error?: string } {
  if (typeof body !== "object" || body === null) {
    return { error: "Invalid payload format." };
  }

  const candidate = body as Record<string, unknown>;

  const { title, description, techStack, githubUrl, liveUrl } = candidate;

  if (!isNonEmptyString(title, 160)) {
    return { error: "Title is required and must be at most 160 characters." };
  }

  if (!isNonEmptyString(description, 2000)) {
    return { error: "Description is required and must be at most 2000 characters." };
  }

  if (!isStringArray(techStack)) {
    return { error: "techStack is required and must be a non-empty array of strings." };
  }

  if (!isUrl(githubUrl)) {
    return { error: "githubUrl must be a valid URL." };
  }

  if (typeof liveUrl !== "undefined" && liveUrl !== null && !isUrl(liveUrl)) {
    return { error: "liveUrl must be a valid URL when provided." };
  }

  return {
    value: {
      title: title.trim(),
      description: description.trim(),
      techStack: techStack.map((item) => item.trim()),
      githubUrl,
      liveUrl: typeof liveUrl === "string" ? liveUrl.trim() : undefined
    }
  };
}

export async function GET(): Promise<NextResponse<SuccessResponse<Project[]> | ErrorResponse>> {
  try {
    await connectDb();
    const projects = await ProjectModel.find().sort({ createdAt: -1 }).lean();

    return NextResponse.json<SuccessResponse<Project[]>>(
      {
        status: "success",
        data: projects as unknown as Project[]
      },
      { status: 200 }
    );
  } catch {
    return NextResponse.json<ErrorResponse>(
      {
        status: "error",
        message: "Failed to fetch projects."
      },
      { status: 500 }
    );
  }
}

export async function POST(
  request: NextRequest
): Promise<NextResponse<SuccessResponse<Project> | ErrorResponse>> {
  try {
    const json = (await request.json()) as unknown;
    const { value, error } = validateNewProject(json);

    if (error || !value) {
      return NextResponse.json<ErrorResponse>(
        {
          status: "error",
          message: error ?? "Invalid payload."
        },
        { status: 400 }
      );
    }

    await connectDb();
    const created = await ProjectModel.create(value);

    return NextResponse.json<SuccessResponse<Project>>(
      {
        status: "success",
        data: created.toObject() as unknown as Project,
        message: "Project created successfully."
      },
      { status: 201 }
    );
  } catch {
    return NextResponse.json<ErrorResponse>(
      {
        status: "error",
        message: "Failed to create project."
      },
      { status: 500 }
    );
  }
}


