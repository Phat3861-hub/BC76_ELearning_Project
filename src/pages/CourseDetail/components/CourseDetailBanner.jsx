import React from "react";
import "./CourseDetailBanner.scss";
import { NavLink } from "react-router-dom";
import { RightOutlined, StarFilled } from "@ant-design/icons";

// Hàm tạo đoạn văn Lorem Ipsum ngẫu nhiên
const generateLorem = (length = 100) => {
  const lorem =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ".repeat(10);
  return lorem.substring(0, length);
};

const CourseDetailBanner = ({
  tenKhoaHoc,
  tenDanhMucKhoaHoc,
  maDanhMuc,
  maKhoaHoc,
  moTa,
  tenNguoiTao,
  luotXem,
}) => {
  // Kiểm tra độ dài mô tả và thêm Lorem Ipsum nếu quá ngắn
  const description = moTa.length < 100 ? moTa + generateLorem(150) : moTa;

  return (
    <div className="bg-[url('/public/img/courseDetailBanner.jpg')] bg-no-repeat bg-center bg-cover h-96 relative">
      <div className="CourseDetailBanner_overplay"></div>
      <div className=" container relative z-10">
        <div className="py-10 text-white text-center">
          <div className=" mb-5">
            <NavLink to="/">
              Home <RightOutlined />
            </NavLink>
            <NavLink
              to={`/list-course-by-category/category?maDanhMuc=${maDanhMuc}`}
            >
              {tenDanhMucKhoaHoc} <RightOutlined />
            </NavLink>
            <NavLink to={`/course-detail/id?maKhoaHoc=${maKhoaHoc}`}>
              {tenKhoaHoc} <RightOutlined />
            </NavLink>
          </div>
          <h1 className="mb-5 text-xl lg:text-5xl uppercase font-bold">
            {tenKhoaHoc}
          </h1>
          <p className="mb-5 line-clamp-2 ">{description}</p>
          <div className="flex items-center justify-center text-center">
            <img
              className="h-20 w-h-20 rounded-full"
              src="/img/avatar.png"
              alt=""
            />
            <div className="px-2 sm:px-10 border-r-2">
              <p className="text-sm text-slate-200 ">Người tạo</p>
              <p className="uppercase font-semibold">{tenNguoiTao}</p>
            </div>
            <div className="px-2 sm:px-10 border-r-2">
              <p className="text-sm text-slate-200 ">Lượt xem</p>
              <p className="uppercase font-semibold">{luotXem}</p>
            </div>
            <div className="px-2 sm:px-10">
              <p className="text-sm text-slate-200 ">Đánh giá</p>
              <p className="uppercase font-semibold">
                <StarFilled className="text-yellow-300" />
                <StarFilled className="text-yellow-300" />
                <StarFilled className="text-yellow-300" />
                <StarFilled className="text-yellow-300" />
                <StarFilled className="text-yellow-300" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailBanner;
