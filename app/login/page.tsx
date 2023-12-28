"use client";
import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";

// Define Yup schema for form validation
const loginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const LoginPage = () => {
  const router = useRouter();

  // Handle form submission
  const handleLogin = async (values: any) => {
      try {
        const response = await axios.post('api/users/login', values);
        // console.log(response);
        router.push('/profile');
        window.location.reload();
      } catch (error: any) {
        console.log('Login failed', error.message);
        
      }

    // console.log("Login Successful!", values);
    // setSubmitting(false);
  };

  return (
    <div className="bg-bg-star bg-cover min-h-screen bg-left lg:bg-center">
      <div className="flex flex-col px-3">
        <div className="flex items-center justify-center h-screen">
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={loginSchema}
            onSubmit={handleLogin}
          >
            <Form className="bg-white bg-opacity-10 p-8 rounded shadow-md w-96">
              <h2 className="text-5xl font-bold text-center text-white mb-4">
                Login
              </h2>

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

                <Link href="/signup" className="text-blue-500 hover:underline">
                  SignUp here
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
