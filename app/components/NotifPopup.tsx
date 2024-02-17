"use client";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const NotificationPopup = () => {
  // Function to show notification
  const notify = () => {
    toast.info("Hackin IIIT Pune is happening soon!", {
      autoClose: 5000, // Close the notification after 5 seconds
    });
  };

  // Automatically show notification when component mounts
  React.useEffect(() => {
    notify();
  }, []);

  return <ToastContainer />;
};

export default NotificationPopup;
