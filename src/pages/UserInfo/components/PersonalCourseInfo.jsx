import React, { useEffect, useState } from "react";
import { nguoiDungService } from "../../../services/nguoiDung.service";
import { NavLink } from "react-router-dom";
import { message, Modal, Pagination } from "antd";
const defaultImage = "/img/logo-title.png";

const PersonalCourseInfo = () => {
  const [infoAccount, setInfoAccount] = useState(null);
  const dataLocal = localStorage.getItem("userInfo");
  const dataUser = JSON.parse(dataLocal);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 4;

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  // Handle page change
  const onPageChange = (page) => {
    setCurrentPage(page);
  };

  const currentCourses = infoAccount?.chiTietKhoaHocGhiDanh
    ? infoAccount.chiTietKhoaHocGhiDanh.slice(
        (currentPage - 1) * pageSize,
        currentPage * pageSize
      )
    : [];

  const handleImageError = (e) => {
    e.target.src = defaultImage;
  };
  const showCancelModal = (maKhoaHoc) => {
    setSelectedCourse(maKhoaHoc);
    setIsModalVisible(true);
  };

  const layThongTinTaiKhoan = () => {
    nguoiDungService
      .thongTinTaiKhoan(dataUser?.taiKhoan)
      .then((res) => {
        console.log(res);
        setInfoAccount(res.data);
        setIsModalVisible(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleCancelCourse = () => {
    const data = {
      maKhoaHoc: selectedCourse,
      taiKhoan: dataUser?.taiKhoan,
    };

    nguoiDungService
      .huyDangKyKhoaHoc(data)
      .then(() => {
        message.success("Hủy đăng ký khóa học thành công!");
        layThongTinTaiKhoan(); // Refresh course list
      })
      .catch((err) => {
        console.error(err);
        message.error("Hủy đăng ký khóa học thất bại. Vui lòng thử lại.");
      });
  };

  useEffect(() => {
    if (dataUser?.taiKhoan) {
      layThongTinTaiKhoan();
    }
  }, [dataUser?.taiKhoan]);

  return (
    <div className="py-10">
      <div className="container space-y-10">
        {currentCourses.length > 0 ? (
          currentCourses.map((item) => (
            <div
              key={item.maKhoaHoc}
              className="border border-black bg-slate-100 rounded-xl hover:scale-105 transition-transform duration-300 relative"
            >
              <NavLink
                to={`/course-detail/id?maKhoaHoc=${item.maKhoaHoc}`}
                className="flex items-center gap-2 sm:gap-10 p-5  md:flex-row flex-col hover:underline hover:text-black"
              >
                <img
                  src={item.hinhAnh}
                  alt={item.tenKhoaHoc}
                  className="course-image w-60 h-32 sm:h-40 object-fit"
                  onError={handleImageError} // Handle image error
                />
                <div className=" space-y-1 sm:space-y-3 md:ml-5 mt-3 md:mt-0">
                  <h3 className=" text-base sm:text-lg font-bold">
                    Tên khóa học : {item.tenKhoaHoc}
                  </h3>
                  <p className="hidden md:line-clamp-1">{item.moTa}</p>
                  <p>Số lượng học viên: 30</p>
                  <p>Ngày tạo: {item.ngayTao}</p>
                </div>
              </NavLink>
              <div className="text-center mb-5">
                <button
                  className="lg:absolute bottom-5 right-5 text-white font-semibold bg-red-500 py-2 px-4 rounded-xl hover:bg-red-700 duration-300"
                  onClick={() => showCancelModal(item.maKhoaHoc)}
                >
                  Hủy đăng ký
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">Không có khóa học nào.</p>
        )}
      </div>
      <Modal
        title="Xác nhận hủy đăng ký"
        visible={isModalVisible}
        onOk={handleCancelCourse}
        onCancel={() => setIsModalVisible(false)}
        okText="Xác nhận"
        cancelText="Hủy"
      >
        <p>Bạn có chắc chắn muốn hủy đăng ký khóa học này không?</p>
      </Modal>
      {/* Pagination */}
      {infoAccount?.chiTietKhoaHocGhiDanh?.length > 0 && (
        <Pagination
          current={currentPage}
          pageSize={pageSize}
          total={infoAccount.chiTietKhoaHocGhiDanh.length}
          onChange={onPageChange}
          showSizeChanger={false} // Disable size changer
          className="flex justify-center mt-10"
        />
      )}
    </div>
  );
};

export default PersonalCourseInfo;
