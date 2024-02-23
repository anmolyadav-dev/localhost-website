"use client";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const TeamDetailsForm = () => {
  return (
    <div className="w-full">
      <div className="mb-4">
        <label htmlFor="teamName" className="text-white block">
          Team Name
        </label>
        <Field name="teamName" type="text" className="w-full rounded-md p-2" />
        <ErrorMessage
          name="teamName"
          component="div"
          className="text-red-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="teamLeader" className="text-white block">
          Team Leader Name
        </label>
        <Field
          name="teamLeader"
          type="text"
          className="w-full rounded-md p-2"
        />
        <ErrorMessage
          name="teamLeader"
          component="div"
          className="text-red-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="theme" className="text-white block">
          Theme
        </label>
        <Field as="select" name="theme" className="w-full rounded-md p-2">
          <option value="" disabled>
            Select theme
          </option>
          <option value="AI/ML">AI / ML</option>
          <option value="Web3">Web3</option>
          <option value="AR/VR">AR / VR</option>
          <option value="HealthCare">Health Care</option>
          <option value="EdTech">EdTech</option>
          <option value="OpenInnovation">Open Innovation</option>
        </Field>
        <ErrorMessage name="theme" component="div" className="text-red-500" />
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="text-white block">
          Password
        </label>
        <Field
          name="password"
          type="password"
          className="w-full rounded-md p-2"
        />
        <ErrorMessage
          name="password"
          component="div"
          className="text-red-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="confirmPassword" className="text-white block">
          Confirm Password
        </label>
        <Field
          name="confirmPassword"
          type="password"
          className="w-full rounded-md p-2"
        />
        <ErrorMessage
          name="confirmPassword"
          component="div"
          className="text-red-500"
        />
      </div>
    </div>
  );
};

export default TeamDetailsForm;