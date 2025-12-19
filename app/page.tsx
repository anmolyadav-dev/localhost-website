"use client";
import JoinOurCommunity from "./components/JoinOurCommunity";
import LandingPage from "./components/LandingPage";
import Team from "./components/Team";
import ActivityFeed from "./components/ActivityFeed";
import UpcomingEvents from "./components/UpcomingEvents";

const Page = () => {
  return (
    <div>
      <LandingPage />

      {/* Activity Dashboard Section */}
      <div className="bg-bg-star bg-cover bg-left lg:bg-center py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-minecraft text-4xl lg:text-5xl text-white text-center mb-12">
            What&apos;s <span className="text-greenblue">Happening</span>
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <ActivityFeed />
            <UpcomingEvents />
          </div>
        </div>
      </div>

      <Team />
      <JoinOurCommunity />
    </div>
  );
};

export default Page;
