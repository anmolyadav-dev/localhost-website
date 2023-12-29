"use client"
import { useState } from "react";
import Link from "next/link";

interface AssignmentCardProps {
  assignmentTitle: string;
  tags?: string[];
  assignmentDescription: string;
  dueDate: string;
  assignmentId: string;
}

const AssignmentCard = ({
  assignmentTitle,
  tags = [],
  assignmentDescription,
  dueDate,
  assignmentId,
}: AssignmentCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="bg-white bg-opacity-10 shadow-lg rounded-md overflow-hidden">
      <div className="p-4">
        <h2 className="text-xl text-white font-semibold mb-2">
          {assignmentTitle}
        </h2>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span key={index} className="bg-white text-black px-2 py-1 rounded">
              {tag}
            </span>
          ))}
        </div>
        <p className="text-white mb-4">{assignmentDescription}</p>
        <p className="text-white">Due Date: {dueDate}</p>
        <div className="mt-4 flex justify-between items-center">
          <button
            onClick={openModal}
            className="bg-blue-500 text-white px-4 py-2 rounded mr-2 hover:bg-blue-600"
          >
            More Details
          </button>
          <Link
            href={`/assignments/submit/${assignmentId}`}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Submit Assignment
          </Link>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 px-3 flex items-center justify-center">
          <div className="bg-white p-6 rounded-md">
            <h2 className="text-2xl font-semibold mb-2">{assignmentTitle}</h2>
            <div className="flex flex-wrap gap-2 mb-4">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-blue-500 text-white px-2 py-1 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
            <p className="text-gray-700 mb-4">{assignmentDescription}</p>
            <p className="text-gray-600">Due Date: {dueDate}</p>
            <button
              onClick={closeModal}
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AssignmentCard;
