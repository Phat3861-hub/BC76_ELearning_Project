import React, { useEffect, useState } from "react";
import { Avatar, message, Tabs } from "antd";
import PersonalInfo from "./components/PersonalInfo";
import PersonalCourseInfo from "./components/PersonalCourseInfo";
import "./UserInfo.scss";
import { useNavigate } from "react-router-dom";
import { pathDefault } from "../../common/path";

const items = [
  {
    key: "1",
    label: (
      <div className="text-lg font-semibold  duration-100">
        Thông tin cá nhân
      </div>
    ),
    children: <PersonalInfo />,
  },
  {
    key: "2",
    label: (
      <div className="text-lg font-semibold  duration-100">
        Khóa học của tôi
      </div>
    ),
    children: <PersonalCourseInfo />,
  },
];

const UserInfo = () => {
  const navigate = useNavigate();
  const [dataUser, setDataUser] = useState(null);

  useEffect(() => {
    const dataString = localStorage.getItem("userInfo");
    if (!dataString) {
      // Nếu chưa đăng nhập thì chuyển hướng về trang login
      navigate(pathDefault.signIn);
      message.info("Vui lòng đăng nhập");
    } else {
      // Nếu đăng nhập, parse dữ liệu người dùng
      setDataUser(JSON.parse(dataString));
    }
  }, [navigate]);

  if (!dataUser) {
    return null;
  }

  return (
    <div className="py-10">
      <div className="container">
        <div className="space-y-5">
          <div className="mr-10 space-y-5">
            <div className="flex items-center space-x-5">
              <Avatar size={100} className="bg-black">
                <h1 className="text-4xl uppercase">
                  {dataUser.hoTen.charAt(0)}
                </h1>
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
          <Tabs className="w-full" defaultActiveKey="1" items={items} />
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
