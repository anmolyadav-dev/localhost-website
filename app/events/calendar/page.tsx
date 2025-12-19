"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight, FaCalendarAlt } from "react-icons/fa";

interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  category: string;
  color: string;
}

const events: Event[] = [
  {
    id: "1",
    title: "HackIn IIITP",
    date: "2025-03-15",
    time: "9:00 AM",
    category: "Hackathon",
    color: "bg-blue-500",
  },
  {
    id: "2",
    title: "Web Dev Workshop",
    date: "2025-11-10",
    time: "4:00 PM",
    category: "Workshop",
    color: "bg-green-500",
  },
  {
    id: "3",
    title: "Tech Talk: AI",
    date: "2025-11-20",
    time: "6:00 PM",
    category: "Tech Talk",
    color: "bg-purple-500",
  },
  {
    id: "4",
    title: "Winter of Code Kickoff",
    date: "2025-12-01",
    time: "10:00 AM",
    category: "Open Source",
    color: "bg-yellow-500",
  },
  {
    id: "5",
    title: "Code Review Session",
    date: "2025-11-05",
    time: "5:00 PM",
    category: "Workshop",
    color: "bg-green-500",
  },
];

const CalendarPage = () => {
  const [currentDate, setCurrentDate] = useState(new Date(2025, 10, 1)); // November 2025
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const daysInMonth = getDaysInMonth(currentDate);
  const firstDay = getFirstDayOfMonth(currentDate);

  const previousMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1)
    );
  };

  const nextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1)
    );
  };

  const getEventsForDate = (day: number) => {
    const dateStr = `${currentDate.getFullYear()}-${String(
      currentDate.getMonth() + 1
    ).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    return events.filter((event) => event.date === dateStr);
  };

  const selectedDateEvents = selectedDate
    ? events.filter((e) => e.date === selectedDate)
    : [];

  const renderCalendarDays = () => {
    const days = [];

    // Empty cells for days before month starts
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="p-2"></div>);
    }

    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const dateStr = `${currentDate.getFullYear()}-${String(
        currentDate.getMonth() + 1
      ).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
      const dayEvents = getEventsForDate(day);
      const isSelected = selectedDate === dateStr;
      const isToday =
        new Date().getDate() === day &&
        new Date().getMonth() === currentDate.getMonth() &&
        new Date().getFullYear() === currentDate.getFullYear();

      days.push(
        <motion.div
          key={day}
          whileHover={{ scale: 1.05 }}
          onClick={() => setSelectedDate(dateStr)}
          className={`p-2 min-h-[80px] border border-gray-700 rounded-lg cursor-pointer transition-all ${
            isSelected
              ? "bg-greenblue bg-opacity-20 border-greenblue"
              : isToday
              ? "bg-white bg-opacity-10"
              : "hover:bg-white hover:bg-opacity-5"
          }`}
        >
          <div
            className={`text-sm font-semibold mb-1 ${
              isToday ? "text-greenblue" : "text-white"
            }`}
          >
            {day}
          </div>
          <div className="space-y-1">
            {dayEvents.slice(0, 2).map((event) => (
              <div
                key={event.id}
                className={`${
                  event.color
                } bg-opacity-20 text-white text-xs px-1 py-0.5 rounded truncate border ${event.color.replace(
                  "bg-",
                  "border-"
                )} border-opacity-50`}
              >
                {event.title}
              </div>
            ))}
            {dayEvents.length > 2 && (
              <div className="text-xs text-gray-400">
                +{dayEvents.length - 2} more
              </div>
            )}
          </div>
        </motion.div>
      );
    }

    return days;
  };

  return (
    <div className="bg-bg-star bg-cover min-h-screen bg-left lg:bg-center pt-32 px-4 lg:px-10 pb-16">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="font-minecraft text-4xl lg:text-6xl text-white mb-4">
            Event <span className="text-greenblue">Calendar</span>
          </h1>
          <p className="text-gray-300 text-lg">
            View all upcoming events in calendar format
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Calendar */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white bg-opacity-5 backdrop-blur-md rounded-xl p-6 border border-greenblue border-opacity-30"
            >
              {/* Calendar Header */}
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-semibold text-white">
                  {monthNames[currentDate.getMonth()]}{" "}
                  {currentDate.getFullYear()}
                </h2>
                <div className="flex gap-2">
                  <button
                    title="Previous Month"
                    onClick={previousMonth}
                    className="p-2 bg-white bg-opacity-10 hover:bg-opacity-20 rounded-lg transition-all text-white"
                  >
                    <FaChevronLeft />
                  </button>
                  <button
                    title="Next Month"
                    onClick={nextMonth}
                    className="p-2 bg-white bg-opacity-10 hover:bg-opacity-20 rounded-lg transition-all text-white"
                  >
                    <FaChevronRight />
                  </button>
                </div>
              </div>

              {/* Day headers */}
              <div className="grid grid-cols-7 gap-2 mb-2">
                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
                  (day) => (
                    <div
                      key={day}
                      className="text-center text-gray-400 text-sm font-semibold p-2"
                    >
                      {day}
                    </div>
                  )
                )}
              </div>

              {/* Calendar grid */}
              <div className="grid grid-cols-7 gap-2">
                {renderCalendarDays()}
              </div>

              {/* Legend */}
              <div className="mt-6 flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-blue-500 rounded"></div>
                  <span className="text-gray-300 text-sm">Hackathon</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-green-500 rounded"></div>
                  <span className="text-gray-300 text-sm">Workshop</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-purple-500 rounded"></div>
                  <span className="text-gray-300 text-sm">Tech Talk</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-yellow-500 rounded"></div>
                  <span className="text-gray-300 text-sm">Open Source</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Event Details Sidebar */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white bg-opacity-5 backdrop-blur-md rounded-xl p-6 border border-greenblue border-opacity-30 sticky top-32"
            >
              <h3 className="text-xl font-semibold text-white mb-4">
                {selectedDate
                  ? "Events on Selected Date"
                  : "All Upcoming Events"}
              </h3>

              <div className="space-y-4">
                {(selectedDate ? selectedDateEvents : events).map((event) => (
                  <div
                    key={event.id}
                    className="bg-white bg-opacity-5 rounded-lg p-4 border border-gray-700 hover:border-greenblue hover:border-opacity-50 transition-all"
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className={`${event.color} w-3 h-3 rounded-full mt-1 flex-shrink-0`}
                      ></div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-white font-semibold mb-1">
                          {event.title}
                        </h4>
                        <p className="text-gray-300 text-sm mb-2">
                          {event.category}
                        </p>
                        <div className="flex items-center gap-2 text-xs text-gray-400">
                          <FaCalendarAlt className="text-greenblue" />
                          <span>
                            {event.date} at {event.time}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {selectedDate && (
                <button
                  onClick={() => setSelectedDate(null)}
                  className="w-full mt-4 py-2 bg-white bg-opacity-10 hover:bg-opacity-20 text-white rounded-lg transition-all"
                >
                  Clear Selection
                </button>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarPage;
