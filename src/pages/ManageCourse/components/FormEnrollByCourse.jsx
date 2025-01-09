import React, { useEffect, useState } from "react";
import { nguoiDungService } from "../../../services/nguoiDung.service";
import { Button, message, Table } from "antd";
import { KhoaHocService } from "../../../services/khoaHoc.service";

const FormEnrollByCourse = ({ maKhoaHoc }) => {
  const [listHocVienChuaGhiDanh, setListHocVienChuaGhiDanh] = useState([]);
  const [listHocVienChoXetDuyet, setListHocVienChoXetDuyet] = useState([]);
  const [listHocVienDaXetDuyet, setListHocVienDaXetDuyet] = useState([]);
  useEffect(() => {
    if (maKhoaHoc) {
      nguoiDungService
        .layDanhSachHocVienKhoaHoc({ maKhoaHoc })
        .then((res) => {
          setListHocVienDaXetDuyet(res.data || []);
          console.log(res.data);
        })
        .catch((err) => {
          console.error(err);
        });

      nguoiDungService
        .layDanhSachHocVienChoXetDuyet({ maKhoaHoc })
        .then((res) => {
          setListHocVienChoXetDuyet(res.data || []);
          console.log(res.data);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [maKhoaHoc]);

  const columns = (isApproved) => [
    {
      title: "Tài khoản",
      dataIndex: "taiKhoan",
      key: "1",
    },
    {
      title: "Họ tên",
      dataIndex: "hoTen",
      key: "2",
    },
    {
      title: "Hành động",
      key: "3",
      width: 100,
      render: (text, record, index) => {
        return (
          <div className="space-x-3 flex text-center">
            {!isApproved && (
              <Button
                className="border-yellow-500 text-yellow-500 hover:!text-white hover:!bg-yellow-500 hover:!border-yellow-500"
                onClick={() => {
                  if (maKhoaHoc) {
                    KhoaHocService.ghiDanhKhoaHoc({
                      maKhoaHoc: maKhoaHoc,
                      taiKhoan: record.taiKhoan,
                    })
                      .then((res) => {
                        message.success("Ghi danh thành công");

                        // Cập nhật danh sách sau khi ghi danh thành công
                        setListHocVienChoXetDuyet((prev) =>
                          prev.filter(
                            (item) => item.taiKhoan !== record.taiKhoan
                          )
                        );

                        setListHocVienDaXetDuyet((prev) => [...prev, record]);
                      })
                      .catch((err) => {
                        console.error(err);
                        message.error("Ghi danh thất bại");
                      });
                  } else {
                    message.warning("Không có tài khoản người dùng được chọn");
                  }
                }}
              >
                Xác thực
              </Button>
            )}
            <Button
              className="border-red-500 text-red-500 hover:!text-white hover:!bg-red-500 hover:!border-red-500"
              onClick={() => {
                if (maKhoaHoc) {
                  nguoiDungService
                    .huyDangKyKhoaHoc({
                      maKhoaHoc: maKhoaHoc,
                      taiKhoan: record.taiKhoan,
                    })
                    .then((res) => {
                      message.success("Hủy thành công");

                      setListHocVienDaXetDuyet((prev) =>
                        prev.filter((item) => item.taiKhoan !== record.taiKhoan)
                      );

                      setListHocVienChoXetDuyet((prev) =>
                        prev.filter((item) => item.taiKhoan !== record.taiKhoan)
                      );
                    })
                    .catch((err) => {
                      console.error(err);
                      message.error("Hủy thất bại");
                    });
                } else {
                  message.warning("Không có tài khoản người dùng được chọn");
                }
              }}
            >
              Hủy
            </Button>
          </div>
        );
      },
    },
  ];
  return (
    <div className="space-y-5">
      <h1 className="text-lg font-semibold">
        Danh sách học viên chờ xét duyệt
      </h1>
      <Table
        dataSource={listHocVienChoXetDuyet}
        columns={columns(false)} // Bảng chưa xét duyệt
        scroll={{ x: "max-content", y: "300px" }}
      />
      <h1 className="text-lg font-semibold">Danh sách học viên đã xét duyệt</h1>

      <Table
        dataSource={listHocVienDaXetDuyet}
        columns={columns(true)} // Bảng đã xét duyệt
        scroll={{ x: "max-content", y: "300px" }}
      />
    </div>
  );
};

export default FormEnrollByCourse;
