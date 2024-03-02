"use client";
import { useAppContext } from "@/context";
import axios from "axios";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const ProfilePage = () => {
  const router = useRouter();
  const {teamName, setTeamName} = useAppContext()

  const handleLogout = async () => {
    try {
      // Perform logout
      await axios.get("/api/hackiniiitp/logout");
      localStorage.removeItem("teamName");
      setTeamName("");
      toast.success("Logout Successful!");
      router.push("/hackiniiitp/login");
    } catch (error: any) {
      console.error("Error during logout:", error.message);
    }
    // window.location.reload();
  };

  return (
    <div className="bg-bg-star bg-cover min-h-screen bg-left lg:bg-center">
      <div className="container mx-auto p-8">
        <h2 className="font-minecraft text-5xl lg:text-6xl text-white pt-32 px-10">
          Welcome, Participant
        </h2>

        <div className="flex justify-between mt-8">
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 cursor-pointer"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
