// Import necessary libraries
"use client"
import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const ProfilePage = () => {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [updatingDetails, setUpdatingDetails] = useState(false);
  const [newDetails, setNewDetails] = useState({
    username: "",
    email: "",
    // Add more fields as needed
  });
  const getUserDetails = async () => {
    try {
      const response = await axios.get("/api/me");
      setUser(response.data.data);
    } catch (error) {
      console.error("Error fetching user details:", error);
      // Redirect to login if there is an error or user is not authenticated
      router.push("/login");
    }
  };
  useEffect(() => {
    // Fetch user details when the component mounts
    getUserDetails();
  }, []);

  const handleLogout = async () => {
    try {
      // Perform logout
      await axios.get("/api/users/logout");
      router.push("/login");
    } catch (error: any) {
      console.error("Error during logout:", error.message);
    }
  };

  const handleUpdateDetails = () => {
    // Toggle the state to show/hide the update details form
    setUpdatingDetails((prev) => !prev);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdateSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send the updated details to the server
      const response = await axios.put("/api/users/update", newDetails);
      // Log the success message
      console.log("Details updated successfully:", response.data.message);
      // Fetch updated user details
      getUserDetails();
    } catch (error: any) {
      console.error("Error updating details:", error.message);
    } finally {
      // Reset the form and hide the update details form
      setNewDetails({
        username: "",
        email: "",
        // Reset more fields as needed
      });
      setUpdatingDetails(false);
    }
  };

  if (!user) {
    // Show a loading state or redirect to login if the user is not authenticated
    return null;
  }

  return (
    <div className="bg-bg-star bg-cover min-h-screen bg-left lg:bg-center">
      <div className="container mx-auto p-8">
        <h2 className="font-[mine] text-6xl text-white pt-32 px-10">
          Welcome, {user.username}!
        </h2>

        <div className="bg-white bg-opacity-10 p-6 rounded-md shadow-md mt-8">
          <h3 className="text-xl font-medium text-white mb-4">
            Your Profile Details
          </h3>
          <p className="text-gray-300">
            <strong>Email:</strong> {user.email}
          </p>
          {/* Add more user details as needed */}
        </div>

        {updatingDetails ? (
          // Update Details Form
          <form
            className="bg-white bg-opacity-10 p-6 rounded-md shadow-md mt-8"
            // onSubmit={handleUpdateSubmit}
          >
            <h3 className="text-xl font-medium text-white mb-4">
              Update Your Details
            </h3>
            <div className="mb-4">
              <label
                htmlFor="username"
                className="block text-sm font-medium text-white"
              >
                New Username:
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={newDetails.username}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none border-gray-300"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-white"
              >
                New Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={newDetails.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none border-gray-300"
              />
            </div>
            {/* Add more fields as needed */}
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 cursor-pointer"
            >
              Update
            </button>
          </form>
        ) : (
          // Buttons for Logout and Update Details
          <div className="flex justify-between mt-8">
            <button
              onClick={handleUpdateDetails}
              disabled
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 cursor-pointer"
            >
              Update Details
            </button>
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 cursor-pointer"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
