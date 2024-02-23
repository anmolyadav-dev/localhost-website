"use client";
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
      className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
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
      <div className="bg-black bg-opacity-50 p-8 rounded-lg">
        <h2 className="text-3xl font-bold mb-4 mt-32 text-white l">
          Team Registration
        </h2>
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
            teamName: Yup.string()
              .max(50, "Must be 50 characters or less")
              .required("Required"),
            teamLeader: Yup.string()
              .max(50, "Must be 50 characters or less")
              .required("Required"),
            theme: Yup.string().required("Theme is required"),
            password: Yup.string().required("Password is required"),
            confirmPassword: Yup.string()
              .oneOf(
                [Yup.ref("password"), null] as unknown as (
                  | string
                  | undefined
                )[],
                "Passwords must match"
              )
              .required("Confirm your password"),
            teamMembers: Yup.array()
              .of(
                Yup.object().shape({
                  name: Yup.string().required("Name is required"),
                  email: Yup.string()
                    .email("Invalid email address")
                    .required("Email is required"),
                  linkedin: Yup.string()
                    .url("Invalid LinkedIn URL")
                    .required("LinkedIn profile is required"),
                  github: Yup.string()
                    .url("Invalid GitHub URL")
                    .required("GitHub profile is required"),
                })
              )
              .min(1, "At least one team member is required")
              .max(4, "Maximum of four team members allowed"),
          })}
          onSubmit={(values, { setSubmitting }) => {
            handleSubmit(values);
            setSubmitting(false);
          }}
        >
          {({ values, setFieldValue }) => (
            <Form className="grid grid-cols-2 gap-4 w-full">
              <TeamDetailsForm />
              <TeamMembersForm values={values} setFieldValue={setFieldValue} />
              <SubmitButton />
            </Form>
          )}
        </Formik>
        {registrationError && (
          <div className="text-red-500">{registrationError}</div>
        )}
      </div>
    </div>
  );
};

export default TeamRegistrationPage;
