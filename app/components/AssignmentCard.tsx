import Link from "next/link";

interface AssignmentCardProps {
  assignmentTitle: string; // Explicitly declare the type of assignmentTitle as string
  assignmentDescription: string;
  dueDate: string;
  assignmentId: string;
}

const AssignmentCard = ({
  assignmentTitle,
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
        <p className="text-white mb-4">{assignmentDescription}</p>
        <p className="text-white">Due Date: {dueDate}</p>
        <Link
          href={`/assignments/${assignmentId}`}
          className="text-blue-500 hover:underline"
        >
          Submit Assignment
        </Link>
      </div>
    </div>
  );
};

export default AssignmentCard;
