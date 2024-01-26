import React from "react";
import { FaPlus } from "react-icons/fa6";

const Event = () => {
  return (
    <div className=" bg-white bg-opacity-20 p-4 rounded-b-lg">
      <form>
        <div className="flex justify-between">
          <h2 className="text-xl font-semibold mb-4">Add Assignment</h2>
          <button
            type="submit"
            title="Add Assignment"
            className="bg-green-500 text-white px-4 py-2 rounded-full"
          >
            <FaPlus />
          </button>
        </div>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="">
            <div className="mb-2">
              <label htmlFor="eventName">Event Name</label>
              <input
                type="text"
                id="eventName"
                name="eventName"
                className="border w-full px-4 py-2 text-black"
                placeholder="Enter Event Name"
              />
            </div>

            <div className="mb-2">
              <label htmlFor="eventDescription">Event Description</label>
              <input
                type="text"
                id="eventDescription"
                name="eventDescription"
                className="border w-full px-4 py-2 text-black"
                placeholder="Enter Event Description"
              />
            </div>
          </div>
          <div className="">
            <div className="mb-2">
              <label htmlFor="eventDate">Event Date</label>
              <input
                type="date"
                id="eventDate"
                name="eventDate"
                className="border w-full px-4 py-2 text-black"
                placeholder="Enter Event Date"
              />
            </div>
            <div className="mb-2">
              <label htmlFor="eventImage">Event Image</label>
              <input
                type="file"
                id="eventImage"
                name="eventImage"
                className="border w-full px-4 py-2 text-black"
                placeholder="Enter Event Date"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Event;
