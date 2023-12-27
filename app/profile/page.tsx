"use client"
import axios from "axios";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await axios.get('api/users/logout')
    } catch (error: any) {
      console.log(error.message)
    }
    router.push("/");
    window.location.reload();
  };

  return (
    <div className="bg-bg-star bg-cover min-h-screen bg-left lg:bg-center">
      <h2 className="font-[mine] text-6xl text-white pt-32 px-10">
        Profile Page
      </h2>

      <button
        onClick={handleLogout}
        className="bg-red-500 text-white px-4 py-2 rounded-md m-10 hover:bg-red-600 cursor-pointer"
      >
        Logout
      </button>
    </div>
  );
};

export default Page;
