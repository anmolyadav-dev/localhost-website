// EventCard.tsx

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
    return (
        <div className="bg-white shadow-lg rounded-md overflow-hidden">
            <div className="relative h-48">
                <Image src={imageUrl} alt={eventName} layout="fill" objectFit="cover" />
            </div>

            <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{eventName}</h2>

                <p className="text-gray-600 mb-4">
                    <span className="mr-2">{eventDate}</span>•
                    <span className="ml-2">{eventLocation}</span>
                </p>

                <Link
                    href={`/events/${eventId}`}
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
                >
                    View Details
                </Link>
            </div>
        </div>
    );
};

export default EventCard;
