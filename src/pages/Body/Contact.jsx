import React from "react";
import { ButtonBlueP } from "../../components/Button/buttonCustom";
import { Input } from "antd";
import { textarea } from "framer-motion/client";

const Contact = () => {
  return (
    <div className="relative bg-gray-800">
      <div className="text-center container lg:text-2xl sm:text-xl  text-white pt-14 pb-60">
        “ CyberSoft Academy là học viện tiên phong tại Việt Nam áp dụng phương
        pháp đào tạo Active Learning và Flipped Learning thông qua các dự án
        thực tiễn trong lĩnh vực đào tạo CNTT. Học viên sẽ đóng vai trò là một
        Scrum member trong mô hình Agile để trở thành một lập trình chuyên
        nghiệp, đáp ứng mọi nhu cầu tuyển dụng của Doanh nghiệp.”
        <p className="text-xl mt-5">– CYBERSOFT CEO</p>
      </div>
      <div className="absolute top-72  left-0 bg-white lg:p-20 sm:p-16  rounded-r-xl z-10 w-4/5 text-center">
        <div className="space-y-5 relative">
          <h2 className="lg:text-4xl sm:text-2xl font-semibold">
            Bắt đầu sự nghiệp lập trình <br /> từ ZERO tại CyberSoft
          </h2>
          <p className="lg:text-3xl sm:text-xl font-light">
            100% Thực Hành, Học Thật, Dự Án Thật, <br /> Việc Làm Thật
          </p>
          <div className="lg:space-x-10 md:space-x-6 space-x-2 absolute flex justify-center w-full lg:-bottom-28 sm:-bottom-20">
            <ButtonBlueP
              content={"Danh sách khóa học"}
              className="lg:text-xl sm:text-sm lg:px-7 lg:py-4 sm:px-4 sm:py-2"
            />
            <ButtonBlueP
              content={"Tư vấn ngay"}
              className="lg:text-xl sm:text-sm lg:px-7 lg:py-4 sm:px-4 sm:py-2"
            />
          </div>
        </div>
      </div>
      <div className="bg-gray-700 lg:pt-80 md:pt-60 sm:pt-40 pb-20">
        <div className="container">
          <div className="grid md:grid-cols-2 grid-cols-1 lg:gap-10 sm:gap-5">
            <img
              src="https://cybersoft.edu.vn/wp-content/uploads/2019/02/cybersoft.edu_.vn-hoc-lap-trinh.png"
              alt=""
            />
            <div className="bg-white p-7 rounded-lg space-y-8">
              <h2 className="text-center font-semibold lg:text-3xl sm:text-xl">
                LIÊN HỆ TƯ VẤN
              </h2>
              <div className="space-y-4">
                <Input placeholder="Họ và tên*" />
                <Input placeholder="Email liên hệ*" />
                <Input placeholder="Điện thoại liên hệ*" />
                <Input.TextArea placeholder="Vui lòng để lại lời nhắn*" />
                <button className="bg-yellow-500 text-white text-center w-full py-4 font-medium lg:text-xl sm:text-sm">
                  ĐĂNG KÝ TƯ VẤN
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
