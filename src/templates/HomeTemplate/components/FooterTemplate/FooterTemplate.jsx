import React from "react";

const FooterTemplate = () => {
  return (
    <div id="footer" className="py-10">
      <div className="container space-y-10">
        <div className="space-y-5 md:space-y-0 md:grid md:grid-cols-3 gap-10 text-white">
          <div className="flex flex-col space-y-5 ">
            <h3 className="text-xl font-semibold">
              Đăng ký nhận Ưu đãi & Bài viết mới
            </h3>
            <p>
              CyberSoft sẽ gởi các khóa học trực tuyến & các chương trình
              CyberLive hoàn toàn MIỄN PHÍ và các chương trình KHUYẾN MÃI hấp
              dẫn đến các bạn.
            </p>
            <input
              type="text"
              placeholder="Email liên hệ ..."
              className="p-3 outline-none rounded-lg text-black"
            />
            <input
              type="text"
              placeholder="Điện thoại liên hệ ..."
              className=" p-3 outline-none rounded-lg text-black"
            />
            <button className="p-3 bg-gradient-to-r from-yellow-500 via-orange-500 to-yellow-700 rounded-lg">
              Đăng ký ngay
            </button>
          </div>
          <div className="text-center">
            <button className="w-full  p-3 rounded-lg bg-gradient-to-r from-yellow-500 via-orange-500 to-yellow-700 text-white">
              Tư vấn & đăng ký học
            </button>
          </div>
          <div>
            <img className="rounded-lg" src="/img/footer.jpg" alt="" />
          </div>
        </div>
        <div className="text-white ">
          <h2 className="text-2xl font-semibold mb-5">TP. Hồ Chí Minh</h2>
          <div className="space-y-5 md:space-y-0 md:grid md:grid-cols-4 gap-5">
            <div className="space-y-5">
              <h3 className="text-lg font-semibold">
                Trụ sở: 112 Cao Thắng, Quận 3
              </h3>
              <p className="text-gray-500 text-sm">
                Hotline: 096.105.1014 <br /> Địa chỉ: Tầng 5, toà nhà Suri, 112
                Cao Thắng, Quận 3, TPHCM
              </p>
            </div>
            <div className="space-y-5">
              <h3 className="text-lg font-semibold">
                124 Điện Biên Phủ, Quận 1
              </h3>
              <p className="text-gray-500 text-sm">
                Hotline: 096.105.1014 <br /> Địa chỉ: 124 Điện Biên Phủ, P. Đa
                Kao, Quận 1, TPHCM
              </p>
            </div>
            <div className="space-y-5">
              <h3 className="text-lg font-semibold">
                P3-00.05 Chung cư Cityland Park Hills, Phường 10, Quận Gò Vấp
              </h3>
              <p className="text-gray-500 text-sm">
                Hotline: 096.105.1014 <br /> Địa chỉ: P3-00.05 Chung cư Cityland
                Park Hills, Phường 10, Quận Gò Vấp, TP.HCM
              </p>
            </div>
            <div className="space-y-5">
              <h3 className="text-lg font-semibold">
                6C Đường số 8, Linh Tây, Thủ Đức (gần ĐH Cảnh Sát)
              </h3>
              <p className="text-gray-500 text-sm">
                Hotline: 096.105.1014 <br /> Địa chỉ: 6C Đường số 8, Linh Tây,
                Thủ Đức, TPHCM
              </p>
            </div>
          </div>
        </div>
        <div className="text-white">
          <h2 className="text-2xl font-semibold mb-5">Đà Nẵng</h2>
          <div className="space-y-5">
            <h3 className="text-lg font-semibold">
              103 Nguyễn Hữu Dật, Hải Châu
            </h3>
            <p className="text-gray-500 text-sm">
              Hotline: 096.105.1014 <br /> Địa chỉ: 103 Nguyễn Hữu Dật, Hải
              Châu, ĐN
            </p>
          </div>
        </div>
        <div className="p-1 bg-slate-500"></div>
        <div className="flex justify-between text-white">
          <div className="">
            <p className="text-gray-500 text-sm w-full">
              <span className="hidden md:inline-block">
                © Bản quyền CyberSoft 2017 - 2023 -{" "}
              </span>
              Empower by
              <a href="" className="text-white hover:text-gray-300 ms-1">
                CyberSoft
              </a>
            </p>
          </div>
          <div className="flex space-x-5">
            <i class="fa-brands fa-github"></i>
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-linkedin"></i>
            <i class="fa-brands fa-youtube"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterTemplate;
