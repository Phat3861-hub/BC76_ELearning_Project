import {
  CheckOutlined,
  FieldTimeOutlined,
  FileOutlined,
  FileSearchOutlined,
  FireOutlined,
  MoneyCollectOutlined,
  ReloadOutlined,
  TeamOutlined,
  UsergroupAddOutlined,
} from "@ant-design/icons";
import React from "react";
const defaultImage = "/img/logo-title.png";
const CourseDetailLeft = ({ hinhAnh, moTa }) => {
  const handleImageError = (e) => {
    e.target.src = defaultImage;
  };
  return (
    <div className="lg:w-4/5 lg:mr-10 space-y-10">
      <img
        onError={handleImageError}
        src={hinhAnh}
        alt=""
        className="rounded-2xl w-full h-60 lg:h-96 bg-contain bg-no-repeat bg-center"
      />
      <div className="space-y-5">
        <h2 className="text-2xl font-semibold uppercase">
          Giới thiệu khóa học
        </h2>
        <p className="text-gray-800 ">{moTa}</p>
      </div>
      <div className="md:flex ">
        <ul className="mb-4 md:mb-0 md:mr-10 space-y-3">
          <li className=" text-xl text-yellow-500 font-semibold">
            <TeamOutlined className="mr-3" />
            AI CÓ THỂ THAM GIA ?
          </li>
          <li>
            <CheckOutlined className="text-yellow-500 mr-3" />
            Mới học lập trình, thiếu định hướng & lộ trình học tập
          </li>
          <li>
            <CheckOutlined className="text-yellow-500 mr-3" />
            Trái ngành học lập trình, chuyển nghề
          </li>
          <li>
            <CheckOutlined className="text-yellow-500 mr-3" />
            Hoàn thành chương trình trung học phổ thông (12/12)
          </li>
          <li>
            <CheckOutlined className="text-yellow-500 mr-3" />
            Yếu tư duy lập trình, mất gốc muốn học để xin việc làm
          </li>
          <li>
            <CheckOutlined className="text-yellow-500 mr-3" />
            Chủ dự án muốn quản lý team dev, startup muốn hiểu rõ việc làm của
            dev
          </li>
          <li>
            <CheckOutlined className="text-yellow-500 mr-3" />
            Thêm nghề để kiếm thêm thu nhập ngoài giờ
          </li>
        </ul>
        <ul className="space-y-3">
          <li className="text-xl text-yellow-500 font-semibold">
            <FileSearchOutlined />
            HỌC XONG LÀM VIỆC TẠI ĐÂU ?
          </li>
          <li>
            <CheckOutlined className="text-yellow-500 mr-3" />
            Apply vào tất cả công ty tuyển dụng Back-End JAVA ở vị trí fresher
            hoặc juinor
          </li>
          <li>
            <CheckOutlined className="text-yellow-500 mr-3" />
            Các công ty outsourcing - gia công phần mềm
          </li>
          <li>
            <CheckOutlined className="text-yellow-500 mr-3" />
            Các công ty startup - khởi nghiệp
          </li>
          <li>
            <CheckOutlined className="text-yellow-500 mr-3" />
            Công ty, tập đoàn trong nước và nước ngoài...
          </li>
          <li>
            <CheckOutlined className="text-yellow-500 mr-3" />
            Có thể apply ngay vào Fresher, Junior với mức lương khởi điểm từ
            7tr5 đến 15tr
          </li>
          <li>
            <CheckOutlined className="text-yellow-500 mr-3" />
            Nhận các job freelancer về xây dựng backend cho website
          </li>
        </ul>
      </div>
      <div className="bg-emerald-100 p-5 rounded-xl">
        <ul className="grid grid-cols-2 lg:grid-cols-3 gap-10">
          <li className="text-red-500 font-semibold  ">
            <ReloadOutlined className=" mr-3" />
            162 GIỜ
          </li>
          <li className="text-red-500 font-semibold  ">
            <FieldTimeOutlined className=" mr-3" />
            27 TUẦN (6.5 THÁNG)
          </li>
          <li className="text-red-500 font-semibold  ">
            <FileOutlined className=" mr-3" />
            16 CHỦ ĐỀ & DỰ ÁN
          </li>
          <li className="text-red-500 font-semibold  ">
            <FireOutlined className=" mr-3" />
            CẤP CHỨNG NHẬN
          </li>
          <li className="text-red-500 font-semibold  ">
            <MoneyCollectOutlined className=" mr-3" />
            HƯỚNG DẪN LÀM CV & KẾT NỐI VIỆC LÀM
          </li>
          <li className="text-red-500 font-semibold  ">
            <UsergroupAddOutlined className=" mr-3" />
            HỖ TRỢ NHÓM ONLINE & VIDEO LUYỆN THÊM
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CourseDetailLeft;
