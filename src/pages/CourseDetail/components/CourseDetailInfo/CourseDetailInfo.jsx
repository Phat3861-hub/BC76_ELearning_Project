import React from "react";
import CourseDetailLeft from "./components/CourseDetailLeft";
import CourseDetailRight from "./components/CourseDetailRight";

const CourseDetailInfo = ({ hinhAnh, moTa }) => {
  return (
    <div className="py-10">
      <div className="container">
        <div className="lg:flex ">
          <CourseDetailLeft hinhAnh={hinhAnh} moTa={moTa} />
          <CourseDetailRight />
        </div>
      </div>
    </div>
  );
};

export default CourseDetailInfo;
