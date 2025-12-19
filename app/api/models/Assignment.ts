import mongoose from "mongoose";

const assignmentSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    username: { type: String, required: true },
    assignmentNumber: { type: Number, required: true },
    githubLink: { type: String, required: true },
    // Enhanced fields
    title: { type: String },
    description: { type: String },
    files: [
      {
        name: String,
        url: String,
        size: Number,
      },
    ],
    status: {
      type: String,
      enum: ["submitted", "grading", "graded", "revision"],
      default: "submitted",
    },
    grade: {
      type: Number,
      min: 0,
      max: 100,
    },
    feedback: {
      type: String,
      default: "",
    },
    submittedAt: {
      type: Date,
      default: Date.now,
    },
    gradedAt: Date,
    gradedBy: String,
  },
  {
    timestamps: true,
  }
);

// Index for faster queries
assignmentSchema.index({ userId: 1, assignmentNumber: 1 });
assignmentSchema.index({ username: 1 });

const Assignment =
  mongoose.models.Assignment || mongoose.model("Assignment", assignmentSchema);

export default Assignment;
