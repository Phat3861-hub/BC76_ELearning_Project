import React from "react";
import { Button } from "antd";
import { CaretRightOutlined } from "@ant-design/icons";
import "./HeadBanner.scss";
import { ButtonBlueP } from "../../components/Button/buttonCustom";

const HeadBanner = () => {
  return (
    <div className=" head-banner">
      <div className="flex  container">
        <div className="lg:w-2/3 sm:w-1/2 z-10">
          <div className="play-btn w-full h-full flex justify-center items-center">
            <CaretRightOutlined className="text-white text-8xl  p-6 rounded-full  cursor-pointer bp-play-button" />
          </div>
        </div>
        <div className="content lg:w-1/3 sm:w-1/2 z-10 flex flex-col  justify-center gap-10 ">
          <h2 className="lg:text-5xl sm:text-4xl pt-2 font-semibold bp-color space-y-3">
            <p>KHỞI ĐẦU </p> <p>SỰ NGHIỆP</p> <p>CỦA BẠN</p>
          </h2>
          <p className="text-white font-medium lg:text-3xl sm:text-2xl">
            Trở thành lập trình chuyên nghiệp tại CyberSoft
          </p>
          <div className="space-x-5">
            <ButtonBlueP content={"Xem Khóa Học"}></ButtonBlueP>
            <ButtonBlueP content={"Tư Vấn Học"}></ButtonBlueP>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeadBanner;
