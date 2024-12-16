import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Pagination } from "antd";

// Đặt đường dẫn của hình ảnh mặc định của bạn ở đây
const defaultImage = "/img/logo-title.png";

const ListSearch = ({ ListSearch }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 8;

  // Handle page change
  const onPageChange = (page) => {
    setCurrentPage(page);
  };

  const currentCourses = ListSearch.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const handleImageError = (e) => {
    e.target.src = defaultImage;
  };

  return (
    <div className="py-10">
      <div className="container space-y-10">
        {currentCourses.map((item) => (
          <NavLink
            to={`/course-detail/id?maKhoaHoc=${item.maKhoaHoc}`}
            key={item.maKhoaHoc}
            className="border border-black flex items-center gap-10 p-5 bg-slate-100 rounded-xl hover:scale-105 duration-500 md:flex-row flex-col"
          >
            <img
              src={item.hinhAnh}
              alt={item.tenKhoaHoc}
              className="course-image w-60 h-40 object-fit"
              onError={handleImageError} // Handle image error
            />
            <div className="space-y-3 md:ml-5 mt-3 md:mt-0">
              <h3 className="text-lg font-bold">
                Tên khóa học : {item.tenKhoaHoc}
              </h3>
              <p className="hidden md:block line-clamp-3">{item.moTa}</p>
              <p>Số lượng học viên: {item.soLuongHocVien}</p>
              <p>Ngày tạo: {item.ngayTao}</p>
            </div>
          </NavLink>
        ))}
      </div>

      {/* Pagination */}
      <Pagination
        current={currentPage}
        pageSize={pageSize}
        total={ListSearch.length}
        onChange={onPageChange}
        showSizeChanger={false} // Disable size changer
        className="flex justify-center mt-10"
      />
    </div>
  );
};

export default ListSearch;
