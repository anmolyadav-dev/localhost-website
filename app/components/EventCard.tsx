"use client";
import Image from "next/image";
import Link from "next/link";

interface EventCardProps {
  eventId: string;
  eventName: string;
  eventDate: string;
  eventLocation: string;
  EventDescription: string;
  imageUrl: string;
  websiteUrl: string;
  registerUrl: string;
}

const EventCard = ({
  eventId,
  eventName,
  eventDate,
  eventLocation,
  EventDescription,
  imageUrl,
  websiteUrl,
  registerUrl,
}: EventCardProps) => {
  const isEventUpcoming = new Date(eventDate) > new Date();

  let description;
  const limit = 84;
  if (EventDescription.length <= limit) {
    description = EventDescription;
  }
  else{
    description = EventDescription.substring(0, limit) + " ...";
  }

  return (
    <div className="bg-white bg-opacity-20 shadow-lg rounded-md overflow-hidden w-96">
      <div className="relative h-72 w-full">
        <Image
          src={imageUrl}
          alt={eventName}
          layout="fill"
          objectFit="contain"
        />
      </div>

      <div className="p-4">
        <h2 className="text-2xl text-white font-semibold mb-2">{eventName}</h2>

        <p className="mb-2 text-white">
          <span className="mr-2">{eventDate}</span>•
          <span className="ml-2">{eventLocation}</span>
        </p>

        <p className="text-white mb-4 ">{description}</p>

        <Link
          href={websiteUrl ? websiteUrl : `/events/${eventId}`}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300 mr-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Details
        </Link>
        <Link
          href={registerUrl ? registerUrl : "Registration button clicked"}
          className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          Register
        </Link>

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
