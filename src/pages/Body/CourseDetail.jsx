import { RightOutlined } from "@ant-design/icons";
import React from "react";

const CourseDetail = ({ name, month, day, Class = "" }) => {
  return (
    <div
      className={`item p-4 border-b border-gray-700  bg-white space-y-3 hover:cursor-pointer ${Class}`}
    >
      <h1 className="md:text-2xl sm:text-xl font-medium">{name}</h1>
      <div className="flex justify-between font-normal">
        <div className="space-x-6 md:text-base sm:text-sm text-gray-400">
          <span className="border-r border-gray-400 pe-6">{month}</span>
          <span>{day}</span>
        </div>
        <p className="bp-color md:text-base sm:text-sm">
          Xem thêm{" "}
          <i className="fa-solid bp-color ms-2 fa-chevron-right text-sm hover-right-icon" />
        </p>
      </div>
    </div>
  );
};

export default CourseDetail;
