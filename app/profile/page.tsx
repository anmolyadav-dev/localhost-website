"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { useSession } from "next-auth/react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaGlobe,
  FaCode,
  FaCalendarAlt,
  FaTrophy,
  FaEdit,
  FaSave,
  FaTimes,
  FaUser,
  FaCog,
} from "react-icons/fa";
import Link from "next/link";

interface UserProfile {
  _id: string;
  username: string;
  email: string;
  bio: string;
  avatar: string;
  batch: string;
  role: string;
  skills: string[];
  socialLinks: {
    github: string;
    linkedin: string;
    twitter: string;
    portfolio: string;
  };
  projectsCompleted: number;
  eventsAttended: number;
  assignmentsCompleted: number;
  badges: Array<{
    name: string;
    icon: string;
    earnedAt: Date;
  }>;
}

interface UserStats {
  projects: number;
  events: number;
  assignments: number;
  badges: any[];
  assignmentStats: {
    total: number;
    submitted: number;
    grading: number;
    graded: number;
    averageGrade: number;
  };
  recentActivities: any[];
}

const ProfilePage = () => {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [activeTab, setActiveTab] = useState("overview");
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [stats, setStats] = useState<UserStats | null>(null);
  const [loading, setLoading] = useState(true);

  // Edit form state
  const [editForm, setEditForm] = useState({
    bio: "",
    batch: "",
    skills: [] as string[],
    socialLinks: {
      github: "",
      linkedin: "",
      twitter: "",
      portfolio: "",
    },
  });

  useEffect(() => {
    if (status === "unauthenticated") {
      router.replace("/login");
    } else if (status === "authenticated") {
      fetchProfile();
      fetchStats();
    }
  }, [status, router]);

  const fetchProfile = async () => {
    try {
      const response = await axios.get("/api/profile");
      setProfile(response.data.data);
      setEditForm({
        bio: response.data.data.bio || "",
        batch: response.data.data.batch || "",
        skills: response.data.data.skills || [],
        socialLinks: response.data.data.socialLinks || {
          github: "",
          linkedin: "",
          twitter: "",
          portfolio: "",
        },
      });
    } catch (error) {
      console.error("Error fetching profile:", error);
      toast.error("Failed to load profile");
    } finally {
      setLoading(false);
    }
  };

  const fetchStats = async () => {
    try {
      const response = await axios.get("/api/profile/stats");
      setStats(response.data.data);
    } catch (error) {
      console.error("Error fetching stats:", error);
    }
  };

  const handleSaveProfile = async () => {
    try {
      await axios.put("/api/profile", editForm);
      toast.success("Profile updated successfully!");
      setIsEditing(false);
      fetchProfile();
    } catch (error: any) {
      console.error("Error updating profile:", error);
      toast.error(error.response?.data?.error || "Failed to update profile");
    }
  };

  const handleSkillAdd = (skill: string) => {
    if (skill && !editForm.skills.includes(skill)) {
      setEditForm({
        ...editForm,
        skills: [...editForm.skills, skill],
      });
    }
  };

  const handleSkillRemove = (skill: string) => {
    setEditForm({
      ...editForm,
      skills: editForm.skills.filter((s) => s !== skill),
    });
  };

  if (status === "loading" || loading) {
    return (
      <div className="bg-bg-star bg-cover min-h-screen bg-left lg:bg-center flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-greenblue mx-auto mb-4"></div>
          <p className="text-white text-xl">Loading profile...</p>
        </div>
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="bg-bg-star bg-cover min-h-screen bg-left lg:bg-center flex items-center justify-center">
        <p className="text-white text-xl">Failed to load profile</p>
      </div>
    );
  }

  return (
    <div className="bg-bg-star bg-cover min-h-screen bg-left lg:bg-center pt-24 sm:pt-32 pb-16 px-4 sm:px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white bg-opacity-5 backdrop-blur-md rounded-xl p-6 sm:p-8 border border-greenblue border-opacity-30 mb-6"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4 sm:gap-6">
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-greenblue bg-opacity-10 flex items-center justify-center border-4 border-greenblue overflow-hidden">
                {profile.avatar ? (
                  <Image
                    src={profile.avatar}
                    alt={profile.username}
                    fill
                    sizes="96px"
                    className="object-cover"
                    priority
                  />
                ) : (
                  <span className="text-greenblue text-3xl sm:text-4xl font-bold">
                    {profile.username.charAt(0).toUpperCase()}
                  </span>
                )}
              </div>
              <div>
                <h1 className="text-white text-2xl sm:text-3xl font-bold mb-1">
                  {profile.username}
                </h1>
                <p className="text-gray-300 mb-2">{profile.email}</p>
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 bg-greenblue bg-opacity-20 text-greenblue text-xs sm:text-sm rounded-full">
                    {profile.role}
                  </span>
                  {profile.batch && (
                    <span className="px-3 py-1 bg-white bg-opacity-10 text-white text-xs sm:text-sm rounded-full">
                      Batch {profile.batch}
                    </span>
                  )}
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="flex items-center gap-2 px-4 py-2 bg-greenblue hover:bg-opacity-80 text-black font-semibold rounded-lg transition-all"
            >
              {isEditing ? (
                <>
                  <FaTimes /> Cancel
                </>
              ) : (
                <>
                  <FaEdit /> Edit Profile
                </>
              )}
            </button>
          </div>
        </motion.div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6 overflow-x-auto">
          {["overview", "activity", "settings"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold transition-all whitespace-nowrap ${
                activeTab === tab
                  ? "bg-greenblue text-black"
                  : "bg-white bg-opacity-10 text-white hover:bg-opacity-20"
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {activeTab === "overview" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                {/* Stats Cards */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <div className="bg-white bg-opacity-5 backdrop-blur-md rounded-xl p-4 border border-greenblue border-opacity-30 transition-colors hover:bg-white/10">
                    <FaCode className="text-greenblue text-2xl mb-2" />
                    <div className="text-white text-2xl font-bold">
                      {profile.projectsCompleted}
                    </div>
                    <div className="text-gray-300 text-sm">Projects</div>
                  </div>
                  <div className="bg-white bg-opacity-5 backdrop-blur-md rounded-xl p-4 border border-greenblue border-opacity-30 transition-colors hover:bg-white/10">
                    <FaCalendarAlt className="text-greenblue text-2xl mb-2" />
                    <div className="text-white text-2xl font-bold">
                      {profile.eventsAttended}
                    </div>
                    <div className="text-gray-300 text-sm">Events</div>
                  </div>
                  <div className="bg-white bg-opacity-5 backdrop-blur-md rounded-xl p-4 border border-greenblue border-opacity-30 transition-colors hover:bg-white/10">
                    <FaTrophy className="text-greenblue text-2xl mb-2" />
                    <div className="text-white text-2xl font-bold">
                      {profile.assignmentsCompleted}
                    </div>
                    <div className="text-gray-300 text-sm">Assignments</div>
                  </div>
                  <div className="bg-white bg-opacity-5 backdrop-blur-md rounded-xl p-4 border border-greenblue border-opacity-30 transition-colors hover:bg-white/10">
                    <FaTrophy className="text-yellow-400 text-2xl mb-2" />
                    <div className="text-white text-2xl font-bold">
                      {profile.badges.length}
                    </div>
                    <div className="text-gray-300 text-sm">Badges</div>
                  </div>
                </div>

                {/* Bio Section */}
                <div className="bg-white bg-opacity-5 backdrop-blur-md rounded-xl p-6 border border-greenblue border-opacity-30">
                  <h3 className="text-white text-xl font-semibold mb-4">
                    About Me
                  </h3>
                  {isEditing ? (
                    <textarea
                      value={editForm.bio}
                      onChange={(e) =>
                        setEditForm({ ...editForm, bio: e.target.value })
                      }
                      placeholder="Tell us about yourself..."
                      className="w-full px-4 py-3 bg-white bg-opacity-10 border border-greenblue border-opacity-30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-greenblue"
                      rows={4}
                    />
                  ) : (
                    <p className="text-gray-300">
                      {profile.bio || "No bio added yet."}
                    </p>
                  )}
                </div>

                {/* Skills Section */}
                <div className="bg-white bg-opacity-5 backdrop-blur-md rounded-xl p-6 border border-greenblue border-opacity-30">
                  <h3 className="text-white text-xl font-semibold mb-4">
                    Skills
                  </h3>
                  {isEditing ? (
                    <div>
                      <div className="flex gap-2 mb-3">
                        <input
                          type="text"
                          placeholder="Add a skill..."
                          onKeyDown={(e) => {
                            if (e.key === "Enter") {
                              handleSkillAdd(e.currentTarget.value);
                              e.currentTarget.value = "";
                            }
                          }}
                          className="flex-1 px-4 py-2 bg-white bg-opacity-10 border border-greenblue border-opacity-30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-greenblue"
                        />
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {editForm.skills.map((skill, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-greenblue bg-opacity-20 text-greenblue rounded-full text-sm flex items-center gap-2"
                          >
                            {skill}
                            <button
                              onClick={() => handleSkillRemove(skill)}
                              className="hover:text-red-400"
                              aria-label={`Remove ${skill}`}
                            >
                              <FaTimes size={12} />
                            </button>
                          </span>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-wrap gap-2">
                      {profile.skills.length > 0 ? (
                        profile.skills.map((skill, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-greenblue bg-opacity-20 text-greenblue rounded-full text-sm"
                          >
                            {skill}
                          </span>
                        ))
                      ) : (
                        <p className="text-gray-400">No skills added yet.</p>
                      )}
                    </div>
                  )}
                </div>

                {/* Assignment Stats */}
                {stats && (
                  <div className="bg-white bg-opacity-5 backdrop-blur-md rounded-xl p-6 border border-greenblue border-opacity-30">
                    <h3 className="text-white text-xl font-semibold mb-4">
                      Assignment Statistics
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                      <div>
                        <div className="text-greenblue text-2xl font-bold">
                          {stats.assignmentStats.total}
                        </div>
                        <div className="text-gray-300 text-sm">Total</div>
                      </div>
                      <div>
                        <div className="text-yellow-400 text-2xl font-bold">
                          {stats.assignmentStats.grading}
                        </div>
                        <div className="text-gray-300 text-sm">Grading</div>
                      </div>
                      <div>
                        <div className="text-green-400 text-2xl font-bold">
                          {stats.assignmentStats.graded}
                        </div>
                        <div className="text-gray-300 text-sm">Graded</div>
                      </div>
                      <div>
                        <div className="text-blue-400 text-2xl font-bold">
                          {stats.assignmentStats.averageGrade.toFixed(1)}%
                        </div>
                        <div className="text-gray-300 text-sm">Avg Grade</div>
                      </div>
                    </div>
                    <Link href="/assignments">
                      <button className="mt-4 w-full px-4 py-2 bg-greenblue hover:bg-opacity-80 text-black font-semibold rounded-lg transition-all">
                        View All Submissions
                      </button>
                    </Link>
                  </div>
                )}
              </motion.div>
            )}

            {activeTab === "activity" && stats && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white bg-opacity-5 backdrop-blur-md rounded-xl p-6 border border-greenblue border-opacity-30"
              >
                <h3 className="text-white text-xl font-semibold mb-4">
                  Recent Activity
                </h3>
                <div className="space-y-4">
                  {stats.recentActivities.length > 0 ? (
                    stats.recentActivities.map((activity, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-3 p-4 bg-white bg-opacity-5 rounded-lg"
                      >
                        <div className="w-10 h-10 rounded-full bg-greenblue bg-opacity-20 flex items-center justify-center flex-shrink-0">
                          <FaTrophy className="text-greenblue" />
                        </div>
                        <div className="flex-1">
                          <p className="text-white font-semibold">
                            {activity.title}
                          </p>
                          <p className="text-gray-300 text-sm">
                            {activity.description}
                          </p>
                          <p className="text-gray-400 text-xs mt-1">
                            {new Date(activity.createdAt).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="text-gray-400 text-center py-8">
                      No recent activity
                    </p>
                  )}
                </div>
              </motion.div>
            )}

            {activeTab === "settings" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white bg-opacity-5 backdrop-blur-md rounded-xl p-6 border border-greenblue border-opacity-30"
              >
                <h3 className="text-white text-xl font-semibold mb-4">
                  Settings
                </h3>
                <p className="text-gray-400">Settings coming soon...</p>
              </motion.div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white bg-opacity-5 backdrop-blur-md rounded-xl p-6 border border-greenblue border-opacity-30"
            >
              <h3 className="text-white text-xl font-semibold mb-4">
                Social Links
              </h3>
              {isEditing ? (
                <div className="space-y-3">
                  <input
                    type="text"
                    placeholder="GitHub username"
                    value={editForm.socialLinks.github}
                    onChange={(e) =>
                      setEditForm({
                        ...editForm,
                        socialLinks: {
                          ...editForm.socialLinks,
                          github: e.target.value,
                        },
                      })
                    }
                    className="w-full px-4 py-2 bg-white bg-opacity-10 border border-greenblue border-opacity-30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-greenblue text-sm"
                  />
                  <input
                    type="text"
                    placeholder="LinkedIn username"
                    value={editForm.socialLinks.linkedin}
                    onChange={(e) =>
                      setEditForm({
                        ...editForm,
                        socialLinks: {
                          ...editForm.socialLinks,
                          linkedin: e.target.value,
                        },
                      })
                    }
                    className="w-full px-4 py-2 bg-white bg-opacity-10 border border-greenblue border-opacity-30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-greenblue text-sm"
                  />
                  <input
                    type="text"
                    placeholder="Twitter username"
                    value={editForm.socialLinks.twitter}
                    onChange={(e) =>
                      setEditForm({
                        ...editForm,
                        socialLinks: {
                          ...editForm.socialLinks,
                          twitter: e.target.value,
                        },
                      })
                    }
                    className="w-full px-4 py-2 bg-white bg-opacity-10 border border-greenblue border-opacity-30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-greenblue text-sm"
                  />
                  <input
                    type="text"
                    placeholder="Portfolio URL"
                    value={editForm.socialLinks.portfolio}
                    onChange={(e) =>
                      setEditForm({
                        ...editForm,
                        socialLinks: {
                          ...editForm.socialLinks,
                          portfolio: e.target.value,
                        },
                      })
                    }
                    className="w-full px-4 py-2 bg-white bg-opacity-10 border border-greenblue border-opacity-30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-greenblue text-sm"
                  />
                </div>
              ) : (
                <div className="space-y-3">
                  <a
                    href={
                      profile.socialLinks?.github
                        ? `https://github.com/${profile.socialLinks.github}`
                        : undefined
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    {...(!profile.socialLinks?.github
                      ? { "aria-disabled": "true" as const }
                      : {})}
                    className={`flex items-center justify-between rounded-lg border px-4 py-3 transition-colors ${
                      profile.socialLinks?.github
                        ? "border-greenblue/30 bg-white/5 text-gray-200 hover:text-greenblue"
                        : "border-greenblue/10 bg-white/5 text-gray-500 pointer-events-none"
                    }`}
                  >
                    <span className="flex items-center gap-3">
                      <FaGithub size={20} />
                      <span>GitHub</span>
                    </span>
                    <span className="text-xs text-gray-400">
                      {profile.socialLinks?.github || "Not set"}
                    </span>
                  </a>

                  <a
                    href={
                      profile.socialLinks?.linkedin
                        ? `https://linkedin.com/in/${profile.socialLinks.linkedin}`
                        : undefined
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    {...(!profile.socialLinks?.linkedin
                      ? { "aria-disabled": "true" as const }
                      : {})}
                    className={`flex items-center justify-between rounded-lg border px-4 py-3 transition-colors ${
                      profile.socialLinks?.linkedin
                        ? "border-greenblue/30 bg-white/5 text-gray-200 hover:text-greenblue"
                        : "border-greenblue/10 bg-white/5 text-gray-500 pointer-events-none"
                    }`}
                  >
                    <span className="flex items-center gap-3">
                      <FaLinkedin size={20} />
                      <span>LinkedIn</span>
                    </span>
                    <span className="text-xs text-gray-400">
                      {profile.socialLinks?.linkedin || "Not set"}
                    </span>
                  </a>

                  <a
                    href={
                      profile.socialLinks?.twitter
                        ? `https://twitter.com/${profile.socialLinks.twitter}`
                        : undefined
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    {...(!profile.socialLinks?.twitter
                      ? { "aria-disabled": "true" as const }
                      : {})}
                    className={`flex items-center justify-between rounded-lg border px-4 py-3 transition-colors ${
                      profile.socialLinks?.twitter
                        ? "border-greenblue/30 bg-white/5 text-gray-200 hover:text-greenblue"
                        : "border-greenblue/10 bg-white/5 text-gray-500 pointer-events-none"
                    }`}
                  >
                    <span className="flex items-center gap-3">
                      <FaTwitter size={20} />
                      <span>Twitter</span>
                    </span>
                    <span className="text-xs text-gray-400">
                      {profile.socialLinks?.twitter || "Not set"}
                    </span>
                  </a>

                  <a
                    href={profile.socialLinks?.portfolio || undefined}
                    target="_blank"
                    rel="noopener noreferrer"
                    {...(!profile.socialLinks?.portfolio
                      ? { "aria-disabled": "true" as const }
                      : {})}
                    className={`flex items-center justify-between rounded-lg border px-4 py-3 transition-colors ${
                      profile.socialLinks?.portfolio
                        ? "border-greenblue/30 bg-white/5 text-gray-200 hover:text-greenblue"
                        : "border-greenblue/10 bg-white/5 text-gray-500 pointer-events-none"
                    }`}
                  >
                    <span className="flex items-center gap-3">
                      <FaGlobe size={20} />
                      <span>Portfolio</span>
                    </span>
                    <span className="text-xs text-gray-400">
                      {profile.socialLinks?.portfolio ? "Open" : "Not set"}
                    </span>
                  </a>

                  {!profile.socialLinks?.github &&
                    !profile.socialLinks?.linkedin &&
                    !profile.socialLinks?.twitter &&
                    !profile.socialLinks?.portfolio && (
                      <p className="text-gray-400 text-sm">
                        Add links from Edit Profile.
                      </p>
                    )}
                </div>
              )}
            </motion.div>

            {/* Badges */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white bg-opacity-5 backdrop-blur-md rounded-xl p-6 border border-greenblue border-opacity-30"
            >
              <h3 className="text-white text-xl font-semibold mb-4">Badges</h3>
              <div className="grid grid-cols-3 gap-3">
                {profile.badges.length > 0 ? (
                  profile.badges.map((badge, index) => (
                    <div
                      key={index}
                      className="aspect-square bg-greenblue bg-opacity-20 rounded-lg flex items-center justify-center"
                      title={badge.name}
                    >
                      <FaTrophy className="text-yellow-400 text-2xl" />
                    </div>
                  ))
                ) : (
                  <div className="col-span-3 text-center text-gray-400 text-sm py-4">
                    No badges earned yet
                  </div>
                )}
              </div>
            </motion.div>

            {/* Save Button */}
            {isEditing && (
              <button
                onClick={handleSaveProfile}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-greenblue hover:bg-opacity-80 text-black font-bold rounded-lg transition-all"
              >
                <FaSave /> Save Changes
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
