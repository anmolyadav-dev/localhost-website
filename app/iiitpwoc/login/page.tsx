"use client";
import React, { useEffect } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import { signIn } from "next-auth/react";
import { FaGithub } from "react-icons/fa";
import Snowfall from "react-snowfall";

// Define Yup schema for form validation
const loginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const LoginPage = () => {
  const router = useRouter();

  const handleLogin = async (values: any) => {};

  return (
    <div className="bg-black bg-cover min-h-screen bg-left lg:bg-center flex flex-col justify-center items-center text-white gap-10">
      <Snowfall />
      <Snowfall color="#4DFFDB" snowflakeCount={50} />
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={loginSchema}
        onSubmit={handleLogin}
      >
        <Form className="bg-white bg-opacity-10 p-8 rounded shadow-md w-96 mt-24 text-black">
          <h2 className="text-4xl font-bold text-center text-white mb-4 font-serif">
            Login
          </h2>

          {/* Email Field */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-white font-mono">
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
              className="text-red-500 text-xs font-mono my-1"
            />
          </div>

          {/* Password Field */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-white font-mono">
              Password
            </label>
            <Field
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              className="w-full p-2 border rounded "
            />
            <ErrorMessage
              name="password"
              component="p"
              className="text-red-500 text-xs font-mono my-1"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            Login
          </button>
          <div className="flex justify-between py-2">
            <Link
              href="/forgot-password"
              className="text-blue-500 hover:underline"
            >
              Forgot Password?
            </Link>

            <Link
              href="/iiitpwoc/register"
              className="text-blue-500 hover:underline"
            >
              SignUp here
            </Link>
          </div>

          <div className=" flex justify-center items-center my-4">
            <p className="h-[1px] w-full bg-white"></p>
            <p className="text-white text-center mx-2 ">OR</p>
            <p className="h-[1px] w-full bg-white"></p>
          </div>
          <div className="flex flex-col gap-4">
            <button
              onClick={() => signIn("google")}
              className="w-full bg-white text-black p-2 rounded hover:bg-slate-200 flex justify-center items-center gap-2"
            >
              <FcGoogle size={24} />
              Login with Google
            </button>
            <button
              onClick={() => signIn("github")}
              className="w-full bg-black text-white p-2 rounded flex justify-center items-center gap-2"
            >
              <FaGithub size={24} />
              Login with Github
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginPage;
