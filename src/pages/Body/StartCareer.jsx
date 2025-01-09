import React from "react";
import "./StartCareer.scss";
import { Tabs } from "antd";
import { ButtonBlueP } from "../../components/Button/buttonCustom";
import { div } from "framer-motion/client";

const StartCareer = () => {
  return (
    <>
      <div className="start-career relative hidden md:block">
        <div className="absolute left-0 right-0 lg:-top-56 sm:-top-32">
          <img
            src="https://cybersoft.edu.vn/wp-content/uploads/2022/10/banner_5.jpg"
            alt=""
            className="m-auto rounded-xl lg:w-[700px] sm:w-2/3"
          />
          <div className="m-auto text-white w-3/5 mt-10 space-y-4">
            <h2 className="lg:text-5xl sm:text-3xl font-semibold">
              Bắt đầu sự nghiệp lập trình
            </h2>
            <p className="lg:text-5xl sm:text-3xl font-semibold">
              từ ZERO tại CyberSoft
            </p>
            <p className="lg:text-3xl sm:text-xl">
              100% Thực Hành, Học Thật, Dự Án Thật, Việc Làm Thật
            </p>
            <div className="btn-grp sm:space-x-10 !mt-10">
              <ButtonBlueP content={"Danh sách khóa học"} />
              <ButtonBlueP content={"Tư vấn miễn phí"} />
            </div>
          </div>
        </div>
      </div>
      <div className="container mb-10 tab-cyber">
        <Tabs
          className=""
          defaultActiveKey="1"
          centered
          size="large"
          items={[
            {
              label: `CyberSoft là ai ?`,
              key: 1,
              children: (
                <div className="cyber-tab mx-auto grid md:grid-cols-2 sm:grid-cols-1 gap-5">
                  <div className="space-y-3 mb-5">
                    <h2 className="font-medium lg:text-3xl sm:text-2xl">
                      Chúng tôi tin vào tiềm năng của con người
                    </h2>
                    <p className="lg:text-base sm:text-sm">
                      CyberSoft được thành lập dựa trên niềm tin rằng bất cứ ai
                      cũng có thể học lập trình. Bất kể ai cũng có thể là một
                      lập trình, tham gia trong đội ngữ Tech, bất kể tuổi tác,
                      nền tảng, giới tính hoặc tình trạng tài chính. Chúng tôi
                      không bỏ qua những người mới bắt đầu hoặc chưa có kinh
                      nghiệm theo đuổi đam mê lập trình. Thay vào đó, chúng tôi
                      chào đón học viên của tất cả các cấp độ kinh nghiệm. Lộ
                      trình học tập của CyberSoft may đo cho từng đối tượng để
                      học xong và đi làm ngay.
                    </p>
                    <ButtonBlueP content={"Sứ mệnh đào tạo"} />
                  </div>
                  <div>
                    <img
                      src="https://cybersoft.edu.vn/wp-content/uploads/2023/03/gioithieucybersoft_3.png"
                      alt=""
                      width={400}
                      className="md:-w-1/3"
                    />
                  </div>
                </div>
              ),
            },
            {
              label: `Học tập tại CyberSoft`,
              key: 2,
              children: (
                <div className="cyber-tab mx-auto grid md:grid-cols-2 sm:grid-cols-1 gap-5">
                  <div className="space-y-3  ms-10 ">
                    <p className=" ps-10 border-l-2 lg:text-base sm:text-sm">
                      Bạn có thể dành nhiều tháng thậm chí cả năm để cố gắng tự
                      học những thứ này và không có định hướng hoặc bạn có thể
                      đến đây và lấy nó ngay.
                    </p>
                    <div className="!mt-10 flex items-center">
                      <div className="lg:w-1/3 sm:w-1/2">
                        <img
                          src="https://cybersoft.edu.vn/wp-content/uploads/2018/07/le-quang-song-avatar-min-60x60_c.jpg"
                          alt=""
                          className="rounded-full"
                        />
                        <p className="font-semibold lg:text-base sm:text-sm">
                          Lê Quang Song
                        </p>
                        <p className="text-sm">CEO CyberSoft</p>
                      </div>
                      <div>
                        <p className="tool-arrow font-light italic bg-gray-200  p-3 lg:text-base sm:text-xs">
                          15 năm kinh nghiệm Code, Quản lý, Đào tạo & Khởi
                          nghiệp
                        </p>
                      </div>
                    </div>
                    <ButtonBlueP content={"Lộ trình học"} />
                  </div>
                  <div>
                    <img
                      src="https://cybersoft.edu.vn/wp-content/uploads/2023/03/diemkhacbietvideo_2.png"
                      alt=""
                      width={400}
                    />
                  </div>
                </div>
              ),
            },
          ]}
        />
      </div>
    </>
  );
};

export default StartCareer;
