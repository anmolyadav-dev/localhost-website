"use client";
import React from "react";
import { FaStar } from "react-icons/fa";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const timelinedata = [
  {
    title: "First contact with Companies established",
    description:
      "Finishing off contact with organizations and communities involved.",
    date: "2022-09-01",
  },
  {
    title: "Organisation Project registration starts",
    description:
      "Organisations will be able to register their project under WoC.",
    date: "2022-09-01",
  },
  {
    title: "Info Session and Pre-registration starts",
    description:
      "An info session will be held to introduce the students to the program and the pre-registration starts.",
    date: "2022-09-01",
  },
  {
    title: "Pre-registration ends",
    description:
      "Pre-registration for the students ends and the students will be able to register for the projects.",
    date: "2022-09-01",
  },
  {
    title: "Proposal submissions Start",
    description:
      "Students will be able to submit their proposals for the projects.",
    date: "2022-09-01",
  },
  {
    title: "Proposal submissions end and Screening starts",
    description:
      "Proposal submissions will be closed and the screening process will start.",
    date: "2022-09-01",
  },
  {
    title: "Students Announced",
    description:
      "Selected students will be mailed about the projects they are shortlisted in.",
    date: "2022-09-01",
  },
  {
    title: "Student Contribution Starts",
    description:
      "Selected students will be starting to contribute to the assigned projects.",
    date: "2022-09-01",
  },
  {
    title: "GitHub Offline Event",
    description:
      "A basic to advanced GitHub session will be held for the students.",
    date: "2022-09-01",
  },
  {
    title: "Project evaluation",
    description:
      "Review of the students contribution will be shared by the organisations.",
    date: "2022-09-01",
  },
  {
    title: "Project submission",
    description: "Students will be able to submit their projects.",
    date: "2022-09-01",
  },
];

const Timeline = () => {
  return (
    <VerticalTimeline>
      {timelinedata.map((item, index) => (
        <VerticalTimelineElement
          key={index}
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(255, 255, 255)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(255, 255, 255)" }}
          date={item.date}
          dateClassName="font-white"
          iconStyle={{ background: "#2196f3", color: "#fff" }}
          icon={<FaStar />}
          visible={true}
        >
          <div className="h-1 bg-[#2196f3] rounded-full mb-4"></div>
          <h3 className="vertical-timeline-element-title text-3xl font-semibold text-black">
            {item.title}
          </h3>
          <p className="font-serif text-black opacity-70">{item.description}</p>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );
};

export default Timeline;
