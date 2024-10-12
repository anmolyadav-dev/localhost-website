"use client";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useAppContext } from "@/context";
import toast from "react-hot-toast";
import { useEffect } from "react";
import axios from "axios";

const SubmitPortal = () => {
  const { teamName, setTeamName } = useAppContext();

  // useEffect(() => {
  //   // Retrieve teamName from localStorage if available
  //   const storedTeamName = localStorage.getItem("teamName");
  //   if (storedTeamName) {
  //     setTeamName(storedTeamName);
  //   }
  // }, []);

  // Yup schema for form validation
  const validationSchema = Yup.object().shape({
    description: Yup.string().required("Project description is required"),
    githubLink: Yup.string()
      .url("Invalid URL")
      .required("GitHub link is required"),
    driveLink: Yup.string()
      .url("Invalid URL")
      .required("Drive link is required"),
  });

  // Initial form values
  const initialValues = {
    description: "",
    githubLink: "",
    driveLink: "",
  };

  const handleSubmit = async (
    values: any,
    { setSubmitting, resetForm }: any
  ) => {
    try {
      const data = {
        teamName: teamName,
        ...values,
      };
      console.log(data);

      const response = await axios.post("/api/hackiniiitp/submit", data);

      if (response.data.message === "Project submitted successfully") {
        toast.success("Project submitted successfully");

        resetForm();
      } else {
        toast.error("Failed to submit project. Please try again.");
      }
    } catch (error) {
      toast.error("An error occurred while submitting the project.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="w-80 lg:w-96 mx-auto p-4 bg-white bg-opacity-10 text-white rounded shadow-lg my-6">
      <h2 className="text-2xl font-semibold mb-4">Submit Portal</h2>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="mb-4 text-white">
              <label htmlFor="teamName" className="block font-semibold">
                Team Name:
              </label>
              <Field
                id="teamName"
                type="text"
                value={teamName}
                disabled
                className="w-full bg-white bg-opacity-10 border p-2 rounded"
              />
            </div>
            <div className="mb-4 text-white">
              <label htmlFor="description" className="block font-semibold mb-1">
                Project Description:
              </label>
              <Field
                id="description"
                type="text"
                name="description"
                as="textarea"
                className="w-full bg-white bg-opacity-10 border p-2 rounded"
              />
              <ErrorMessage
                name="projectDescription"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="githubLink" className="block font-semibold mb-1">
                GitHub Link:
              </label>
              <Field
                id="githubLink"
                type="text"
                name="githubLink"
                className="w-full bg-white bg-opacity-10 border p-2 rounded"
              />
              <ErrorMessage
                name="githubLink"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="driveLink" className="block  font-semibold mb-1">
                Drive Link for More Details:
              </label>
              <Field
                id="driveLink"
                type="text"
                name="driveLink"
                className="w-full bg-white bg-opacity-10 border p-2 rounded"
              />
              <ErrorMessage
                name="driveLink"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SubmitPortal;
