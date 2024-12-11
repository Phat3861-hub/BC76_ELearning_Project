import React from "react";
import "./CategoryCompany.scss";
import { NavLink } from "react-router-dom";

const CategoryCompany = () => {
  return (
    <>
      <div className="py-7">
        <div className="container">
          <div className="company_content">
            <div className="company_text text-center space-y-3">
              <h1 className=" text-2xl sm:text-4xl font-bold">
                CÁC CÔNG TY CÁC CỰU HỌC VIÊN CYBERSOFT ĐANG LÀM VIỆC
              </h1>
              <p className="text-lg">
                100% học viên sau khi hoàn thành dự án đều có công việc như mong
                đợi tại các tập đoàn phần mềm, các công ty phần mềm đa quốc gia,
                các công ty khởi nghiệp....với thu nhập từ 90~140 triệu/1 năm.
              </p>
            </div>
            <div className="company_slideshow mt-3">
              <div className="moveX"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <div className="container">
          <div className="relative text-center text-white bg-slate-800 py-8 lg:py-20 rounded-xl space-y-8">
            <h2 className="text-xl lg:text-5xl uppercase font-bold">
              Bắt đầu sự nghiệp lập trình <br />{" "}
              <span className="">từ ZERO tại CyberSoft</span>
            </h2>
            <p className=" lg:text-3xl uppercase">
              100% Thực Hành, Học Thật, Dự Án Thật, Việc Làm Thật
            </p>

            <NavLink className="mt-5 inline-block">
              <button className="py-2 px-4 bg-white text-black rounded-lg">
                Đăng ký ngay
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryCompany;
