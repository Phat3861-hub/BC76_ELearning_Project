import React from "react";
import HeadBanner from "../../../../pages/Body/HeadBanner";
import Count from "../../../../pages/Body/Count";
import NewPostCarousel from "../../../../pages/ListCourseByCategory/components/NewPostCarousel";

import Company from "../../../../pages/Body/Company";
import Course from "../../../../pages/Body/Course";
import CyberDetail from "../../../../pages/Body/CyberDetail";
import StartCareer from "../../../../pages/Body/StartCareer";
import StudentComment from "../../../../pages/Body/StudentComment";
import Contact from "../../../../pages/Body/Contact";

const BodyTemplate = () => {
  return (
    <div className="pt-24">
      <HeadBanner />
      <Company />
      <Count />
      <Course />
      <CyberDetail />
      <StartCareer />
      <StudentComment />
      <Contact />
      <NewPostCarousel />
    </div>
  );
};

export default BodyTemplate;
