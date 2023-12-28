// Import the necessary modules
import AssignmentCard from "../components/AssignmentCard";

// Your assignments data
const assignmentsData = [
  {
    assignmentTitle: "React Basics",
    assignmentDescription:
      "Build a simple React component and understand the basics of state and props.",
    dueDate: "January 31, 2023",
  },
  {
    assignmentTitle: "React Basics",
    assignmentDescription:
      "Build a simple React component and understand the basics of state and props.",
    dueDate: "January 31, 2023",
  },
  {
    assignmentTitle: "React Basics",
    assignmentDescription:
      "Build a simple React component and understand the basics of state and props.",
    dueDate: "January 31, 2023",
  },
  {
    assignmentTitle: "React Basics",
    assignmentDescription:
      "Build a simple React component and understand the basics of state and props.",
    dueDate: "January 31, 2023",
  },
  {
    assignmentTitle: "React Basics",
    assignmentDescription:
      "Build a simple React component and understand the basics of state and props.",
    dueDate: "January 31, 2023",
  },
  {
    assignmentTitle: "React Basics",
    assignmentDescription:
      "Build a simple React component and understand the basics of state and props.",
    dueDate: "January 31, 2023",
  },
];

const Page = () => {
  return (
    <div className="bg-bg-star bg-cover min-h-screen bg-left lg:bg-center">
      <h2 className="font-[mine] text-4xl lg:text-6xl text-white pt-32 px-10">
        A<span className="text-[#4DFFDB]">SS</span>IGNMENT
        <span className="text-[#4DFFDB]">S</span>
      </h2>

      <div className="grid justify-center items-center px-10 py-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {assignmentsData.map((assignment, index) => (
          <AssignmentCard
            key={index} // Using the index as the key
            assignmentId={index.toString()} // Using the index as the assignmentId
            assignmentTitle={assignment.assignmentTitle}
            assignmentDescription={assignment.assignmentDescription}
            dueDate={assignment.dueDate}
          />
        ))}
      </div>
    </div>
  );
};

export default Page;
