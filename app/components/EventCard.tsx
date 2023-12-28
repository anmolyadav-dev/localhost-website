"use client"
import Image from "next/image";
import Link from "next/link";

interface EventCardProps {
  eventId: string;
  eventName: string;
  eventDate: string;
  eventLocation: string;
  imageUrl: string;
}

const EventCard = ({
  eventId,
  eventName,
  eventDate,
  eventLocation,
  imageUrl,
}: EventCardProps) => {
  // Check if the event is upcoming or completed
  const isEventUpcoming = new Date(eventDate) > new Date();

  return (
    <div className="bg-white shadow-lg rounded-md overflow-hidden w-96">
      <div className="relative h-72 w-full">
        <Image src={imageUrl} alt={eventName} layout="fill" objectFit="cover" />
      </div>

      <div className="p-4">
        <h2 className="text-2xl font-semibold mb-2">{eventName}</h2>

        <p className="text-gray-600 mb-4">
          <span className="mr-2">{eventDate}</span>•
          <span className="ml-2">{eventLocation}</span>
        </p>

        <p className="text-gray-700 mb-4">
          Event description goes here...
        </p>

        <Link
          href={`/events/${eventId}`}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300 mr-2"
        >
          View Details
        </Link>

        <button
          className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-300"
          onClick={() => alert("Registration button clicked")}
        >
          Register
        </button>

        <p
          className={`mt-4 ${
            isEventUpcoming ? "text-green-600" : "text-red-600"
          }`}
        >
          {isEventUpcoming ? "Upcoming Event" : "Completed Event"}
        </p>
      </div>
    </div>
  );
};

export default EventCard;
