"use client";
import { motion } from "framer-motion";
import {
  FaCalendarAlt,
  FaCode,
  FaTrophy,
  FaUsers,
  FaBell,
} from "react-icons/fa";
import Link from "next/link";

interface Activity {
  id: string;
  type: "event" | "project" | "achievement" | "announcement";
  title: string;
  description: string;
  time: string;
  icon: any;
  link?: string;
}

const activities: Activity[] = [
  {
    id: "1",
    type: "event",
    title: "HackIn IIITP Registration Open",
    description: "36-hour hackathon starts next month. Register your team now!",
    time: "2 hours ago",
    icon: FaCalendarAlt,
    link: "/hackiniiitp/register",
  },
  {
    id: "2",
    type: "project",
    title: "New Assignment Posted",
    description: "Web Development project assigned. Due in 2 weeks.",
    time: "5 hours ago",
    icon: FaCode,
    link: "/assignments",
  },
  {
    id: "3",
    type: "achievement",
    title: "Team Wins National Hackathon",
    description: "Congratulations to Team Alpha for securing 1st place!",
    time: "1 day ago",
    icon: FaTrophy,
  },
  {
    id: "4",
    type: "announcement",
    title: "Weekly Meetup - Saturday",
    description: "Join us for tech talks and networking this weekend.",
    time: "2 days ago",
    icon: FaBell,
    link: "/events",
  },
  {
    id: "5",
    type: "event",
    title: "Winter of Code Begins",
    description: "2-month open source contribution program starting soon.",
    time: "3 days ago",
    icon: FaUsers,
    link: "/iiitpwoc",
  },
];

const ActivityFeed = () => {
  const getActivityColor = (type: string) => {
    switch (type) {
      case "event":
        return "border-blue-400 bg-blue-400";
      case "project":
        return "border-green-400 bg-green-400";
      case "achievement":
        return "border-yellow-400 bg-yellow-400";
      case "announcement":
        return "border-purple-400 bg-purple-400";
      default:
        return "border-greenblue bg-greenblue";
    }
  };

  return (
    <div className="bg-white bg-opacity-5 backdrop-blur-md rounded-xl p-6 border border-greenblue border-opacity-30">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-minecraft text-white">
          Recent <span className="text-greenblue">Activity</span>
        </h2>
        <Link href="/events">
          <button className="text-greenblue hover:text-white text-sm transition-colors">
            View All →
          </button>
        </Link>
      </div>

      <div className="space-y-4">
        {activities.map((activity, index) => {
          const Icon = activity.icon;
          return (
            <motion.div
              key={activity.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="group"
            >
              {activity.link ? (
                <Link href={activity.link}>
                  <div className="flex gap-4 p-4 bg-white bg-opacity-5 rounded-lg hover:bg-opacity-10 transition-all cursor-pointer border border-transparent hover:border-greenblue hover:border-opacity-30">
                    <div
                      className={`flex-shrink-0 w-12 h-12 rounded-full ${getActivityColor(
                        activity.type
                      )} bg-opacity-20 flex items-center justify-center border-2`}
                    >
                      <Icon
                        className={`text-xl ${getActivityColor(activity.type)
                          .replace("bg-", "text-")
                          .replace("border-", "text-")}`}
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-white font-semibold group-hover:text-greenblue transition-colors">
                        {activity.title}
                      </h3>
                      <p className="text-gray-300 text-sm mt-1">
                        {activity.description}
                      </p>
                      <p className="text-gray-400 text-xs mt-2">
                        {activity.time}
                      </p>
                    </div>
                  </div>
                </Link>
              ) : (
                <div className="flex gap-4 p-4 bg-white bg-opacity-5 rounded-lg">
                  <div
                    className={`flex-shrink-0 w-12 h-12 rounded-full ${getActivityColor(
                      activity.type
                    )} bg-opacity-20 flex items-center justify-center border-2`}
                  >
                    <Icon
                      className={`text-xl ${getActivityColor(activity.type)
                        .replace("bg-", "text-")
                        .replace("border-", "text-")}`}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-white font-semibold">
                      {activity.title}
                    </h3>
                    <p className="text-gray-300 text-sm mt-1">
                      {activity.description}
                    </p>
                    <p className="text-gray-400 text-xs mt-2">
                      {activity.time}
                    </p>
                  </div>
                </div>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default ActivityFeed;
