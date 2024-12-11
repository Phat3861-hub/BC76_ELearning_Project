import React from "react";
import { ButtonContact } from "../../../components/Button/buttonCustom";
const CategoryBanner = ({ category, tenDanhMuc }) => {
  return (
    <div className=" bg-[url('/public/img/banner-category.avif')] bg-no-repeat bg-center bg-cover h-48 md:h-60">
      <div className="container">
        <div
          className={`text-center rounded-lg  flex items-center justify-center flex-col text-white space-y-5 pt-10`}
        >
          <h2 className="uppercase text-xl md:text-3xl font-bold ">
            {tenDanhMuc}
          </h2>
          <p className="uppercase font-semibold ">
            Hãy lựa chọn khóa học bạn mong muốn
          </p>
          <ButtonContact content="Liên hệ tư vấn " className="" />
        </div>
      </div>
    </div>
  );
};

export default CategoryBanner;
