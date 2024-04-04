import { Metadata } from "next";

const metadata: Metadata ={
  title:"About - Localhost"
}

const page = () => {
  return (
    <div className="bg-bg-star bg-cover min-h-screen bg-left lg:bg-center">
      <h2 className="font-minecraft text-4xl lg:text-6xl text-white pt-32 pb-5 lg:pb-10 px-10">
        <span className="text-greenblue">ABOUT</span> LOCALHOST
      </h2>
      <p className="font-northwood text-white text-5xl px-14">
        <span className="text-greenblue">LOCALHOST</span> the dynamic Dev Community at IIIT Pune, igniting innovation since 2022! 
        <p className="py-5">
        <span className="text-greenblue">Explore</span> coding challenges, hackathons, workshops, and tech talks, fostering creativity and problem-solving skills. 
        Engage with emerging technologies and industry collaborations, shaping the future of tech. Discover a vibrant space for learning and experimentation. 
        <p className="py-5">
        Join us on the journey of <span className="text-greenblue">discovery!</span>
        </p>
        </p>
        </p>
    </div>
  );
};

export default page;
