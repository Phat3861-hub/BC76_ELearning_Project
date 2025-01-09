import React from "react";
import "./Count.scss";

const Count = () => {
  return (
    <div className="bg-count py-28">
      <div className="text-center md:container space-y-8">
        <h1 className="lg:text-4xl sm:text-3xl font-medium">
          CYBERSOFT - ĐÀO TẠO LẬP TRÌNH THEO LỘ TRÌNH DỰ ÁN
        </h1>
        <h2 className="text-2xl font-light">Thống kê qua con số</h2>
        <div className="grid grid-cols-3">
          <div className="flex justify-center items-center gap-3">
            <div className="icon-bg bp-bg xl:w-1/5 lg:w-1/4 md:w-2/6 sm:w-1/4 p-4 rounded-full">
              <img
                className="w-full "
                src="https://cybersoft.edu.vn/wp-content/uploads/2023/02/health-clinic.png"
                alt=""
              />
            </div>
            <div className="text-left ">
              <h3 className="font-semibold lg:text-6xl sm:text-3xl bp-color">
                7
              </h3>
              <p className="font-medium ">Trung tâm</p>
            </div>
          </div>

          <div className="flex justify-center items-center gap-3">
            <div className="icon-bg bp-bg xl:w-1/5 lg:w-1/4 md:w-2/6 sm:w-1/4 p-4 rounded-full">
              <img
                className="w-full "
                src="https://cybersoft.edu.vn/wp-content/uploads/2023/02/graduated.png"
                alt=""
              />
            </div>
            <div className="text-left ">
              <h3 className="font-semibold lg:text-6xl sm:text-3xl bp-color">
                9500+
              </h3>
              <p className="font-medium ">Học viên</p>
            </div>
          </div>
          <div className="flex justify-center items-center gap-3">
            <div className="icon-bg bp-bg xl:w-1/5 lg:w-1/4 md:w-2/6 sm:w-1/4 p-4 rounded-full">
              <img
                className="w-full  "
                src="https://cybersoft.edu.vn/wp-content/uploads/2023/02/deal.png"
                alt=""
              />
            </div>
            <div className="text-left ">
              <h3 className="font-semibold lg:text-6xl sm:text-3xl bp-color">
                200+
              </h3>
              <p className="font-medium ">Đối tác</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Count;
