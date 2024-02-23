import React from "react";
import { Field, ErrorMessage } from "formik";

const TeamMembersForm = ({
  values,
  setFieldValue,
}: {
  values: any;
  setFieldValue: any;
}) => {
  const handleAddMember = () => {
    // Check if the current team size is less than 4 before adding a new member
    if (values.teamMembers.length < 4) {
      const newMember = { name: "", email: "", linkedin: "", github: "" };
      setFieldValue("teamMembers", [...values.teamMembers, newMember]);
    }
  };
  const handleDeleteMember = (indexToDelete: number) => {
    if (values.teamMembers.length < 2) {
      return;
    }
    const updatedMembers = values.teamMembers.filter(
      (_: any, index: number) => index !== indexToDelete
    );
    setFieldValue("teamMembers", updatedMembers);
  };

  return (
    <div className="mb-4 space-y-4 w-full">
      <p className="text-white">Team Members:</p>
      {values.teamMembers.map((member: any, index: number) => (
        <div key={index} className="flex items-end space-x-4">
          <div>
            <label
              htmlFor={`teamMembers[${index}].name`}
              className="text-white block"
            >
              Name
            </label>
            <Field
              name={`teamMembers[${index}].name`}
              type="text"
              className="w-full rounded-md p-2"
            />
            <ErrorMessage
              name={`teamMembers[${index}].name`}
              component="div"
              className="text-red-500"
            />
          </div>
          <div>
            <label
              htmlFor={`teamMembers[${index}].email`}
              className="text-white block"
            >
              Email
            </label>
            <Field
              name={`teamMembers[${index}].email`}
              type="email"
              className="w-full rounded-md p-2"
            />
            <ErrorMessage
              name={`teamMembers[${index}].email`}
              component="div"
              className="text-red-500"
            />
          </div>
          <div>
            <label
              htmlFor={`teamMembers[${index}].linkedin`}
              className="text-white block"
            >
              LinkedIn
            </label>
            <Field
              name={`teamMembers[${index}].linkedin`}
              type="url"
              className="w-full rounded-md p-2"
            />
            <ErrorMessage
              name={`teamMembers[${index}].linkedin`}
              component="div"
              className="text-red-500"
            />
          </div>
          <div>
            <label
              htmlFor={`teamMembers[${index}].github`}
              className="text-white block"
            >
              GitHub
            </label>
            <Field
              name={`teamMembers[${index}].github`}
              type="url"
              className="w-full rounded-md p-2"
            />
            <ErrorMessage
              name={`teamMembers[${index}].github`}
              component="div"
              className="text-red-500"
            />
          </div>
          <button
            type="button"
            onClick={() => handleDeleteMember(index)}
            className="text-white bg-red-500 font-bold py-2 px-4 rounded"
          >
            Delete
          </button>
        </div>
      ))}
      {values.teamMembers.length < 4 && (
        <button
          type="button"
          onClick={handleAddMember}
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
        >
          Add Member
        </button>
      )}
    </div>
  );
};

export default TeamMembersForm;
