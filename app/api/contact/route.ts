import { NextResponse, type NextRequest } from "next/server";
import { connectDb } from "@/lib/db";
import { ContactModel, type Contact } from "@/lib/models";

type SuccessResponse<T> = {
  status: "success";
  data: T;
  message?: string;
};

type ErrorResponse = {
  status: "error";
  message: string;
};

type NewContactInput = Omit<Contact, "createdAt">;

function isNonEmptyString(value: unknown, maxLength: number): value is string {
  return (
    typeof value === "string" &&
    value.trim().length > 0 &&
    value.length <= maxLength
  );
}

function isValidEmail(value: unknown): value is string {
  return typeof value === "string" && /^\S+@\S+\.\S+$/.test(value);
}

function validateNewContact(body: unknown): {
  value?: NewContactInput;
  error?: string;
} {
  if (typeof body !== "object" || body === null) {
    return { error: "Invalid payload format." };
  }

  const candidate = body as Record<string, unknown>;
  const { name, email, message } = candidate;

  if (!isNonEmptyString(name, 120)) {
    return { error: "Name is required and must be at most 120 characters." };
  }

  if (!isValidEmail(email)) {
    return { error: "Please provide a valid email address." };
  }

  if (!isNonEmptyString(message, 5000)) {
    return {
      error: "Message is required and must be at most 5000 characters.",
    };
  }

  return {
    value: {
      name: name.trim(),
      email,
      message: message.trim(),
    },
  };
}

export async function POST(
  request: NextRequest
): Promise<NextResponse<SuccessResponse<null> | ErrorResponse>> {
  try {
    const json = (await request.json()) as unknown;
    const { value, error } = validateNewContact(json);

    if (error || !value) {
      return NextResponse.json<ErrorResponse>(
        {
          status: "error",
          message: error ?? "Invalid payload.",
        },
        { status: 400 }
      );
    }

    await connectDb();
    await ContactModel.create(value);

    return NextResponse.json<SuccessResponse<null>>(
      {
        status: "success",
        data: null,
        message: "Thanks for reaching out — I will get back to you shortly.",
      },
      { status: 201 }
    );
  } catch {
    return NextResponse.json<ErrorResponse>(
      {
        status: "error",
        message: "Failed to submit contact message.",
      },
      { status: 500 }
    );
  }
}
