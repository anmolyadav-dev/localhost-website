"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaBell,
  FaTimes,
  FaCalendarAlt,
  FaFileAlt,
  FaTrophy,
  FaExclamationCircle,
} from "react-icons/fa";

interface Notification {
  id: string;
  type: "event" | "assignment" | "achievement" | "alert";
  title: string;
  message: string;
  time: string;
  read: boolean;
  link?: string;
}

const initialNotifications: Notification[] = [
  {
    id: "1",
    type: "event",
    title: "New Event: HackIn IIITP",
    message: "Registration is now open for the 36-hour hackathon!",
    time: "2 hours ago",
    read: false,
    link: "/hackiniiitp/register",
  },
  {
    id: "2",
    type: "assignment",
    title: "Assignment Due Soon",
    message: "Web Development project is due in 2 days",
    time: "5 hours ago",
    read: false,
    link: "/assignments",
  },
  {
    id: "3",
    type: "achievement",
    title: "Congratulations!",
    message: "You've completed 10 projects milestone",
    time: "1 day ago",
    read: true,
  },
  {
    id: "4",
    type: "alert",
    title: "Venue Change",
    message: "Tech Talk moved to Seminar Hall B",
    time: "2 days ago",
    read: true,
    link: "/events",
  },
];

const NotificationCenter = () => {
  const [notifications, setNotifications] =
    useState<Notification[]>(initialNotifications);
  const [isOpen, setIsOpen] = useState(false);
  const [filter, setFilter] = useState<"all" | "unread">("all");

  const unreadCount = notifications.filter((n) => !n.read).length;

  const filteredNotifications =
    filter === "all" ? notifications : notifications.filter((n) => !n.read);

  const markAsRead = (id: string) => {
    setNotifications(
      notifications.map((n) => (n.id === id ? { ...n, read: true } : n))
    );
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map((n) => ({ ...n, read: true })));
  };

  const deleteNotification = (id: string) => {
    setNotifications(notifications.filter((n) => n.id !== id));
  };

  const getIcon = (type: string) => {
    switch (type) {
      case "event":
        return FaCalendarAlt;
      case "assignment":
        return FaFileAlt;
      case "achievement":
        return FaTrophy;
      case "alert":
        return FaExclamationCircle;
      default:
        return FaBell;
    }
  };

  const getColor = (type: string) => {
    switch (type) {
      case "event":
        return "text-blue-400 bg-blue-400";
      case "assignment":
        return "text-green-400 bg-green-400";
      case "achievement":
        return "text-yellow-400 bg-yellow-400";
      case "alert":
        return "text-red-400 bg-red-400";
      default:
        return "text-greenblue bg-greenblue";
    }
  };

  return (
    <div className="relative">
      {/* Notification Bell */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-2 text-white hover:text-greenblue transition-colors"
      >
        <FaBell size={24} />
        {unreadCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
            {unreadCount}
          </span>
        )}
      </button>

      {/* Notification Panel */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <div
              className="fixed inset-0 z-40"
              onClick={() => setIsOpen(false)}
            />

            {/* Panel */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.2 }}
              className="absolute right-0 top-12 w-96 max-w-[calc(100vw-2rem)] bg-gray-900 rounded-xl shadow-2xl border border-greenblue border-opacity-30 z-50 max-h-[600px] flex flex-col"
            >
              {/* Header */}
              <div className="p-4 border-b border-gray-800">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-white text-lg font-semibold">
                    Notifications
                  </h3>
                  <button
                    onClick={() => setIsOpen(false)}
                    aria-label="Close notifications"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <FaTimes />
                  </button>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    <button
                      onClick={() => setFilter("all")}
                      className={`px-3 py-1 rounded text-sm transition-all ${
                        filter === "all"
                          ? "bg-greenblue text-black font-semibold"
                          : "bg-white bg-opacity-10 text-gray-300 hover:bg-opacity-20"
                      }`}
                    >
                      All
                    </button>
                    <button
                      onClick={() => setFilter("unread")}
                      className={`px-3 py-1 rounded text-sm transition-all ${
                        filter === "unread"
                          ? "bg-greenblue text-black font-semibold"
                          : "bg-white bg-opacity-10 text-gray-300 hover:bg-opacity-20"
                      }`}
                    >
                      Unread ({unreadCount})
                    </button>
                  </div>

                  {unreadCount > 0 && (
                    <button
                      onClick={markAllAsRead}
                      className="text-greenblue text-sm hover:underline"
                    >
                      Mark all read
                    </button>
                  )}
                </div>
              </div>

              {/* Notifications List */}
              <div className="flex-1 overflow-y-auto">
                {filteredNotifications.length > 0 ? (
                  <div className="divide-y divide-gray-800">
                    {filteredNotifications.map((notification) => {
                      const Icon = getIcon(notification.type);
                      return (
                        <motion.div
                          key={notification.id}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className={`p-4 hover:bg-white hover:bg-opacity-5 transition-colors ${
                            !notification.read ? "bg-white bg-opacity-5" : ""
                          }`}
                        >
                          <div className="flex gap-3">
                            <div
                              className={`flex-shrink-0 w-10 h-10 rounded-full ${getColor(
                                notification.type
                              )} bg-opacity-20 flex items-center justify-center border-2`}
                            >
                              <Icon
                                className={`${
                                  getColor(notification.type).split(" ")[0]
                                }`}
                              />
                            </div>

                            <div className="flex-1 min-w-0">
                              <div className="flex items-start justify-between gap-2">
                                <h4 className="text-white font-semibold text-sm">
                                  {notification.title}
                                </h4>
                                {!notification.read && (
                                  <div className="w-2 h-2 bg-greenblue rounded-full flex-shrink-0 mt-1" />
                                )}
                              </div>
                              <p className="text-gray-300 text-sm mt-1">
                                {notification.message}
                              </p>
                              <div className="flex items-center justify-between mt-2">
                                <span className="text-gray-400 text-xs">
                                  {notification.time}
                                </span>
                                <div className="flex gap-2">
                                  {!notification.read && (
                                    <button
                                      onClick={() =>
                                        markAsRead(notification.id)
                                      }
                                      className="text-greenblue text-xs hover:underline"
                                    >
                                      Mark read
                                    </button>
                                  )}
                                  {notification.link && (
                                    <a
                                      href={notification.link}
                                      className="text-greenblue text-xs hover:underline"
                                      onClick={() => setIsOpen(false)}
                                    >
                                      View
                                    </a>
                                  )}
                                  <button
                                    onClick={() =>
                                      deleteNotification(notification.id)
                                    }
                                    className="text-red-400 text-xs hover:underline"
                                  >
                                    Delete
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center py-12 text-gray-400">
                    <FaBell size={48} className="mb-4 opacity-30" />
                    <p>
                      No {filter === "unread" ? "unread" : ""} notifications
                    </p>
                  </div>
                )}
              </div>

              {/* Footer */}
              {filteredNotifications.length > 0 && (
                <div className="p-3 border-t border-gray-800 text-center">
                  <button className="text-greenblue text-sm hover:underline">
                    View All Notifications
                  </button>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NotificationCenter;
