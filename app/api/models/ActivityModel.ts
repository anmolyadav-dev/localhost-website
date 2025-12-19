import mongoose from "mongoose";

const activitySchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      enum: [
        "assignment_submitted",
        "project_completed",
        "event_attended",
        "badge_earned",
        "profile_updated",
        "member_joined",
      ],
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    metadata: {
      type: mongoose.Schema.Types.Mixed,
    },
    isPublic: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

// Indexes for efficient queries
activitySchema.index({ userId: 1, createdAt: -1 });
activitySchema.index({ type: 1, createdAt: -1 });
activitySchema.index({ isPublic: 1, createdAt: -1 });

const Activity =
  mongoose.models.Activity || mongoose.model("Activity", activitySchema);

export default Activity;
