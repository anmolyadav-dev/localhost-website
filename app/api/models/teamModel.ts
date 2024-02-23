import mongoose, { Document, Schema } from "mongoose";

// Define the schema for the Team model
export interface ITeam extends Document {
  teamName: string;
  teamLeader: string;
  theme: string;
  password: string;
  teamMembers: Array<{
    name: string;
    email: string;
    linkedin: string;
    github: string;
  }>;
}

const teamSchema = new Schema<ITeam>({
  teamName: { type: String, required: true, unique: true },
  teamLeader: { type: String, required: true },
  theme: { type: String, required: true },
  password: { type: String, required: true },
  teamMembers: [
    {
      name: { type: String, required: true },
      email: { type: String, required: true },
      linkedin: { type: String, required: true },
      github: { type: String, required: true },
    },
  ],
});

// Create and export the Team model
const Team = mongoose.model<ITeam>("Team", teamSchema);
export default Team;
