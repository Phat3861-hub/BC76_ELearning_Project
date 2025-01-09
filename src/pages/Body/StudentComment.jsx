import React from "react";
import { ButtonBlueP } from "../../components/Button/buttonCustom";

const StudentComment = () => {
  return (
    <div className=" my-20 space-y-14">
      <h1 className="text-center lg:text-4xl sm:text-3xl font-medium">
        HỌC VIÊN ĐÃ NÓI GÌ VỀ CYBERSOFT ACADEMY
      </h1>
      <div className="grid-cols-2 grid gap-10 container">
        <img
          src="https://cybersoft.edu.vn/wp-content/uploads/2023/02/macvideoBox3.png"
          alt=""
          width={500}
        />
        <img
          src="https://cybersoft.edu.vn/wp-content/uploads/2023/02/macvideoBox2.png"
          width={500}
          alt=""
        />
      </div>
      <div className="bg-gray-100 py-10">
        <div className="grid grid-cols-3  gap-5 container mb-10">
          <img
            src="https://cybersoft.edu.vn/wp-content/uploads/2022/08/nguyendangkhanhvan.jpg"
            alt=""
            className="rounded-lg"
          />{" "}
          <img
            src="https://cybersoft.edu.vn/wp-content/uploads/2022/08/phananhngoc.jpg"
            alt=""
            className="rounded-lg"
          />{" "}
          <img
            src="https://cybersoft.edu.vn/wp-content/uploads/2022/08/phamhuyhoang.jpg"
            alt=""
            className="rounded-lg"
          />{" "}
          <img
            src="https://cybersoft.edu.vn/wp-content/uploads/2022/08/nguyenquocngu.jpg"
            alt=""
            className="rounded-lg"
          />{" "}
          <img
            src="https://cybersoft.edu.vn/wp-content/uploads/2022/08/nguyentanloi.jpg"
            alt=""
            className="rounded-lg"
          />{" "}
          <img
            src="https://cybersoft.edu.vn/wp-content/uploads/2022/08/buivinhkhai.jpg"
            alt=""
            className="rounded-lg"
          />
        </div>
        <div className="mx-auto text-center">
          <ButtonBlueP content={"Xem cảm nhận học viên"} />
        </div>
      </div>
    </div>
  );
};

export default StudentComment;
