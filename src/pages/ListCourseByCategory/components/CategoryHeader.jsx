import React from "react";
import { NavLink } from "react-router-dom";
import { pathDefault } from "../../../common/path";

const CategoryHeader = ({ category, tenDanhMuc }) => {
  return (
    <div className="bg-yellow-300">
      <div className="container py-3">
        <div className="flex items-center ">
          <NavLink to={pathDefault.homePage}>
            <i className="fa-solid fa-house "></i>
          </NavLink>
          <span className="mx-3">/</span>
          <NavLink
            to={`/list-course-by-category/category?maDanhMuc=${category}`}
            className="hover:underline uppercase font-semibold text-sm inline-block"
          >
            {tenDanhMuc}
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default CategoryHeader;
