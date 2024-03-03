"use client"

import { Formik, Form } from "formik";
import * as Yup from "yup";
import TeamDetailsForm from "./TeamDetailsForm";
import TeamMembersForm from "./TeamMembersForm";
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation";

const SubmitButton = () => {
  return (
    <button
      type="submit"
      className="bg-blue-500 text-white font-bold py-2 px-4 rounded mt-4"
    >
      Submit
    </button>
  );
};

const TeamRegistrationPage = () => {
  const router = useRouter();
  const [registrationError, setRegistrationError] = useState("");

  const handleSubmit = async (values: any) => {
    try {
      const response = await axios.post(
        "/api/hackiniiitp/registration",
        values
      );
      
      router.push("/hackiniiitp/login");
    } catch (error) {
      console.error("Error registering team:", error);
      setRegistrationError("Error registering team");
    }
  };

  return (
    <div className="bg-bg-star bg-cover min-h-screen bg-left lg:bg-center">
      <div className="bg-black bg-opacity-50 p-8 rounded-lg pt-32">
        <h2 className="text-3xl font-bold mb-4 text-white text-center">
          Team Registration
        </h2>
        <div className="lg:hidden"> {/* Display for mobile devices */}
          <Formik
            initialValues={{
              teamName: "",
              teamLeader: "",
              theme: "",
              password: "",
              confirmPassword: "",
              teamMembers: [{ name: "", email: "", linkedin: "", github: "" }],
            }}
            validationSchema={Yup.object({
              // Validation schema remains the same
            })}
            onSubmit={(values, { setSubmitting }) => {
              handleSubmit(values);
              setSubmitting(false);
            }}
          >
            {({ values, setFieldValue }) => (
              <Form className="flex flex-col gap-4">
                <TeamDetailsForm />
                <TeamMembersForm values={values} setFieldValue={setFieldValue} />
                <SubmitButton />
              </Form>
            )}
          </Formik>
        </div>
        <div className="hidden lg:block"> {/* Display for laptop/desktop devices */}
          <Formik
            initialValues={{
              teamName: "",
              teamLeader: "",
              theme: "",
              password: "",
              confirmPassword: "",
              teamMembers: [{ name: "", email: "", linkedin: "", github: "" }],
            }}
            validationSchema={Yup.object({
              // Validation schema remains the same
            })}
            onSubmit={(values, { setSubmitting }) => {
              handleSubmit(values);
              setSubmitting(false);
            }}
          >
            {({ values, setFieldValue }) => (
              <Form className="grid grid-cols-2 gap-4">
                <TeamDetailsForm />
                <TeamMembersForm values={values} setFieldValue={setFieldValue} />
                <div className="col-span-2">
                  <SubmitButton />
                </div>
              </Form>
            )}
          </Formik>
        </div>
        {registrationError && (
          <div className="text-red-500 mt-4 text-center">{registrationError}</div>
        )}
      </div>
    </div>
  );
};

export default TeamRegistrationPage;
