import React, { useState } from "react";
import { ButtonBlueP } from "../../components/Button/buttonCustom";
import "./CyberDetail.scss";
import { Tabs } from "antd";
import { div, i } from "framer-motion/client";
import useViewPort from "../../hook/useViewPort";

const CyberDetail = () => {
  // const [tabPosition, setTabPosition] = useState("left");

  const { width } = useViewPort;

  console.log(width);
  const changeTabPosition = (e) => {
    setTabPosition(e.target.value);
  };
  const item = [
    {
      i: `fa-solid fa-desktop`,
      title: "Hệ thống học tập",
      contentTitle: "Hệ thống học tập",
      content:
        "CyberSoft sử dụng hệ thống video trực tuyến và hệ thống LMS ( Learning Management System) hiện đại để hỗ trợ học tập cho các khóa học.",
      key: 1,
    },
    {
      i: `fa-regular fa-user`,
      title: "Hỗ trợ học tập",
      contentTitle: "Giảng viên - Mentor hỗ trợ",
      content:
        "Trong suốt khóa học, học viên được hỗ trợ nhiệt tình từ các giảng viên và các mentor. Giảng viên chia sẻ tất cả các kinh nghiệm có được từ các dự án giảng viên đang làm. Mentor tích cực đôn đốc việc code, hỗ trợ sửa lỗi code và góp ý code đúng chuẩn.",
      key: 2,
    },
    {
      i: `fa-regular fa-file-lines`,
      title: "Dự án thực tế",
      contentTitle: "Dự án - bài tập thực tế",
      content:
        "Hệ thống bài tập - dự án thực tế được áp dụng vào từng buổi học. Ngay sau buổi học, học viên đã có thể code các phần của dự án, bài luyện tập chuyên sâu.",
      key: 3,
    },
    {
      i: `fa-regular fa-comments`,
      title: "Thảo luận ngoài giờ",
      contentTitle: "Nhóm thảo luận - tương tác",
      content:
        "Ngoài giờ học tại lớp, học viên còn được hỗ trợ tích cực từ Giảng viên, Mentor và các bạn cùng lớp trên kênh thảo luận và kênh chat cực kì sôi nổi. Bạn luôn có được động lực học tập cao nhất từ các nhóm thảo luận này.",
      key: 4,
    },
    {
      i: `fa-regular fa-handshake`,
      title: "Kết nối việc làm",
      contentTitle: "Hệ thống hỗ trợ việc làm",
      content:
        "Ngay từ khi bắt đầu học, học viên sẽ được hỗ trợ kết nối với hệ thống việc làm. Hệ thống sẽ hỗ trợ đánh giá kỹ năng, tạo CV tự động, truy cập trọn đời. Khi kết thúc khoá học sẽ được hướng dẫn kỹ năng phỏng vấn và kết nối với các doanh nghiệp",
      key: 5,
    },
    {
      i: `fa-regular fa-bell`,
      title: "Theo dõi học tập",
      contentTitle: "Hệ thống theo dõi học tập thông minh",
      content:
        "Hệ thống ứng dụng công nghệ AI, giúp tự động nhắc nhở các hạn nộp bài tập, xem lại code và video bài học. Ngoài ra, mỗi lớp sẽ có một chủ nhiệm thường xuyên theo sát tiến độ học tập giúp học viên dễ dàng xây dựng thói quen học lập trình.",
      key: 6,
    },
  ];
  return (
    <div>
      <div className="cyber-detail container grid md:grid-cols-2 py-10 gap-5">
        <div className=" text-center space-y-4">
          <div className="md:text-4xl sm:text-3xl text-2xl space-y-2 text-left">
            <p>3 bước giúp</p>
            <p className="font-bold">bạn chuyển nghề</p>
          </div>
          <img
            src="https://cybersoft.edu.vn/wp-content/uploads/2023/02/abc-1.png"
            alt=""
          />
          <ButtonBlueP content={"TƯ VẤN ĐỊNH HƯỚNG"} className="mx-auto" />
        </div>
        <div className="flex flex-col space-y-4 md:text-xl sm:text-base font-semibold justify-around items-start">
          <p className="p-6 w-full shadow-lg rounded-lg text-bp-hover transition-all">
            Sắp xếp dành thời gian 3h mỗi ngày- tận dụng thời gian rảnh
          </p>
          <p className="p-6 w-full shadow-lg rounded-lg text-bp-hover transition-all">
            Chọn một lộ trình để đi
          </p>
          <p className="p-6 w-full shadow-lg rounded-lg text-bp-hover transition-all">
            Thực hành trên dự án, đủ skill, kết nối doanh nghiệp sau khóa học để
            nhận việc
          </p>
        </div>
      </div>
      <div className="py-10 townBanner ">
        <div className="z-10 container">
          <div className="text-center  md:text-right space-y-2 ">
            <h2 className=" bp-color md:text-6xl sm:text-5xl font-bold">
              Điểm ưu việt
            </h2>
            <p className="text-xl font-bold">CHỈ CÓ TẠI CYBERSOFT</p>
          </div>
        </div>
        <div className="hidden md:inline-block mt-5 tab-content">
          <Tabs
            centered
            tabBarGutter={0}
            tabPosition="left"
            items={item.map((item, i) => {
              return {
                label: (
                  <div className="space-y-3">
                    <i
                      className={`${item.i} xl:text-4xl lg:text-2xl sm:text-sm`}
                    />
                    <h2 className="text-base">{item.title}</h2>
                  </div>
                ),
                key: `${item.key}`,
                children: (
                  <div className="space-y-3">
                    <h2 className="lg:text-4xl text-2xl">
                      {item.contentTitle}
                    </h2>
                    <p>{item.content}</p>
                  </div>
                ),
              };
            })}
          />
        </div>
        <div className="container mt-10 pb-52">
          <h2 className="bp-color lg:text-5xl md:text-4xl sm:text-3xl font-medium">
            LỢI ÍCH GIA TĂNG
          </h2>
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 mt-10 gap-10">
            <div className="flex">
              <div className="w-1/3 text-center ">
                <i className="fa-solid fa-check bp-bg p-4 px-5 lg:text-4xl sm:text-2xl rounded-full " />
              </div>
              <div className="space-y-3 ps-3">
                <h2 className="md:text-2xl sm:text-lg font-semibold">
                  Học theo lộ trình, có định hướng
                </h2>
                <p className="md:text-base sm:text-sm">
                  CyberSoft sẽ định hướng và đưa ra các lộ trình học lập trình
                  nhằm phát triển năng lực và niềm đam mê lập trình của bạn để
                  có việc ngay sau học.
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="w-1/3 text-center ">
                <i className="fa-solid fa-fire bp-bg p-4 px-5 lg:text-4xl sm:text-2xl rounded-full " />
              </div>
              <div className="space-y-3 ps-3">
                <h2 className="md:text-2xl sm:text-lg font-semibold">
                  Nền tảng, tư duy, cốt lõi trong lập trình
                </h2>
                <p className="md:text-base sm:text-sm">
                  CyberSoft cung cấp những nền tảng, giá trị tư duy cốt lõi nhất
                  trong lập trình. Bạn sẽ tự tin trước sự thay đổi của công nghệ
                  và môi trường làm việc.
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="w-1/3 text-center ">
                <i className="fa-solid fa-chess-knight bp-bg p-4 px-5 lg:text-4xl sm:text-2xl rounded-full " />
              </div>
              <div className="space-y-3 ps-3">
                <h2 className="md:text-2xl sm:text-lg font-semibold">
                  Mài giũa bạn qua kinh nghiệm, dự án thực tế
                </h2>
                <p className="md:text-base sm:text-sm">
                  Đội ngũ Giảng viên và các Mentor là những người dày dạn kinh
                  nghiệm qua các dự án thực tế tại các công ty lớn sẽ truyền đạt
                  những kinh nghiệm "máu lửa" cho bạn.
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="w-1/3 text-center ">
                <i className="fa-solid fa-user-group bp-bg p-4  lg:text-4xl sm:text-2xl rounded-full " />
              </div>
              <div className="space-y-3 ps-3">
                <h2 className="md:text-2xl sm:text-lg font-semibold">
                  Teamwork, Scrum - Agile. Mentor tận tâm
                </h2>
                <p className="md:text-base sm:text-sm">
                  Bạn sẽ được giao dự án và làm theo Teamwork ngay từ ngày đầu
                  tiên. Đóng vai trò một thành viên trong qui trình Scrum,
                  Agile. Được Mentor hỗ trợ tân tâm, nhiệt tình.
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="w-1/3 text-center  ">
                <i className="fa-solid fa-qrcode bp-bg p-4 px-5 lg:text-4xl sm:text-2xl rounded-full " />
              </div>
              <div className="space-y-3 ps-3">
                <h2 className="md:text-2xl sm:text-lg font-semibold">
                  Công nghệ mới, chuyên sâu, thực tế
                </h2>
                <p className="md:text-base sm:text-sm">
                  Bạn được học và trải nghiệm các công nghệ lập trình mới nhất,
                  chuyên sâu, bám sát nhu cầu tuyển dụng thực tế từ doanh
                  nghiệp.
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="w-1/3 text-center ">
                <i className="fa-solid fa-fire bp-bg p-4 px-5 lg:text-4xl sm:text-2xl rounded-full " />
              </div>
              <div className="space-y-3 ps-3">
                <h2 className="md:text-2xl sm:text-lg font-semibold">
                  Trao tay chìa khóa thành công toàn diện
                </h2>
                <p className="md:text-base sm:text-sm">
                  Hướng dẫn viết CV, phỏng vấn. Kết nối doanh nghiệp, gặp gỡ
                  doanh nghiệp, phỏng vấn cùng doanh nghiệp ngay sau khi tốt
                  nghiệp.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CyberDetail;
