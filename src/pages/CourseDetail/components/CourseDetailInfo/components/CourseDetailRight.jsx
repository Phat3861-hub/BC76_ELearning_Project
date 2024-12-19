import {
  AimOutlined,
  CalendarOutlined,
  FieldTimeOutlined,
} from "@ant-design/icons";
import { Card, message } from "antd";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./CourseDetailRight.scss";
import { nguoiDungService } from "../../../../../services/nguoiDung.service";

const CourseDetailRight = ({ tenKhoaHoc }) => {
  const navigate = useNavigate();
  const dataLocal = localStorage.getItem("userInfo");
  const dataUser = JSON.parse(dataLocal);
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const maKhoaHoc = query.get("maKhoaHoc");
  console.log(tenKhoaHoc, maKhoaHoc);
  const handleEnrollment = async () => {
    if (!dataUser) {
      message.warning("Bạn cần đăng nhập để ghi danh.");
      navigate("/login"); // Chuyển hướng đến trang đăng nhập nếu chưa đăng nhập
      return;
    }

    const enrollmentData = {
      maKhoaHoc: maKhoaHoc,
      taiKhoan: dataUser.taiKhoan,
    };

    try {
      const response = await nguoiDungService.dangKyKhoaHoc(enrollmentData);
      if (response.status === 200) {
        console.log(response);
        message.success("Ghi danh thành công!");
      } else {
        message.error("Đã xảy ra lỗi khi ghi danh, vui lòng thử lại.");
      }
    } catch (error) {
      message.error(error.response?.data || "Đã xảy ra lỗi khi ghi danh.");
    }
  };

  return (
    <div className="lg:mt-0  mt-10">
      <Card
        title={<h1 className="text-3xl font-bold">LỊCH KHAI GIẢNG</h1>}
        bordered={true}
        className="w-full lg:w-80 border border-black CourseDetailRight_card"
      >
        <div className="space-y-5">
          <p className="font-bold text-lg">
            <CalendarOutlined className="mr-2" />
            {tenKhoaHoc}
          </p>
          <p className="text-lg">
            <FieldTimeOutlined className="mr-2" />
            Ngày KG: 20/02/2025 | Tối Thứ 3 - thứ 5
          </p>
          <p className="ml-5 text-lg">Tối: 18h30 - 21h30</p>
          <p className="text-lg">
            <AimOutlined className="mr-2" />
            Quận 3 - Tầng 5, toà nhà Suri, 112 Cao Thắng, Quận 3, TPHCM
          </p>
        </div>
        <div className="mt-5 text-center">
          <button
            type="button"
            className="py-2 px-10 text-center border border-black"
            onClick={handleEnrollment}
          >
            GHI DANH NGAY
          </button>
        </div>
      </Card>
    </div>
  );
};

export default CourseDetailRight;
