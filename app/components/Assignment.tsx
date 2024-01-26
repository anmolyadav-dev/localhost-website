"use client";
import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { IoIosClose } from "react-icons/io";

const Assignment = () => {
  const [assignment, setAssignment] = useState({
    assignmentName: "",
    assignmentDescription: "",
    dueDate: "",
    tags: [],
    currentTag: "",
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setAssignment((prevAssignment) => ({
      ...prevAssignment,
      [name]: value,
    }));
  };

  const handleTagChange = (e: any) => {
    setAssignment((prevAssignment) => ({
      ...prevAssignment,
      currentTag: e.target.value,
    }));
  };

  const addTag = () => {
    if (assignment.currentTag.trim() !== "") {
      setAssignment((prevAssignment: any) => ({
        ...prevAssignment,
        tags: [...prevAssignment.tags, prevAssignment.currentTag],
        currentTag: "",
      }));
    }
  };

  const removeTag = (index: any) => {
    const newTags = [...assignment.tags];
    newTags.splice(index, 1);
    setAssignment((prevAssignment) => ({ ...prevAssignment, tags: newTags }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Form Data:", assignment);
    // Add your submission logic here
  };

  return (
    <div className="bg-white bg-opacity-20 p-4 rounded-t-lg h-full ">
      <form className="" onSubmit={handleSubmit}>
        <div className="flex justify-between">
          <h2 className="text-xl font-semibold mb-4">Add Assignment</h2>
          <button
            type="submit"
            title="Add Assignment"
            className="bg-blue-500 text-white px-4 py-2 rounded-full"
          >
            <FaPlus />
          </button>
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="">
            <div className="mb-2">
              <label htmlFor="assignmentName">Assignment Name</label>
              <input
                type="text"
                id="assignmentName"
                name="assignmentName"
                value={assignment.assignmentName}
                onChange={handleInputChange}
                className="border w-full px-4 py-2 text-black"
                placeholder="Enter Assignment Name"
              />
            </div>

            <div className="mb-2">
              <label htmlFor="assignmentDescription">
                Assignment Description
              </label>
              <input
                type="text"
                id="assignmentDescription"
                name="assignmentDescription"
                value={assignment.assignmentDescription}
                onChange={handleInputChange}
                className="border w-full px-4 py-2 text-black"
                placeholder="Enter Assignment Description"
              />
            </div>
          </div>
          <div className="">
            <div className="mb-2">
              <label htmlFor="dueDate">Due Date</label>
              <input
                type="date"
                id="dueDate"
                name="dueDate"
                value={assignment.dueDate}
                onChange={handleInputChange}
                className="border w-full px-4 py-2 text-black"
                placeholder="Enter Due Date"
              />
            </div>

            <div className="mb-2">
              <label>Tags</label>
              <div className="flex gap-2 items-center">
                {assignment.tags.map((tag, index) => (
                  <div
                    key={index}
                    className="bg-blue-500 text-white px-2 py-1 rounded flex items-center gap-2"
                  >
                    {tag}
                    <button
                      type="button"
                      title="remove tag"
                      onClick={() => removeTag(index)}
                      className=""
                    >
                      <IoIosClose size={20} />
                    </button>
                  </div>
                ))}
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value={assignment.currentTag}
                    onChange={handleTagChange}
                    className="border w-full px-4 py-2 text-black"
                    placeholder="Enter Tag"
                  />
                  <button
                    type="button"
                    onClick={addTag}
                    className="bg-green-500 text-white px-2 py-2 rounded"
                    title="Add Tag"
                  >
                    <FaPlus />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Assignment;
