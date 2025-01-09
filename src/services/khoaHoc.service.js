import { http } from "./config";
const dataLocal = localStorage.getItem("userInfo");
const dataUser = JSON.parse(dataLocal);
// console.log(dataUser.accessToken);
export const KhoaHocService = {
  getDanhSachKhoaHoc: () => {
    return http.get(`/QuanLyKhoaHoc/LayDanhSachKhoaHoc`);
  },
  getDanhSachKhoaHocTheoTen: (tenKhoaHoc) => {
    return http.get(
      `/QuanLyKhoaHoc/LayDanhSachKhoaHoc?tenKhoaHoc=${tenKhoaHoc}`
    );
  },
  getDanhSachKhoaHocTheoDanhMuc: (maDanhMuc) => {
    return http.get(
      `/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?maDanhMuc=${maDanhMuc}`
    );
  },
  getChiTietKhoaHoc: (maKhoaHoc) => {
    return http.get(`/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${maKhoaHoc}`);
  },
  getDanhMucKhoaHoc: () => {
    return http.get(`QuanLyKhoaHoc/LayDanhMucKhoaHoc`);
  },
  ghiDanhKhoaHoc: (data) => {
    return http.post(`/QuanLyKhoaHoc/GhiDanhKhoaHoc`, data, {
      headers: {
        Authorization: `Bearer ${dataUser.accessToken}`,
      },
    });
  },
  themKhoaHoc: (data) => {
    return http.post(`/QuanLyKhoaHoc/ThemKhoaHoc`, data, {
      headers: {
        Authorization: `Bearer ${dataUser.accessToken}`,
      },
    });
  },
  uploadHinhAnh: (data) => {
    return http.post(`/QuanLyKhoaHoc/UploadHinhAnhKhoaHoc`, data, {
      headers: {
        Authorization: `Bearer ${dataUser.accessToken}`,
      },
    });
  },
  xoaKhoaHoc: (maKhoaHoc) => {
    return http.delete(`/QuanLyKhoaHoc/XoaKhoaHoc?MaKhoaHoc=${maKhoaHoc}`, {
      headers: {
        Authorization: `Bearer ${dataUser.accessToken}`,
      },
    });
  },
  capNhatKhoaHoc: (data) => {
    return http.put(`/QuanLyKhoaHoc/CapNhatKhoaHoc`, data, {
      headers: {
        Authorization: `Bearer ${dataUser.accessToken}`,
      },
    });
  },
};
