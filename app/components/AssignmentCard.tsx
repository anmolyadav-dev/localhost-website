"use client";
import Link from "next/link";

interface AssignmentCardProps {
  assignmentTitle: string;
  tags?: string[]; // Make tags optional
  assignmentDescription: string;
  dueDate: string;
  assignmentId: string;
}

const AssignmentCard = ({
  assignmentTitle,
  tags = [], // Provide a default empty array
  assignmentDescription,
  dueDate,
  assignmentId,
}: AssignmentCardProps) => {
  return (
    <div className="bg-white bg-opacity-10 shadow-lg rounded-md overflow-hidden">
      <div className="p-4">
        <h2 className="text-xl text-white font-semibold mb-2">
          {assignmentTitle}
        </h2>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="bg-white text-black px-2 py-1 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
        <p className="text-white mb-4">{assignmentDescription}</p>
        <p className="text-white">Due Date: {dueDate}</p>
        <div className="mt-4 flex justify-between items-center">
          <Link
            href={`/assignments/${assignmentId}`}
            className="bg-blue-500 text-white px-4 py-2 rounded mr-2 hover:bg-blue-600"
          >
            More Details
          </Link>
          <Link
            href={`/submit/${assignmentId}`}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Submit Assignment
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AssignmentCard;
