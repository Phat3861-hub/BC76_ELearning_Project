import React from "react";
import InputCustom from "../../../../components/Input/InputCustom";
import { Button } from "antd";
import { RightOutlined } from "@ant-design/icons";

const FooterTemplate = () => {
  return (
    <div className=" py-5 bg-black text-white mt-10">
      <div className="container">
        <div className="grid lg:grid-cols-3 sm:grid-cols-2  gap-9">
          <div className="space-y-6">
            <div className="space-y-1">
              <h2 className="text-xl">Đăng ký nhận Ưu đãi & Bài viết mới</h2>
              <p>
                CyberSoft sẽ gởi các khóa học trực tuyến & các chương trình
                CyberLive hoàn toàn MIỄN PHÍ và các chương trình KHUYẾN MÃI hấp
                dẫn đến các bạn.
              </p>
            </div>
            <InputCustom placeholder={"Email liên hệ"} />
            <InputCustom placeholder={"Điện thoại liên hệ"} />
            <Button className="w-full h-12 font-semibold text-lg bg-yellow-500 hover:!text-white hover:!bg-yellow-500 text-white border-yellow-500 hover:!border-yellow-500">
              ĐĂNG KÝ NGAY
            </Button>
          </div>
          <div>
            <Button className="w-full h-12 font-semibold text-lg bg-yellow-500 hover:!text-white hover:!bg-yellow-600 text-white border-yellow-500 hover:!border-yellow-600 transition-all">
              TƯ VẤN & ĐĂNG KÝ HỌC
              {/* <RightOutlined className="!hidden hover:!block" /> */}
            </Button>
          </div>
        </div>
        <div className="mt-16 pb-8  border-b-4 border-gray-300">
          <h1 className="text-xl font-semibold text-gray-500 mb-5">
            TP. Hồ Chí Minh
          </h1>
          <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-5">
            <div className="space-y-4">
              <h2 className="text-lg font-semibold">
                Trụ sở: 112 Cao Thắng, Quận 3
              </h2>
              <div className="text-gray-500">
                <p>Hotline: 096.105.1014</p>
                <p>
                  Địa chỉ: Tầng 5, toà nhà Suri, 112 Cao Thắng, Quận 3, TPHCM
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <h2 className="text-lg font-semibold">
                124 Điện Biên Phủ, Quận 1
              </h2>
              <div className="text-gray-500">
                <p>Hotline: 096.105.1014</p>
                <p>Địa chỉ: 124 Điện Biên Phủ, P. Đa Kao, Quận 1, TPHCM</p>
              </div>
            </div>
            <div className="space-y-4">
              <h2 className="text-lg font-semibold">
                P3-00.05 Chung cư Cityland Park Hills, Phường 10, Quận Gò Vấp
              </h2>
              <div className="text-gray-500">
                <p>Hotline: 096.105.1014</p>
                <p>
                  Địa chỉ: P3-00.05 Chung cư Cityland Park Hills, Phường 10,
                  Quận Gò Vấp, TP.HCM
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <h2 className="text-lg font-semibold">
                6C Đường số 8, Linh Tây, Thủ Đức (gần ĐH Cảnh Sát)
              </h2>
              <div className="text-gray-500">
                <p>Hotline: 096.105.1014</p>
                <p>Địa chỉ: 6C Đường số 8, Linh Tây, Thủ Đức, TPHCM</p>
              </div>
            </div>
          </div>
          <h1 className="text-xl font-semibold text-gray-500 mb-5 mt-20">
            Đà Nẵng
          </h1>
          <div className="grid grid-cols-1 gap-5">
            <div className="space-y-4">
              <h2 className="text-lg font-semibold">
                103 Nguyễn Hữu Dật, Hải Châu
              </h2>
              <div className="text-gray-500">
                <p>Hotline: 096.105.1014</p>
                <p>Địa chỉ: 103 Nguyễn Hữu Dật, Hải Châu, ĐN</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex sm:flex-wrap justify-between mt-10 gap-8 ">
          <div className="flex justify-between w-9/12">
            <p className="text-gray-500 text-sm w-full">
              © Bản quyền CyberSoft 2017 - 2023 - Empower by
              <a href="" className="text-white hover:text-gray-300 ms-1">
                CyberSoft
              </a>
            </p>
            <p className="text-sm">
              <a href="" className="text-white hover:text-gray-300 mr-2">
                Bootcamp Lập trình Front-End
              </a>
              <a href="" className="text-white hover:text-gray-300 mr-2">
                Bootcamp Full-Stack Javascript
              </a>
              <a href="" className="text-white hover:text-gray-300 mr-2">
                Bootcamp Java Back-End
              </a>

              <a href="" className="text-white hover:text-gray-300 mr-2">
                Tư duy lập trình, Thuật toán
              </a>
              <a href="" className="text-white hover:text-gray-300 mr-2">
                Cấu trúc dữ liệu, Thuật toán nâng cao
              </a>
              <a href="" className="text-white hover:text-gray-300 mr-2">
                Phân tích Dữ liệu với Python
              </a>
            </p>
          </div>
          <div>
            <span className="text-gray-500">GET SOCIAL</span>
            <i className="fa-brands fa-facebook-f text-white px-2 py-1 bg-blue-600 rounded-sm hover:bg-slate-900 mx-2 hover:cursor-pointer" />
            <i className="fa-solid fa-play hover:cursor-pointer text-white px-2 py-1 bg-red-700 rounded-sm hover:bg-slate-900" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterTemplate;
