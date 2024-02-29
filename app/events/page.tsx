// Import the necessary modules
import EventCard from "../components/EventCard";

// Your events data
const eventsData = [
  {
    eventId: "1",
    eventName: "Tech Conference 2023",
    eventDate: "2023-12-29",
    eventLocation: "Virtual",
    imageUrl: "/images/tech_conference.jpg",
  },
  {
    eventId: "2",
    eventName: "Webinar on AI in Healthcare",
    eventDate: "2023-04-15",
    eventLocation: "Online",
    imageUrl: "/images/ai_webinar.jpg",
  },
  {
    eventId: "3",
    eventName: "Hackathon: Code for a Cause",
    eventDate: "2023-06-10",
    eventLocation: "In-person",
    imageUrl: "/images/hackathon.jpg",
  },
  {
    eventId: "4",
    eventName: "Hackathon: Code for a Cause",
    eventDate: "2023-06-10",
    eventLocation: "In-person",
    imageUrl: "/images/hackathon.jpg",
  },
];

const Page = () => {
  return (
    <div className="bg-bg-star bg-cover min-h-screen bg-left lg:bg-center">
      <h2 className="font-minecraft text-4xl lg:text-6xl text-white pt-32 px-10">
        E<span className="text-greenblue">V</span>ENTS
      </h2>

      <div className="flex flex-wrap justify-center items-center gap-4 p-8">
        {eventsData.map((event) => (
          <EventCard key={event.eventId} {...event} />
        ))}
      </div>
    </div>
  );
};

export default Page;
