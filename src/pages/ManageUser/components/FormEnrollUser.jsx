import React, { useEffect, useState } from "react";
import { nguoiDungService } from "../../../services/nguoiDung.service";
import { Button, message, Table } from "antd";
import { KhoaHocService } from "../../../services/khoaHoc.service";

const FormEnrollUser = ({ taiKhoanchon }) => {
  const [listKhoaHocChuaGhiDanh, setListKhoaHocChuaGhiDanh] = useState([]);
  const [listKhoaHocChoXetDuyet, setListKhoaHocChoXetDuyet] = useState([]);
  const [listKhoaHocDaXetDuyet, setListKhoaHocDaXetDuyet] = useState([]);
  useEffect(() => {
    if (taiKhoanchon?.taiKhoan) {
      nguoiDungService
        .layDanhSachKhoaHocNguoiDungChuaGhiDanh(taiKhoanchon.taiKhoan)
        .then((res) => {
          setListKhoaHocChuaGhiDanh(res);
        })
        .catch((err) => {
          console.error(err);
        });

      nguoiDungService
        .layDanhSachKhoaHocChoXetDuyet({ taiKhoan: taiKhoanchon.taiKhoan })
        .then((res) => {
          console.log(res.data);
          setListKhoaHocChoXetDuyet(res.data);
        })
        .catch((err) => {
          console.error(err.response?.data || err.message);
          hơn;
        });
      nguoiDungService
        .layDanhSachKhoaHocDaXetDuyet({ taiKhoan: taiKhoanchon.taiKhoan })
        .then((res) => {
          console.log(res.data);
          setListKhoaHocDaXetDuyet(res.data);
        })
        .catch((err) => {
          console.error(err.response?.data || err.message);
          hơn;
        });
    }
  }, [taiKhoanchon]);

  const columns = (isApproved) => [
    {
      title: "Mã khóa học",
      dataIndex: "maKhoaHoc",
      key: "1",
    },
    {
      title: "Tên khóa học",
      dataIndex: "tenKhoaHoc",
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
                  if (taiKhoanchon?.taiKhoan) {
                    KhoaHocService.ghiDanhKhoaHoc({
                      maKhoaHoc: record.maKhoaHoc,
                      taiKhoan: taiKhoanchon.taiKhoan,
                    })
                      .then((res) => {
                        message.success("Ghi danh thành công");

                        // Cập nhật danh sách sau khi ghi danh thành công
                        setListKhoaHocChoXetDuyet((prev) =>
                          prev.filter(
                            (item) => item.maKhoaHoc !== record.maKhoaHoc
                          )
                        );

                        setListKhoaHocDaXetDuyet((prev) => [...prev, record]);
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
                if (taiKhoanchon?.taiKhoan) {
                  nguoiDungService
                    .huyDangKyKhoaHoc({
                      maKhoaHoc: record.maKhoaHoc,
                      taiKhoan: taiKhoanchon.taiKhoan,
                    })
                    .then((res) => {
                      message.success("Hủy thành công");

                      // Xóa khóa học khỏi danh sách đã xét duyệt và thêm vào danh sách chờ xét duyệt
                      setListKhoaHocDaXetDuyet((prev) =>
                        prev.filter(
                          (item) => item.maKhoaHoc !== record.maKhoaHoc
                        )
                      );

                      setListKhoaHocChoXetDuyet((prev) =>
                        prev.filter(
                          (item) => item.maKhoaHoc !== record.maKhoaHoc
                        )
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
        Danh sách khóa học chờ xét duyệt
      </h1>
      <Table
        dataSource={listKhoaHocChoXetDuyet}
        columns={columns(false)} // Bảng chưa xét duyệt
        scroll={{ x: "max-content", y: "300px" }}
      />
      <h1 className="text-lg font-semibold">Danh sách khóa học đã xét duyệt</h1>

      <Table
        dataSource={listKhoaHocDaXetDuyet}
        columns={columns(true)} // Bảng đã xét duyệt
        scroll={{ x: "max-content", y: "300px" }}
      />
    </div>
  );
};

export default FormEnrollUser;
