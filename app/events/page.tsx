// Import the necessary modules
import EventCard from "../components/EventCard";

// Your events data
const eventsData = [
  {
    eventName: "Next.js Meetup",
    eventDate: "December 15, 2023",
    eventLocation: "Virtual Event",
    imageUrl: "/images/nextjs-meetup.jpg",
  },
  {
    eventName: "Next.js Meetup",
    eventDate: "December 15, 2023",
    eventLocation: "Virtual Event",
    imageUrl: "/images/nextjs-meetup.jpg",
  },
  {
    eventName: "Next.js Meetup",
    eventDate: "December 15, 2023",
    eventLocation: "Virtual Event",
    imageUrl: "/images/nextjs-meetup.jpg",
  },

];

const Page = () => {
  return (
    <div className="bg-bg-star bg-cover min-h-screen bg-left lg:bg-center">
      <h2 className="font-[mine] text-6xl text-white pt-32 px-10">
        E<span className="text-[#4DFFDB]">V</span>ENTS
      </h2>

      <div className="grid justify-center items-center px-10 py-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {eventsData.map((event, index) => (
          <EventCard
            key={index} // Using the index as the key
            eventId={index.toString()} // Using the index as the eventId
            eventName={event.eventName}
            eventDate={event.eventDate}
            eventLocation={event.eventLocation}
            imageUrl={event.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Page;
