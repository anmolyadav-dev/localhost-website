// Import necessary libraries
"use client";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";

// ... (other imports)

const Page = () => {
  const router = useRouter();
  const { assignmentId } = useParams();
  const [username, setUsername] = useState(null);

  const getUserDetails = async () => {
    try {
      const res = await axios.get("/api/me");
      setUsername(res.data.data.username);
    } catch (error) {
      console.error("Error fetching user details:", error);
    }
  };
  useEffect(() => {
    getUserDetails();
  }, []);

  // Formik form validation schema
  const validationSchema = Yup.object({
    githubLink: Yup.string()
      .url("Invalid URL")
      .required("GitHub Link is required"),
  });

  // Formik form handling
  const formik = useFormik({
    initialValues: {
      githubLink: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        if (!username) {
          router.push("/login");
        } else {
          const response = await axios.post("/api/users/submit", {
            username,
            assignmentNumber: parseInt(assignmentId as string),
            githubLink: values.githubLink,
          });
          router.push('/assignments')
          toast.success("Assignment submitted successfully!");

          resetForm();
        }
      } catch (error) {
        console.error("Error submitting assignment:", error);

        alert("Error submitting assignment. Please try again later.");
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <div className="bg-bg-star bg-cover min-h-screen bg-left lg:bg-center">
      {/* ... rest of your page content */}
      <div className="container mx-auto p-8">
        <h2 className="font-[mine] text-4xl text-white mb-6 pt-32">
          Submit Assignment #{assignmentId}
        </h2>
        <div className="max-w-md mx-auto bg-white bg-opacity-10 p-6 rounded-md shadow-md">
          {/* Formik Form */}
          <form onSubmit={formik.handleSubmit}>
            {/* Username Display */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-white">
                Your Username:
              </label>
              <p className="text-white capitalize">{username}</p>
            </div>

            {/* GitHub Link Input */}
            <div className="mb-4">
              <label
                htmlFor="githubLink"
                className="block text-sm font-medium text-white"
              >
                Your GitHub Link:
              </label>
              <input
                id="githubLink"
                name="githubLink"
                type="text"
                className={`w-full px-3 py-2 border rounded-md focus:outline-none ${
                  formik.touched.githubLink && formik.errors.githubLink
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.githubLink}
              />
              {formik.touched.githubLink && formik.errors.githubLink ? (
                <div className="text-red-500 text-sm mt-1">
                  {formik.errors.githubLink}
                </div>
              ) : null}
            </div>

            {/* Submission Button */}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
              disabled={formik.isSubmitting}
            >
              {formik.isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Page;
