"use client";
import React, { useEffect } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { signIn, useSession } from "next-auth/react";
import { FaGithub } from "react-icons/fa";
import { useRecoilState } from "recoil";
import { userState } from "../atoms/store";

// Define Yup schema for form validation
const loginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const LoginPage = () => {
  const router = useRouter();
  const [user, setUser] = useRecoilState(userState);

  const { status } = useSession();

  useEffect(() => {
    if (status === "authenticated") {
      router.replace("/");
    }
  }, [status, router]);

  // Handle form submission
  const handleLogin = async (values: any) => {
    try {
      await signIn("credentials", { ...values, redirect: false });
      setUser(values.email);
      toast.success("Login successful");
      router.replace("/");
    } catch (error: any) {
      console.log("Login failed", error.message);
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
      <div className="flex flex-col px-3">
        <div className="flex items-center justify-center min-h-screen">
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={loginSchema}
            onSubmit={handleLogin}
          >
            <Form className="bg-white bg-opacity-10 p-8 rounded shadow-md w-96 mt-24">
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
                  className="w-full p-2 border rounded "
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
      </div>
    </div>
  );
};

export default LoginPage;
