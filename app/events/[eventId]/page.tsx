"use client";
import { useParams } from "next/navigation";

const EventDetailPage = () => {
  const { eventId } = useParams<{ eventId: string }>(); // Extract eventId directly

  // Handle potential missing eventId
  const displayEventId = eventId || "no Event ID";

  const eventData = {
    eventName: "Next.js Meetup",
    eventDate: "December 15, 2023",
    eventLocation: "Virtual Event",
    eventDescription:
      "Join us for an exciting Next.js meetup with informative talks and networking!",
    speakers: [
      { id: 1, name: "John Doe", title: "Senior Developer" },
      { id: 2, name: "Jane Smith", title: "Frontend Engineer" },
    ],
  };

  return (
    <div className="bg-bg-star bg-cover min-h-screen bg-left lg:bg-center">
      <h2 className="font-minecraft text-6xl text-white pt-32 px-10">
        E<span className="text-greenblue">V</span>ENT DETAIL
        <span className="text-greenblue">S</span>
      </h2>
      <div className="">
        <div className="container mx-auto p-8">
          <h2 className="font-minecraft text-4xl text-white mb-6">
            Event Details - #{eventId}
          </h2>
          <div className="max-w-2xl mx-auto bg-white p-6 rounded-md shadow-md">
            {/* Event Details */}
            <h3 className="text-3xl font-semibold mb-4">
              {eventData.eventName}
            </h3>
            <p className="text-gray-600 mb-2">
              <span className="font-semibold">Date:</span> {eventData.eventDate}
            </p>
            <p className="text-gray-600 mb-4">
              <span className="font-semibold">Location:</span>{" "}
              {eventData.eventLocation}
            </p>
            <p className="text-gray-800">{eventData.eventDescription}</p>

            {/* Speakers Section */}
            <div className="mt-8">
              <h4 className="text-xl font-semibold mb-4">Speakers</h4>
              <ul className="space-y-4">
                {eventData.speakers.map((speaker) => (
                  <li key={speaker.id}>
                    <div className="text-gray-800">
                      <span className="font-semibold">{speaker.name}</span> -{" "}
                      {speaker.title}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Additional event details or components can be added here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetailPage;
