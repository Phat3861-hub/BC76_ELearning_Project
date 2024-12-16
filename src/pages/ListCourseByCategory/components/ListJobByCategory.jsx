import React, { useEffect, useState } from "react";
import { KhoaHocService } from "../../../services/khoaHoc.service";
import { NavLink } from "react-router-dom";
import { Pagination } from "antd";
import "./ListJobByCategory.scss";
const defaultImage = "/img/logo-title.png";
const ListJobByCategory = ({ maDanhMuc, tenDanhMuc, soTrang = 8 }) => {
  const [listDanhSachKhoaHocTheoDanhMuc, setListDanhSachKhoaHocTheoDanhMuc] =
    useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(soTrang); // Số item trên mỗi trang (có thể tùy chỉnh)

  useEffect(() => {
    KhoaHocService.getDanhSachKhoaHocTheoDanhMuc(maDanhMuc)
      .then((res) => {
        setListDanhSachKhoaHocTheoDanhMuc(res.data); // Giả sử API trả về dữ liệu trong `res.data`
      })
      .catch((err) => {
        console.log(err);
      });
  }, [maDanhMuc]);

  // Xác định danh sách khóa học được hiển thị dựa trên trang hiện tại và pageSize
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentList = listDanhSachKhoaHocTheoDanhMuc.slice(
    startIndex,
    endIndex
  );
  const handleImageError = (e) => {
    e.target.src = defaultImage; // Set default image if the original one fails to load
  };

  return (
    <div className="py-10">
      <div className="container">
        <h2 className="mb-5 text-lg uppercase font-bold">
          Các khóa học {tenDanhMuc} phổ biến :{" "}
        </h2>
        <div className="khoaHocDanhMuc grid sm:grid-cols-2 xl:grid-cols-4 gap-5">
          {currentList.map((khoaHoc) => (
            <div
              key={khoaHoc.maKhoaHoc}
              className="itemKhoaHocDanhMuc border p-4 rounded-lg space-y-3 flex flex-col justify-between h-full"
            >
              <div className="mb-2 border-black imageWrapper">
                <NavLink
                  to={`/course-detail/id?maKhoaHoc=${khoaHoc.maKhoaHoc}`}
                >
                  <img
                    src={khoaHoc.hinhAnh}
                    alt={khoaHoc.tenKhoaHoc}
                    className="w-full h-40 object-cover rounded"
                    onError={handleImageError} // Handle image error
                  />
                </NavLink>
              </div>
              <div className="space-y-3 flex-grow">
                <NavLink
                  to={`/course-detail/id?maKhoaHoc=${khoaHoc.maKhoaHoc}`}
                >
                  <h2 className="tenKhoaHoc text-lg font-semibold">
                    {khoaHoc.tenKhoaHoc}
                  </h2>
                  <p className="text-gray-700">Ngày tạo: {khoaHoc.ngayTao}</p>
                  <p className="text-gray-700">Lượt xem: {khoaHoc.luotXem}</p>
                  <p className="text-gray-700">
                    Người tạo: {khoaHoc.nguoiTao.hoTen} -{" "}
                    {khoaHoc.nguoiTao.tenLoaiNguoiDung}
                  </p>
                </NavLink>
              </div>
              <div className="mt-4">
                <NavLink
                  to={`/course-detail/id?maKhoaHoc=${khoaHoc.maKhoaHoc}`}
                  className="py-2 px-3 border border-black rounded-lg hover:bg-black hover:text-white duration-500 block text-center"
                >
                  Ghi Danh
                </NavLink>
              </div>
            </div>
          ))}
        </div>
        {/* Pagination */}
        <div className="mt-5 flex justify-center">
          <Pagination
            current={currentPage}
            pageSize={pageSize}
            total={listDanhSachKhoaHocTheoDanhMuc.length}
            onChange={(page, pageSize) => {
              setCurrentPage(page);
              setPageSize(pageSize);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ListJobByCategory;
