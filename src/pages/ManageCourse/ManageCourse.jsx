import React, { useEffect, useState } from "react";
import { KhoaHocService } from "../../services/khoaHoc.service";
import { Button, message, Modal, Popconfirm, Table } from "antd";
import FormEnrollByCourse from "./components/FormEnrollByCourse";
import FormAddCourse from "./components/FormAddCourse";
import FormUpdateCourse from "./components/FormUpdateCourse";
// import FormUpdateCourse from "./components/FormUpdateCourse";
const defaultImage = "/img/logo-title.png";
const ManageCourse = () => {
  const [listKhoaHoc, setListKhoaHoc] = useState([]);
  const [isEnrollModalByCourse, setIsEnrollModalByCourseOpen] = useState(false);
  const [maKhoaHoc, setMaKhoaHoc] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalUpdateOpen, setIsModalUpdateOpen] = useState(false);
  const [layDataKhoaHoc, setDataKhoaHoc] = useState("");

  const handleImageError = (e) => {
    e.target.src = defaultImage;
  };
  const layDanhSachKhoaHoc = () => {
    KhoaHocService.getDanhSachKhoaHoc()
      .then((res) => {
        console.log(res);
        setListKhoaHoc(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    layDanhSachKhoaHoc();
  }, []);

  const columns = [
    {
      title: "Mã khóa học",
      dataIndex: "maKhoaHoc",
      key: "1",
    },
    {
      title: "Hình ảnh",
      dataIndex: "hinhAnh",
      key: "7",
      render: (text, record, index) => {
        return (
          <img
            src={record.hinhAnh}
            className="  w-10 h-10"
            alt=""
            onError={handleImageError}
          />
        );
      },
    },
    {
      title: "Tên khóa học",
      dataIndex: "tenKhoaHoc",
      key: "2",
    },
    {
      title: "Người tạo",
      dataIndex: "nguoiTao",
      key: "3",
      render: (text, record) => {
        return record.nguoiTao?.hoTen || "null";
      },
    },
    {
      title: "Hành động",
      key: "6",
      render: (text, record, index) => {
        return (
          <div className="space-x-3 flex text-center ">
            <Button
              className="border-blue-500 text-blue-500 hover:!text-white hover:!bg-blue-500 hover:!border-blue-500"
              onClick={() => {
                setIsEnrollModalByCourseOpen(true);
                setMaKhoaHoc(record.maKhoaHoc);
                console.log(record.maKhoaHoc);
              }}
            >
              Ghi danh
            </Button>
            <Popconfirm
              title="Xóa khóa học"
              description="bạn có chắc muốn xóa khóa học ko"
              onCancel={() => {}}
              okText="Yes"
              cancelText="No"
              onConfirm={() => {
                KhoaHocService.xoaKhoaHoc(record.maKhoaHoc)
                  .then((res) => {
                    console.log(res);
                    layDanhSachKhoaHoc();
                    message.success("Xóa thành công");
                  })
                  .catch((err) => {
                    console.log(err);
                    message.error(err.response.data);
                  });
              }}
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
                console.log(record);
                setIsModalUpdateOpen(true);
                setDataKhoaHoc(record);
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
    <div>
      <Button
        onClick={() => {
          setIsModalOpen(true);
          setDisableUpdate(true);
        }}
        size="large"
        variant="solid"
        className="bg-green-500 text-white hover:!text-green-500 hover:!border-green-500 mb-6 "
      >
        Thêm Khóa học
      </Button>
      <Modal
        footer={null}
        title="Thêm khóa học"
        open={isModalOpen}
        onCancel={() => {
          setIsModalOpen(false);
        }}
      >
        <FormAddCourse
          layDanhSachKhoaHoc={layDanhSachKhoaHoc}
          handleCloseModal={() => {
            setIsModalOpen(false);
          }}
        />
      </Modal>
      <Modal
        footer={null}
        title="Sửa khóa học"
        open={isModalUpdateOpen}
        onCancel={() => {
          setIsModalUpdateOpen(false);
        }}
      >
        <FormUpdateCourse
          layDanhSachKhoaHoc={layDanhSachKhoaHoc}
          handleCloseModal={() => {
            setIsModalUpdateOpen(false);
          }}
          layDataKhoaHoc={layDataKhoaHoc}
        />
      </Modal>

      <Table
        dataSource={listKhoaHoc}
        columns={columns}
        scroll={{ x: "max-content" }}
      />

      <Modal
        width={700}
        footer={null}
        title="Ghi danh người dùng"
        open={isEnrollModalByCourse}
        onCancel={() => {
          setIsEnrollModalByCourseOpen(false);
        }}
      >
        <FormEnrollByCourse
          maKhoaHoc={maKhoaHoc}
          handleCloseModal={() => {
            setIsEnrollModalByCourseOpen(false);
          }}
        />
      </Modal>
    </div>
  );
};

export default ManageCourse;
