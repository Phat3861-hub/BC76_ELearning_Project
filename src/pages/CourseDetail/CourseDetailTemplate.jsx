import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { KhoaHocService } from "../../services/khoaHoc.service";
import CourseDetailBanner from "./components/CourseDetailBanner";
import CourseDetailInfo from "./components/CourseDetailInfo/CourseDetailInfo";
import NewPostCarousel from "../ListCourseByCategory/components/NewPostCarousel";
import ListJobByCategory from "../ListCourseByCategory/components/ListJobByCategory";

const CourseDetailTemplate = () => {
  const [courseDetail, setCourseDetail] = useState(null);
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const maKhoaHoc = query.get("maKhoaHoc");

  const layChiTietKhoaHoc = () => {
    KhoaHocService.getChiTietKhoaHoc(maKhoaHoc)
      .then((res) => {
        console.log(res);
        setCourseDetail(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    layChiTietKhoaHoc();
  }, [maKhoaHoc]);

  return (
    <>
      {courseDetail && (
        <CourseDetailBanner
          maKhoaHoc={courseDetail.maKhoaHoc}
          tenKhoaHoc={courseDetail.tenKhoaHoc}
          tenDanhMucKhoaHoc={courseDetail?.danhMucKhoaHoc.tenDanhMucKhoaHoc}
          maDanhMuc={courseDetail?.danhMucKhoaHoc.maDanhMucKhoahoc}
          moTa={courseDetail.moTa}
          luotXem={courseDetail.luotXem}
          tenNguoiTao={courseDetail?.nguoiTao.hoTen}
        />
      )}
      {courseDetail && (
        <CourseDetailInfo
          hinhAnh={courseDetail.hinhAnh}
          moTa={courseDetail.moTa}
          tenKhoaHoc={courseDetail.tenKhoaHoc}
          maKhoaHoc={courseDetail.maKhoaHoc}
        />
      )}
      {courseDetail && (
        <ListJobByCategory
          maDanhMuc={courseDetail?.danhMucKhoaHoc.maDanhMucKhoahoc}
          tenDanhMuc={courseDetail?.danhMucKhoaHoc.tenDanhMucKhoaHoc}
          soTrang={4}
        />
      )}
      <NewPostCarousel />
    </>
  );
};

export default CourseDetailTemplate;
