import { http } from "./config";

export const KhoaHocService = {
  getDanhSachKhoaHoc: () => {
    return http.get(`QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01`);
  },
  getDanhSachKhoaHocTheoTen: (tenKhoaHoc) => {
    return http.get(
      `QuanLyKhoaHoc/LayDanhSachKhoaHoc?tenKhoaHoc=${tenKhoaHoc}&MaNhom=GP01`
    );
  },
  getDanhMucKhoaHoc: () => {
    return http.get(`QuanLyKhoaHoc/LayDanhMucKhoaHoc`);
  },
};
