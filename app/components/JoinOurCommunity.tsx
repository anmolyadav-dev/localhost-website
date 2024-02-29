import Link from "next/link";
import { FaDiscord } from "react-icons/fa";
import { FaSlack } from "react-icons/fa";

const JoinOurCommunity = () => {
  return (
    <div className="bg-bg-star min-h-screen bg-left lg:bg-center">
      <h2 className="font-minecraft text-5xl text-white pt-32 pb-10 px-10 text-center">
        JO<span className="text-greenblue">I</span>N O
        <span className="text-greenblue">U</span>R CO
        <span className="text-greenblue">MM</span>UNITY
      </h2>

      <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-72">
        <Link href="https://discord.gg/8wEquGh4CY">
          <div className="text-black h-24 w-60 bg-white bg-opacity-50 rounded-2xl flex gap-3 justify-center items-center text-3xl hover:bg-opacity-90 cursor-pointer">
            <FaDiscord size={50} />
            DISCORD
          </div>
        </Link>
        <Link href="">
          <div className="text-black h-24 w-60 bg-white bg-opacity-50 rounded-2xl flex gap-3 justify-center items-center text-3xl hover:bg-opacity-90 cursor-pointer">
            <FaSlack size={50} />
            SLACK
          </div>
        </Link>
      </div>
    </div>
  );
};

export default JoinOurCommunity;
