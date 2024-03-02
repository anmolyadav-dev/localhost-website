import mongoose, { Document, Schema } from "mongoose";

// Define the schema for the Project model
export interface IProject extends Document {
  teamName: string;
  description: string;
  githubLink: string;
  driveLink: string;
}

const projectSchema = new Schema<IProject>({
  teamName: { type: String, required: true, unique: true},
  description: { type: String, required: true },
  githubLink: { type: String, required: true },
  driveLink: { type: String, required: true },
});

// Create and export the Project model
const Project =
  mongoose.models["Project"] ||
  mongoose.model<IProject>("Project", projectSchema);
export default Project;
