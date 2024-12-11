import React, { useEffect, useState } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./CategoryCarousel.scss";
import { Button } from "antd";
import { NavLink } from "react-router-dom";
const CategoryCarousel = () => {
  const nextIcon = `<i class="fa-solid fa-angle-right"></i>`;
  const prevIcon = `<i class="fa-solid fa-angle-left"></i>`;
  return (
    <div className="py-10 ">
      <div className="container">
        <p className="font-bold text-xl mb-5">Danh mục khóa học</p>
        <OwlCarousel
          className="CategoryCarousel "
          autoWidth={true}
          loop={false}
          nav={true}
          margin={20}
          smartSpeed={800}
          mouseDrag={false}
          navText={[prevIcon, nextIcon]}
          dots={false}
          responsive={{
            0: { items: 2 }, // Màn hình nhỏ nhất hiển thị 2 items
            768: { items: 4 }, // Màn hình trung bình hiển thị 4 items
            1024: { items: 5 }, // Màn hình lớn hiển thị 6 items
          }}
        >
          <div className="item h-16 md:h-20 leading-6">
            <NavLink to={`/list-course-by-category/category?maDanhMuc=BackEnd`}>
              <Button className="flex w-auto h-full btnLogo">
                <div className="w-14 h-14 p-2 bg-black rounded-full ">
                  <img
                    src="https://yt3.googleusercontent.com/ytc/AIdro_n4k0wKZLq25_sCfof3HIOR_Bm0YAhiXfdYwXfG-96OHA=s900-c-k-c0x00ffffff-no-rj"
                    alt=""
                  />
                </div>
                <span className="font-bold text-xl">Lập trình Backend</span>
              </Button>
            </NavLink>
          </div>
          <div className="item h-16 md:h-20 leading-6">
            <NavLink to={`/list-course-by-category/category?maDanhMuc=Design`}>
              <Button className="flex w-auto h-full btnLogo">
                <div className="w-14 h-14 p-2 bg-black rounded-full ">
                  <img
                    src="https://e7.pngegg.com/pngimages/486/503/png-clipart-front-end-web-development-front-and-back-ends-software-developer-technology-technology-blue-angle.png"
                    alt=""
                  />
                </div>
                <span className="font-bold text-xl">Thiết kế Web</span>
              </Button>
            </NavLink>
          </div>
          <div className="item h-16 md:h-20 leading-6">
            <NavLink to={`/list-course-by-category/category?maDanhMuc=DiDong`}>
              <Button className="flex w-auto h-full btnLogo">
                <div className="w-14 h-14 p-2 bg-black rounded-full ">
                  <img
                    src="https://p.kindpng.com/picc/s/106-1065562_transparent-blue-phone-icon-hd-png-download.png"
                    alt=""
                  />
                </div>
                <span className="font-bold text-xl">Lập trình di động</span>
              </Button>
            </NavLink>
          </div>
          <div className="item h-16 md:h-20 leading-6">
            <NavLink
              to={`/list-course-by-category/category?maDanhMuc=FrontEnd`}
            >
              <Button className="flex w-auto h-full btnLogo">
                <div className="w-14 h-14 p-2 bg-black rounded-full ">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTTAclSI7qFOof-S7me35I2aeNRPpCBT6fGg&s"
                    alt=""
                  />
                </div>
                <span className="font-bold text-xl">Lập trình Front end</span>
              </Button>
            </NavLink>
          </div>
          <div className="item h-16 md:h-20 leading-6">
            <NavLink
              to={`/list-course-by-category/category?maDanhMuc=FullStack`}
            >
              <Button className="flex w-auto h-full btnLogo">
                <div className="w-14 h-14 p-2 bg-black rounded-full ">
                  <img
                    src="https://www.rapidbrains.com/assets/img/services/rapidbrains-full-stack.webp"
                    alt=""
                  />
                </div>
                <span className="font-bold text-xl">Lập trình Full Stack</span>
              </Button>
            </NavLink>
          </div>
          <div className="item h-16 md:h-20 leading-6">
            <NavLink to={`/list-course-by-category/category?maDanhMuc=TuDuy`}>
              <Button className="flex w-auto h-full btnLogo">
                <div className="w-14 h-14 p-2 bg-black rounded-full ">
                  <img
                    src="https://images.vexels.com/content/136240/preview/idea-light-square-icon-fb4564.png"
                    alt=""
                  />
                </div>
                <span className="font-bold text-xl">Tư duy lập trình</span>
              </Button>
            </NavLink>
          </div>
        </OwlCarousel>
      </div>
    </div>
  );
};

export default CategoryCarousel;
