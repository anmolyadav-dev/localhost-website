"use client";
import React, { useEffect } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { useSession } from "next-auth/react";

// Define the validation schema
const signupSchema = Yup.object().shape({
  username: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm Password is required"),
});

// SignupPage component
const SignupPage = () => {
  const router = useRouter();

  const { status } = useSession();

  useEffect(() => {
    if (status === "authenticated") {
      router.replace("/");
    }
  }, [status, router]);

  // Handle signup form submission
  const handleSignup = async (values: any) => {
    try {
      const response = await axios.post("api/users/signup", values);
      console.log(response.data);

      router.replace("/login");
      toast.success("Signup Successful!");
    } catch (error) {
      console.error("Signup error:", error);
    }
  };

  if (status === "loading") {
    return (
      <div className="bg-bg-star bg-cover min-h-screen bg-left lg:bg-center">
        <p className="text-3xl lg:text-4xl text-white pt-32 px-10">
          Loading...
        </p>
        ;
      </div>
    );
  }

  return (
    <div className="bg-bg-star bg-cover min-h-screen bg-left lg:bg-center">
      <div className="flex items-center justify-center h-screen pt-20 px-3">
        <Formik
          initialValues={{
            username: "",
            email: "",
            password: "",
            confirmPassword: "",
          }}
          validationSchema={signupSchema}
          onSubmit={handleSignup}
        >
          <Form className="bg-white bg-opacity-10 p-8 rounded shadow-md w-96">
            <h2 className="text-5xl font-bold text-center text-white mb-4">
              Sign Up
            </h2>

            {/* Username Field */}
            <div className="mb-4">
              <label htmlFor="username" className="block text-white">
                Username
              </label>
              <Field
                type="text"
                id="username"
                name="username"
                placeholder="Enter your username"
                className="w-full p-2 border rounded"
              />
              <ErrorMessage
                name="username"
                component="p"
                className="text-red-500 text-sm"
              />
            </div>

            {/* Email Field */}
            <div className="mb-4">
              <label htmlFor="email" className="block text-white">
                Email
              </label>
              <Field
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                className="w-full p-2 border rounded"
              />
              <ErrorMessage
                name="email"
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

            {/* Confirm Password Field */}
            <div className="mb-4">
              <label htmlFor="confirmPassword" className="block text-white">
                Confirm Password
              </label>
              <Field
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirm your password"
                className="w-full p-2 border rounded"
              />
              <ErrorMessage
                name="confirmPassword"
                component="p"
                className="text-red-500 text-sm"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
            >
              Signup
            </button>

            <p className="mt-4 text-white">
              Already have an account?{" "}
              <Link href="/login" className="text-blue-500 hover:underline">
                Login here
              </Link>
            </p>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default SignupPage;
