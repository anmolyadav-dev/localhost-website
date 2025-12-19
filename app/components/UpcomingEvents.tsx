"use client";
import { motion } from "framer-motion";
import { FaCalendarAlt, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

interface Event {
  id: string;
  name: string;
  date: string;
  time: string;
  location: string;
  image: string;
  category: string;
  registered: number;
  maxCapacity: number;
}

const upcomingEvents: Event[] = [
  {
    id: "1",
    name: "HackIn IIITP 2025",
    date: "March 15, 2025",
    time: "9:00 AM",
    location: "IIIT Pune Campus",
    image: "/images/hackathon.jpg",
    category: "Hackathon",
    registered: 45,
    maxCapacity: 100,
  },
  {
    id: "2",
    name: "Web Development Workshop",
    date: "November 10, 2025",
    time: "4:00 PM",
    location: "Virtual",
    image: "/images/hackathon.jpg",
    category: "Workshop",
    registered: 78,
    maxCapacity: 100,
  },
  {
    id: "3",
    name: "Tech Talk: AI in Production",
    date: "November 20, 2025",
    time: "6:00 PM",
    location: "Seminar Hall",
    image: "/images/hackathon.jpg",
    category: "Tech Talk",
    registered: 32,
    maxCapacity: 50,
  },
];

const UpcomingEvents = () => {
  return (
    <div className="bg-white bg-opacity-5 backdrop-blur-md rounded-xl p-6 border border-greenblue border-opacity-30">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-minecraft text-white">
          Upcoming <span className="text-greenblue">Events</span>
        </h2>
        <Link href="/events">
          <button className="text-greenblue hover:text-white text-sm transition-colors">
            View All →
          </button>
        </Link>
      </div>

      <div className="space-y-4">
        {upcomingEvents.map((event, index) => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Link href={`/events/${event.id}`}>
              <div className="bg-white bg-opacity-5 rounded-lg hover:bg-opacity-10 transition-all cursor-pointer border border-transparent hover:border-greenblue hover:border-opacity-30 overflow-hidden">
                <div className="flex gap-4 p-4">
                  <div className="flex-shrink-0 w-20 h-20 relative rounded-lg overflow-hidden">
                    <Image
                      src={event.image}
                      alt={event.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-white font-semibold hover:text-greenblue transition-colors">
                        {event.name}
                      </h3>
                      <span className="px-2 py-1 text-xs bg-greenblue bg-opacity-20 text-greenblue rounded-full border border-greenblue border-opacity-30 whitespace-nowrap">
                        {event.category}
                      </span>
                    </div>

                    <div className="mt-2 space-y-1">
                      <div className="flex items-center gap-2 text-gray-300 text-sm">
                        <FaCalendarAlt className="text-greenblue text-xs" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-300 text-sm">
                        <FaClock className="text-greenblue text-xs" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-300 text-sm">
                        <FaMapMarkerAlt className="text-greenblue text-xs" />
                        <span>{event.location}</span>
                      </div>
                    </div>

                    <div className="mt-3 flex items-center justify-between">
                      <div className="text-xs text-gray-400">
                        {event.registered}/{event.maxCapacity} registered
                      </div>
                      <div className="w-32 h-1.5 bg-gray-700 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-greenblue rounded-full"
                          style={{
                            width: `${
                              (event.registered / event.maxCapacity) * 100
                            }%`,
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      <Link href="/events">
        <button className="w-full mt-4 py-3 bg-greenblue bg-opacity-20 hover:bg-opacity-30 text-greenblue font-semibold rounded-lg border border-greenblue border-opacity-30 transition-all">
          Explore All Events
        </button>
      </Link>
    </div>
  );
};

export default UpcomingEvents;
