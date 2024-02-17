"use client";
import { useState } from "react";
import HackathonModal from "./components/HackathonAd";
import JoinOurCommunity from "./components/JoinOurCommunity";
import LandingPage from "./components/LandingPage";
import Team from "./components/Team";

const Page = () => {
  const [modalIsOpen, setModalIsOpen] = useState(true);

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      <LandingPage />
      <Team />
      <JoinOurCommunity />
      <HackathonModal isOpen={modalIsOpen} onClose={closeModal} />
    </div>
  );
};

export default Page;
