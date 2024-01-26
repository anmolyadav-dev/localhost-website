"use client"
import React, { SetStateAction, useState } from "react";

const Table = () => {
  const [activeTab, setActiveTab] = useState("assignments");

  const handleTabChange = (tab: SetStateAction<string>) => {
    setActiveTab(tab);
  };

  const assignmentsData = [
    // Replace with actual data
    {
      id: 1,
      name: "Assignment 1",
      description: "Description 1",
      dueDate: "2024-01-28",
      tags: ["Tag 1", "Tag 2"],
      submission: "10",
    },
    // Add more assignments as needed
  ];

  const registrationData = [
    // Replace with actual data
    {
      id: 1,
      eventName: "Event 1",
      eventDescription: "Event Description 1",
      eventDate: "2024-02-15",
      registrations: "10",
    },
    // Add more events as needed
  ];

  return (
    <div className="bg-gray-800 text-white p-4 rounded-t-lg overflow-x-auto">
      <div className="mb-4 flex flex-wrap">
        <button
          className={`mr-4 mb-2 ${
            activeTab === "assignments"
              ? "bg-blue-500 text-white"
              : "text-blue-500 hover:bg-blue-500 hover:text-white"
          } px-4 py-2 rounded transition duration-300`}
          onClick={() => handleTabChange("assignments")}
        >
          Assignments
        </button>
        <button
          className={`${
            activeTab === "registration"
              ? "bg-green-500 text-white"
              : "text-green-500 hover:bg-green-500 hover:text-white"
          } px-4 py-2 rounded transition duration-300`}
          onClick={() => handleTabChange("registration")}
        >
          Registration
        </button>
      </div>

      {/* Display Assignment or Registration Table based on activeTab */}
      {activeTab === "assignments" ? (
        <table className="w-full text-white bg-gray-700 rounded">
          <thead>
            <tr>
              <th className="border px-4 py-2">Assignment Name</th>
              <th className="border px-4 py-2">Description</th>
              <th className="border px-4 py-2">Due Date</th>
              <th className="border px-4 py-2">Tags</th>
              <th className="border px-4 py-2">Submissions</th>
            </tr>
          </thead>
          <tbody>
            {assignmentsData.map((assignment) => (
              <tr key={assignment.id}>
                <td className="border px-4 py-2">{assignment.name}</td>
                <td className="border px-4 py-2">{assignment.description}</td>
                <td className="border px-4 py-2">{assignment.dueDate}</td>
                <td className="border px-4 py-2">
                  {assignment.tags.join(", ")}
                </td>
                <td className="border px-4 py-2">{assignment.submission}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <table className="w-full text-white bg-gray-700 rounded">
          <thead>
            <tr>
              <th className="border px-4 py-2">Event Name</th>
              <th className="border px-4 py-2">Description</th>
              <th className="border px-4 py-2">Date</th>
              <th className="border px-4 py-2">Registrations</th>
            </tr>
          </thead>
          <tbody>
            {registrationData.map((event) => (
              <tr key={event.id}>
                <td className="border px-4 py-2">{event.eventName}</td>
                <td className="border px-4 py-2">{event.eventDescription}</td>
                <td className="border px-4 py-2">{event.eventDate}</td>
                <td className="border px-4 py-2">{event.registrations}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Table;
