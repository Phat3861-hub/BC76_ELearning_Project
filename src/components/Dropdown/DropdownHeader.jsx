import { Dropdown } from "antd";
import React, { useState } from "react";
import { DownOutlined } from "@ant-design/icons";

const DropdownHeader = ({ buttonContent, items }) => {
  const [open, setOpen] = useState(false);

  // Cấu trúc items mới cho Dropdown, thêm onClick để đóng dropdown khi bấm vào item
  const handleMenuClick = () => {
    setOpen(false); // Đóng dropdown khi item được chọn
  };

  const modifiedItems = items.map((item) => ({
    ...item,
    onClick: () => {
      item.onClick && item.onClick(); // Gọi onClick của item gốc (nếu có)
      handleMenuClick(); // Đóng dropdown sau khi click
    },
  }));

  return (
    <Dropdown
      menu={{
        items: modifiedItems,
      }}
      trigger={["click"]}
      open={open}
    >
      <button
        onClick={() => {
          setOpen(!open);
        }}
        className="font-bold uppercase py-2 px-2 2xl:px-4"
      >
        {buttonContent}
        <span className="ml-2">
          <DownOutlined
            className={`${open ? "rotate-180" : "rotate-0"} duration-300`}
          />
        </span>
      </button>
    </Dropdown>
  );
};

export default DropdownHeader;
