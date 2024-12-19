import React from "react";
import CourseDetailLeft from "./components/CourseDetailLeft";
import CourseDetailRight from "./components/CourseDetailRight";

const CourseDetailInfo = ({ hinhAnh, moTa, tenKhoaHoc, maKhoaHoc }) => {
  return (
    <div className="py-10">
      <div className="container">
        <div className="lg:flex ">
          <CourseDetailLeft hinhAnh={hinhAnh} moTa={moTa} />
          <CourseDetailRight tenKhoaHoc={tenKhoaHoc} />
        </div>
      </div>
    </div>
  );
};

export default CourseDetailInfo;
