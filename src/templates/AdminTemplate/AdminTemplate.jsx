import React, { useEffect, useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
import { pathDefault } from "../../common/path";
import { NavLink, Outlet } from "react-router-dom";

const { Header, Sider, Content } = Layout;
const AdminTemplate = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  useEffect(() => {
    const dataString = localStorage.getItem("userInfo");
    if (!dataString) {
      // nếu chưa đăng nhập thì chuyển hướng về trang login
      window.location.href = pathDefault.signIn;
    } else {
      // kiểm tra có phải ADMIN hay ko
      const data = JSON.parse(dataString);
      if (data.maLoaiNguoiDung !== "GV") {
        window.location.href = pathDefault.homePage;
      }
    }
  }, []);
  return (
    <Layout className="min-h-screen">
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical h-20 flex items-center justify-center ">
          <NavLink to={pathDefault.homePage}>
            <img
              src={collapsed ? "/img/logo-title.png" : "/img/logo.png"}
              alt=""
            />
          </NavLink>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",

              label: (
                <NavLink
                  className={({ isActive, isPending }) => {
                    return `inline-block rounded-md ${
                      isActive ||
                      location.pathname == "/admin" ||
                      location.pathname == "/admin/"
                        ? "item-active"
                        : ""
                    }`;
                  }}
                  to={pathDefault.manageCourse}
                >
                  <UserOutlined />
                  <span>Quản lý khóa học</span>
                </NavLink>
              ),
            },
            {
              key: "2",
              label: (
                <NavLink
                  className={({ isActive, isPending }) => {
                    return `inline-block rounded-md ${
                      isActive ? "item-active" : ""
                    }`;
                  }}
                  to={pathDefault.manageUser}
                >
                  <VideoCameraOutlined />
                  <span>Quản lý người dùng</span>
                </NavLink>
              ),
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Outlet></Outlet>
        </Content>
      </Layout>
    </Layout>
  );
};

export default AdminTemplate;
