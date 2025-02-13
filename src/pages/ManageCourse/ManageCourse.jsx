import React, { useEffect, useState } from "react";
import { KhoaHocService } from "../../services/khoaHoc.service";
import { Button, Input, message, Modal, Popconfirm, Table } from "antd";
import FormEnrollByCourse from "./components/FormEnrollByCourse";
import FormAddCourse from "./components/FormAddCourse";
import { useDebounce } from "use-debounce";
import FormUpdateCourse from "./components/FormUpdateCourse";
const defaultImage = "/img/logo-title.png";
const ManageCourse = () => {
  const [listKhoaHoc, setListKhoaHoc] = useState([]);
  const [isEnrollModalByCourse, setIsEnrollModalByCourseOpen] = useState(false);
  const [maKhoaHoc, setMaKhoaHoc] = useState("");
  const [isModalCourseOpen, setIsModalCourseOpen] = useState(false);
  const [isUpdateModalCourseOpen, setIsUpdateModalCourseOpen] = useState(false);
  const [listSearch, setListSearch] = useState([]);
  const [key, setKey] = useState("");
  const [value] = useDebounce(key, 1000);
  const [khoaHoc, setKhoaHoc] = useState("");
  // Hàm xử lý thay đổi giá trị tìm kiếm (key)
  const handleChangeKey = (event) => {
    setKey(event.target.value);
  };
  const handleImageError = (e) => {
    e.target.src = defaultImage;
  };
  const layDanhSachKhoaHoc = () => {
    KhoaHocService.getDanhSachKhoaHoc()
      .then((res) => {
        console.log(res);
        // Chuyển đổi ngày từ định dạng "DD/MM/YYYY" thành "YYYY-MM-DD"
        const sortedData = res.data.sort((a, b) => {
          const dateA = a.ngayTao.split("/").reverse().join("-"); // "DD/MM/YYYY" -> "YYYY-MM-DD"
          const dateB = b.ngayTao.split("/").reverse().join("-");
          return new Date(dateB) - new Date(dateA); // So sánh 2 ngày
        });
        setListKhoaHoc(sortedData);  // Cập nhật lại listKhoaHoc với dữ liệu đã sắp xếp
      })
      .catch((err) => {
        console.log(err);
      });
  };
  

  useEffect(() => {
    layDanhSachKhoaHoc();
  }, []);
  useEffect(() => {
    if (value) {
      KhoaHocService.getDanhSachKhoaHocTheoTen(value)
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
                    console.log("Xóa khóa học thành công: ", res);
                    layDanhSachKhoaHoc();
                    message.success("Xóa khóa học thành công");
                  })
                  .catch((err) => {
                    console.error(
                      "Lỗi xóa khóa học: ",
                      err.response?.data || err.message
                    );
                    const errorMessage =
                      err.response?.data || "Xóa khóa học không thành công";
                    message.error(errorMessage);
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
                setIsUpdateModalCourseOpen(true);
                setKhoaHoc(record);
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
          setIsModalCourseOpen(true);
        }}
        size="large"
        variant="solid"
        className="bg-green-500 text-white hover:!text-green-500 hover:!border-green-500 "
      >
        Thêm khóa học
      </Button>
      <Input.Search
        onChange={handleChangeKey} // Sử dụng onChange thay cho handleChange
        onSearch={(value) => setKey(value)}
        value={key}
        placeholder="Tìm kiếm khóa học......"
      />
      <Table
        dataSource={value ? listSearch : listKhoaHoc}
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
      <Modal
        width={700}
        footer={null}
        title="Ghi danh người dùng"
        open={isModalCourseOpen}
        onCancel={() => {
          setIsModalCourseOpen(false);
        }}
      >
        <FormAddCourse
          layDanhSachKhoaHoc={layDanhSachKhoaHoc}
          handleCloseModal={() => {
            setIsModalCourseOpen(false);
          }}
        />
      </Modal>
      <Modal
        width={700}
        footer={null}
        title="Ghi danh người dùng"
        open={isUpdateModalCourseOpen}
        onCancel={() => {
          setIsUpdateModalCourseOpen(false);
        }}
      >
        <FormUpdateCourse
          khoaHoc={khoaHoc}
          layDanhSachKhoaHoc={layDanhSachKhoaHoc}
          handleCloseModal={() => {
            setIsUpdateModalCourseOpen(false);
          }}
        />
      </Modal>
    </div>
  );
};

export default ManageCourse;
