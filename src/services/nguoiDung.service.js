import { http } from "./config";
const dataLocal = localStorage.getItem("userInfo");
const dataUser = JSON.parse(dataLocal);
export const nguoiDungService = {
  signIn: (data) => {
    return http.post("/QuanLyNguoiDung/DangNhap", data);
  },
  signUp: (data) => {
    return http.post("/QuanLyNguoiDung/DangKy", data);
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
  layDanhSachNguoiDung: async () => {
    return await http.get("/QuanLyNguoiDung/LayDanhSachNguoiDung");
  },
  xoaNguoiDung: (taiKhoan) => {
    return http.delete(`/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`, {
      headers: {
        Authorization: `Bearer ${dataUser.accessToken}`,
      },
    });
  },
  themNguoiDung: (data) => {
    return http.post(`/QuanLyNguoiDung/ThemNguoiDung`, data, {
      headers: {
        Authorization: `Bearer ${dataUser.accessToken}`,
      },
    });
  },
  timKiemNguoiDung: (key) => {
    return http.get(`/QuanLyNguoiDung/TimKiemNguoiDung?tuKhoa=${key}`);
  },
  capNhatNguoiDung: (data) => {
    return http.put("/QuanLyNguoiDung/CapNhatThongTinNguoiDung", data, {
      headers: {
        Authorization: `Bearer ${dataUser.accessToken}`,
      },
    });
  },
  layDanhSachKhoaHocNguoiDungChuaGhiDanh: (taiKhoan) => {
    return http.post(
      `/QuanLyNguoiDung/LayDanhSachKhoaHocChuaGhiDanh?TaiKhoan=${taiKhoan}`,
      taiKhoan,
      {
        headers: {
          Authorization: `Bearer ${dataUser.accessToken}`,
        },
      }
    );
  },
  layDanhSachKhoaHocChoXetDuyet: (taiKhoan) => {
    return http.post(
      `/QuanLyNguoiDung/LayDanhSachKhoaHocChoXetDuyet`,
      taiKhoan,
      {
        headers: {
          Authorization: `Bearer ${dataUser.accessToken}`,
        },
      }
    );
  },
  layDanhSachKhoaHocDaXetDuyet: (taiKhoan) => {
    return http.post(
      `/QuanLyNguoiDung/LayDanhSachKhoaHocDaXetDuyet`,
      taiKhoan,
      {
        headers: {
          Authorization: `Bearer ${dataUser.accessToken}`,
        },
      }
    );
  },
  layDanhSachHocVienKhoaHoc: (data) => {
    return http.post(`/QuanLyNguoiDung/LayDanhSachHocVienKhoaHoc`, data, {
      headers: {
        Authorization: `Bearer ${dataUser.accessToken}`,
      },
    });
  },
  layDanhSachHocVienChoXetDuyet: (data) => {
    return http.post(`/QuanLyNguoiDung/LayDanhSachHocVienChoXetDuyet`, data, {
      headers: {
        Authorization: `Bearer ${dataUser.accessToken}`,
      },
    });
  },
};
