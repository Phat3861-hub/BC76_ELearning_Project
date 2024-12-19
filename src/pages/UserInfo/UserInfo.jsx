import React from "react";

import { Avatar, Input, Tabs } from "antd";
import PersonalInfo from "./components/PersonalInfo";

import PersonalCourseInfo from "./components/PersonalCourseInfo";
import "./UserInfo.scss";
const onChange = (key) => {
  console.log(key);
};
const items = [
  {
    key: "1",
    label: (
      <div className="text-lg font-semibold hover:text-yellow-300 duration-100">
        Thông tin cá nhân
      </div>
    ),
    children: <PersonalInfo />,
  },
  {
    key: "2",
    label: (
      <div className="text-lg font-semibold hover:text-yellow-300 duration-100">
        Khóa học của tôi
      </div>
    ),
    children: <PersonalCourseInfo />,
  },
];

const UserInfo = () => {
  const dataUser = JSON.parse(localStorage.getItem("userInfo"));
  return (
    <div className="py-10">
      <div className="container ">
        <div className="space-y-5">
          <div className=" mr-10 space-y-5">
            <div className="flex items-center space-x-5">
              <Avatar size={100} className="bg-black">
                <h1 className="text-4xl">{dataUser.hoTen.charAt(0)}</h1>
              </Avatar>
              <div className="space-y-1">
                <p className="font-semibold text-lg">
                  Họ tên : {dataUser.hoTen}
                </p>
                <p>Email: {dataUser.email}</p>
                <p>Số điện thoại : {dataUser.soDT}</p>
              </div>
            </div>
          </div>
          <Tabs
            className="w-full "
            defaultActiveKey="1"
            items={items}
            onChange={onChange}
          />
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
