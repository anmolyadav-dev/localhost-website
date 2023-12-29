import mongoose from "mongoose";

const assignmentSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  username: { type: String, required: true },
  assignmentNumber: { type: Number, required: true },
  githubLink: { type: String, required: true },
});

const Assignment =
  mongoose.models.Assignment || mongoose.model("Assignment", assignmentSchema);

export default Assignment;
