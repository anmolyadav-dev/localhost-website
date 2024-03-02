"use client";
import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import Link from "next/link";
import { useRouter } from "next/navigation"; // Corrected import
import axios from "axios";
import toast from "react-hot-toast";
import { useAppContext } from "@/context";

// Define Yup schema for form validation
const loginSchema = Yup.object().shape({
  teamName: Yup.string().required("Team name is required"),
  password: Yup.string().required("Password is required"),
});

const LoginPage = () => {
  const { teamName, setTeamName } = useAppContext();
  const router = useRouter();

  // Handle form submission
  const handleLogin = async (values: any) => {
    try {
      const response = await axios.post("/api/hackiniiitp/login", values);
      // console.log(response);
      setTeamName(values.teamName);
      toast.success("Login Successful!");
      console.log(teamName);
      localStorage.setItem("teamName", values.teamName);
      router.push("/hackiniiitp");
    } catch (error: any) {
      console.error("Login failed:", error.message);
      toast.error("Login failed. Please check your credentials.");
    }
  };

  return (
    <div className="bg-bg-star bg-cover min-h-screen bg-left lg:bg-center">
      <div className="flex flex-col px-3">
        <div className="flex items-center justify-center h-screen">
          <Formik
            initialValues={{ teamName: "", password: "" }}
            validationSchema={loginSchema}
            onSubmit={handleLogin}
          >
            <Form className="p-8 rounded shadow-md w-96">
              <h2 className="text-5xl font-bold text-center text-white mb-4">
                Login
              </h2>

              {/* Team Name Field */}
              <div className="mb-4">
                <label htmlFor="teamName" className="block text-white">
                  Team Name
                </label>
                <Field
                  type="text"
                  id="teamName"
                  name="teamName"
                  placeholder="Enter your team name"
                  className="w-full p-2 border rounded"
                />
                <ErrorMessage
                  name="teamName"
                  component="p"
                  className="text-red-500 text-sm"
                />
              </div>

              {/* Password Field */}
              <div className="mb-4">
                <label htmlFor="password" className="block text-white">
                  Password
                </label>
                <Field
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  className="w-full p-2 border rounded"
                />
                <ErrorMessage
                  name="password"
                  component="p"
                  className="text-red-500 text-sm"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
              >
                Login
              </button>
              <div className="flex py-2 justify-end">
                <Link
                  href="/hackiniiitp/register"
                  className="text-blue-500 hover:underline "
                >
                  Register Now
                </Link>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
