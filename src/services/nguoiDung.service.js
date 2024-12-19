import { http } from "./config";
const dataLocal = localStorage.getItem("userInfo");
const dataUser = JSON.parse(dataLocal);
export const nguoiDungService = {
  signIn: (data) => {
    return http.post("/QuanLyNguoiDung/DangNhap", data);
  },
  updateInfo: (updatedData) => {
    const formattedData = {
      taiKhoan: updatedData?.taiKhoan || "",
      matKhau: updatedData?.matKhau || "",
      hoTen: updatedData?.hoTen || "",
      soDT: updatedData?.soDT || "",
      maLoaiNguoiDung: updatedData?.maLoaiNguoiDung || "",
      maNhom: updatedData?.maNhom || "GP01", // Giá trị mặc định nếu không có
      email: updatedData?.email || "",
    };

    return http.put(
      "/QuanLyNguoiDung/CapNhatThongTinNguoiDung",
      formattedData,
      {
        headers: {
          Authorization: `Bearer ${dataUser.accessToken}`,
        },
      }
    );
  },
  dangKyKhoaHoc: (data) => {
    return http.post("/QuanLyKhoaHoc/DangKyKhoaHoc", data, {
      headers: {
        Authorization: `Bearer ${dataUser.accessToken}`,
      },
    });
  },
  huyDangKyKhoaHoc: (data) => {
    return http.post("/QuanLyKhoaHoc/HuyGhiDanh", data, {
      headers: {
        Authorization: `Bearer ${dataUser.accessToken}`,
      },
    });
  },
  thongTinTaiKhoan: (data) => {
    return http.post("/QuanLyNguoiDung/ThongTinTaiKhoan", data, {
      headers: {
        Authorization: `Bearer ${dataUser.accessToken}`,
      },
    });
  },
};
