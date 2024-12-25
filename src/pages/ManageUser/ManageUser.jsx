import React, { useEffect, useState } from "react";
import { nguoiDungService } from "../../services/nguoiDung.service";
import {
  Avatar,
  Button,
  Input,
  message,
  Modal,
  Popconfirm,
  Table,
  Tag,
} from "antd";
import FormAddUser from "./components/FormAddUser";
import { useDebounce } from "use-debounce";
import InputSearch from "../../components/Input/InputSearch";
import { useFormik } from "formik";
import FormUpdateUser from "./components/FormUpdateUser";
import FormEnrollUser from "./components/FormEnrollUser";

const ManageUser = () => {
  const [listNguoiDung, setListNguoiDung] = useState([]);
  const [listSearch, setListSearch] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [isEnrollModalOpen, setIsEnrollModalOpen] = useState(false);
  const [taiKhoan, setTaiKhoan] = useState("");
  const [key, setKey] = useState("");
  const [value] = useDebounce(key, 1000);

  const layDanhSachNguoiDung = () => {
    nguoiDungService
      .layDanhSachNguoiDung()
      .then((res) => {
        console.log(res);
        setListNguoiDung(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    layDanhSachNguoiDung();
  }, []);
  // Hàm xử lý thay đổi giá trị tìm kiếm (key)
  const handleChangeKey = (event) => {
    setKey(event.target.value);
  };

  useEffect(() => {
    if (value) {
      nguoiDungService
        .timKiemNguoiDung(value)
        .then((res) => {
          console.log(res.data);
          setListSearch(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      setListSearch([]);
    }
  }, [value]);
  const columns = [
    {
      title: "Tài khoản",
      dataIndex: "taiKhoan",
      key: "1",
    },
    {
      title: "Ảnh đại diện",
      dataIndex: "avatar",
      key: "7",
      render: (text, record, index) => {
        return text ? (
          <img src={text} className="  w-10 h-10" alt="" />
        ) : (
          <Avatar className="uppercase bg-black" shape="circle" size={40}>
            {record.hoTen[0]}
          </Avatar>
        );
      },
    },
    {
      title: "Họ tên",
      dataIndex: "hoTen",
      key: "2",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "3",
    },
    {
      title: "Số điện thoại",
      dataIndex: "soDt",
      key: "4",
    },
    {
      title: "Loại người dùng",
      dataIndex: "maLoaiNguoiDung",
      key: "5",
      render: (text, record, index) => {
        return text == "GV" ? (
          <Tag color="magenta">Giáo vụ</Tag>
        ) : (
          <Tag color="blue">Học viên</Tag>
        );
      },
    },
    {
      title: "Hành động",
      key: "6",
      width: 100,
      render: (text, record, index) => {
        return (
          <div className="space-x-3 flex text-center ">
            <Button
              className="border-blue-500 text-blue-500 hover:!text-white hover:!bg-blue-500 hover:!border-blue-500"
              onClick={() => {
                setIsEnrollModalOpen(true);
                setTaiKhoan(record);
              }}
            >
              Ghi danh
            </Button>
            <Popconfirm
              title="Xóa người dùng"
              description="bạn có chắc muốn xóa người dùng ko"
              onConfirm={() => {
                nguoiDungService
                  .xoaNguoiDung(record.taiKhoan)
                  .then((res) => {
                    console.log("Xóa người dùng thành công: ", res);
                    layDanhSachNguoiDung();
                    message.success("Xóa người dùng thành công");
                  })
                  .catch((err) => {
                    console.error(
                      "Lỗi xóa người dùng: ",
                      err.response?.data || err.message
                    );
                    const errorMessage =
                      err.response?.data || "Xóa người dùng không thành công";
                    message.error(errorMessage);
                  });
              }}
              onCancel={() => {}}
              okText="Yes"
              cancelText="No"
            >
              <Button
                danger
                className="hover:!bg-red-500 hover:!text-white  hover:!border-red-500"
              >
                Xóa
              </Button>
            </Popconfirm>
            <br />
            <Button
              className="border-yellow-500 text-yellow-500 hover:!text-white hover:!bg-yellow-500 hover:!border-yellow-500"
              onClick={() => {
                setIsUpdateModalOpen(true);
                setTaiKhoan(record);
                console.log(record);
              }}
            >
              Sửa
            </Button>
          </div>
        );
      },
    },
  ];

  return (
    <div className="space-y-5">
      <Button
        onClick={() => {
          setIsModalOpen(true);
        }}
        size="large"
        variant="solid"
        className="bg-green-500 text-white hover:!text-green-500 hover:!border-green-500 "
      >
        Thêm người dùng
      </Button>
      <Input.Search
        onChange={handleChangeKey} // Sử dụng onChange thay cho handleChange
        onSearch={(value) => setKey(value)}
        value={key}
        placeholder="Tìm kiếm người dùng......"
      />
      <Table
        dataSource={value ? listSearch : listNguoiDung}
        columns={columns}
        scroll={{ x: "max-content" }}
      />
      <Modal
        footer={null}
        title="Thêm người dùng"
        open={isModalOpen}
        onCancel={() => {
          setIsModalOpen(false);
        }}
      >
        <FormAddUser
          handleCloseModal={() => {
            setIsModalOpen(false);
          }}
          layDanhSachNguoiDung={layDanhSachNguoiDung}
        />
      </Modal>
      <Modal
        footer={null}
        title="Cập nhật người dùng"
        open={isUpdateModalOpen}
        onCancel={() => {
          setIsUpdateModalOpen(false);
        }}
      >
        <FormUpdateUser
          layDanhSachNguoiDung={layDanhSachNguoiDung}
          taiKhoanchon={taiKhoan}
          handleCloseModal={() => {
            setIsUpdateModalOpen(false);
          }}
        />
      </Modal>
      <Modal
        width={700}
        footer={null}
        title="Ghi danh người dùng"
        open={isEnrollModalOpen}
        onCancel={() => {
          setIsEnrollModalOpen(false);
        }}
      >
        <FormEnrollUser
          taiKhoanchon={taiKhoan}
          handleCloseModal={() => {
            setIsEnrollModalOpen(false);
          }}
        />
      </Modal>
      ;
    </div>
  );
};

export default ManageUser;
