import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
    password: {
      type: String,
      required: true,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    // Profile fields
    bio: {
      type: String,
      default: "",
      maxlength: 500,
    },
    avatar: {
      type: String,
      default: "",
    },
    batch: {
      type: String,
      enum: ["2024", "2025", "2026", "2027", "2028"],
    },
    role: {
      type: String,
      enum: ["Member", "Core Team", "Admin"],
      default: "Member",
    },
    skills: [String],
    socialLinks: {
      github: String,
      linkedin: String,
      twitter: String,
      portfolio: String,
    },
    // Stats
    projectsCompleted: {
      type: Number,
      default: 0,
    },
    eventsAttended: {
      type: Number,
      default: 0,
    },
    assignmentsCompleted: {
      type: Number,
      default: 0,
    },
    badges: [
      {
        name: String,
        icon: String,
        earnedAt: {
          type: Date,
          default: Date.now,
        },
      },
    ],
    // Auth tokens
    forgotPassword: String,
    forgotPasswordExpiry: Date,
    verifyToken: String,
    verifyTokenExpiry: Date,
  },
  {
    timestamps: true,
  }
);

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
