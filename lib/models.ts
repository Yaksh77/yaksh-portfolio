import {
  Schema,
  model,
  models,
  type Document,
  type Model
} from "mongoose";

export interface Project {
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  createdAt?: Date;
}

export interface Contact {
  name: string;
  email: string;
  message: string;
  createdAt?: Date;
}

type ProjectDocument = Project & Document;
type ContactDocument = Contact & Document;

const ProjectSchema = new Schema<ProjectDocument>(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
      maxlength: 160
    },
    description: {
      type: String,
      required: true,
      trim: true,
      minlength: 10,
      maxlength: 2000
    },
    techStack: {
      type: [String],
      required: true,
      validate: {
        validator(value: string[]) {
          return Array.isArray(value) && value.length > 0;
        },
        message: "At least one tech item is required."
      }
    },
    githubUrl: {
      type: String,
      required: true,
      trim: true,
      match: /^https?:\/\/.+$/i
    },
    liveUrl: {
      type: String,
      required: false,
      trim: true,
      match: /^https?:\/\/.+$/i
    }
  },
  {
    timestamps: {
      createdAt: true,
      updatedAt: true
    },
    versionKey: false
  }
);

const ContactSchema = new Schema<ContactDocument>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
      maxlength: 120
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      match: /^\S+@\S+\.\S+$/
    },
    message: {
      type: String,
      required: true,
      trim: true,
      minlength: 10,
      maxlength: 5000
    }
  },
  {
    timestamps: {
      createdAt: true,
      updatedAt: true
    },
    versionKey: false
  }
);

export const ProjectModel: Model<ProjectDocument> =
  (models.Project as Model<ProjectDocument>) ?? model<ProjectDocument>("Project", ProjectSchema);

export const ContactModel: Model<ContactDocument> =
  (models.Contact as Model<ContactDocument>) ?? model<ContactDocument>("Contact", ContactSchema);


