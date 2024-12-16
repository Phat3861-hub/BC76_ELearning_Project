import {
  AimOutlined,
  CalendarOutlined,
  FieldTimeOutlined,
} from "@ant-design/icons";
import { Card } from "antd";
import React from "react";
import { NavLink } from "react-router-dom";
import "./CourseDetailRight.scss";

const CourseDetailRight = () => {
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
            Bootcamp BE JAVA 09
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
          <NavLink>
            <button className="py-2 px-10 text-center border border-black">
              GHI DANH NGAY
            </button>
          </NavLink>
        </div>
      </Card>
    </div>
  );
};

export default CourseDetailRight;
