"use client"
import { useParams } from "next/navigation";
import { useState } from "react";

interface AssignmentSubmitPageProps {
  assignmentId: string;
}

const AssignmentSubmitPage: React.FC<AssignmentSubmitPageProps> = () => {
  const { assignmentId } = useParams();
  const [githubLink, setGithubLink] = useState("");

  const handleSubmission = async () => {
    try {
      // Implement submission logic (e.g., API call, database interaction)
      // await submitAssignment(assignmentId, githubLink); // Replace with your submission logic

      // Redirect to success page
    
    } catch (error) {
      // Display user-friendly error message
      alert(
        "An error occurred while submitting the assignment. Please try again later."
      );
    }
  };

  return (
    <div className="bg-bg-star bg-cover min-h-screen bg-left lg:bg-center">
      {/* ... rest of your page content */}
      <div className="container mx-auto p-8">
        <h2 className="font-[mine] text-4xl text-white mb-6 pt-32">
          Submit Assignment #{assignmentId}
        </h2>
        <div className="max-w-md mx-auto bg-white p-6 rounded-md shadow-md">
          {/* GitHub Link Submission Form */}
          <label
            htmlFor="githublink"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Your GitHub Link:
          </label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            type="text"
            name="githublink"
            value={githubLink}
            placeholder="Github Link"
            onChange={(e) => setGithubLink(e.target.value)}
          />

          {/* Submission Button */}
          <button
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
            onClick={handleSubmission}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default AssignmentSubmitPage;
