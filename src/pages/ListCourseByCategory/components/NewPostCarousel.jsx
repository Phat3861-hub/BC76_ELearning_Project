import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./NewPostCarousel.scss";
import { tr } from "framer-motion/client";
const NewPostCarousel = () => {
  const nextIcon = `<i class="fa-solid fa-angle-right"></i>`;
  const prevIcon = `<i class="fa-solid fa-angle-left"></i>`;

  return (
    <div className="py-10 bg-newPost">
      <div className="container">
        <div className="newPostContent">
          <h1 className="mb-5 text-center text-4xl font-bold">
            BÀI VIẾT MỚI NHẤT
          </h1>
          <OwlCarousel
            className="NewPostCarousel p-11"
            autoWidth={false}
            loop={false} // Để carousel quay liên tục
            nav={true}
            margin={20}
            smartSpeed={800}
            mouseDrag={true}
            navText={[prevIcon, nextIcon]}
            dots={false}
            responsive={{
              0: { items: 1 }, // Màn hình nhỏ nhất hiển thị 2 items
              768: { items: 2 }, // Màn hình trung bình hiển thị 4 items
              1024: { items: 3 }, // Màn hình lớn hiển thị 3 items
            }}
          >
            <div className="item border h-4/5 border-gray-300 rounded-xl p-4 transform transition-transform hover:scale-95 duration-300    overflow-hidden">
              <img
                src="/img/newpost1.png"
                alt="Post Image"
                className="rounded-xl w-full object-cover mb-4"
              />
              <div className="min-h-24 md:min-h-40 overflow-hidden mb-4">
                {" "}
                {/* Giới hạn chiều cao của phần văn bản */}
                <h2 className="text-xl font-semibold mb-2">
                  Học nghề tester có khó không?
                </h2>
                <p className="text-sm text-gray-700 line-clamp-2 md:line-clamp-3">
                  Phát triển phần mềm không thể hoàn thiện nếu không có thử
                  nghiệm phần mềm. Thử nghiệm là một kỹ năng kỹ thuật đòi hỏi
                  người thử nghiệm phải theo kịp các tiêu chuẩn mới nhất. Đóng
                  vai trò quan trọng trong nhiều giai đoạn phát triển phần mềm
                  để tạo ra phần mềm dễ sử dụng và ít lỗi...
                </p>
              </div>
            </div>
            <div className="item border h-4/5 border-gray-300 rounded-xl p-4 transform transition-transform hover:scale-95 duration-300    overflow-hidden">
              <img
                src="/img/newpost2.jpg"
                alt="Post Image"
                className="rounded-xl w-full object-cover mb-4"
              />
              <div className="min-h-24 md:min-h-40 overflow-hidden mb-4">
                {" "}
                {/* Giới hạn chiều cao của phần văn bản */}
                <h2 className="text-xl font-semibold mb-2">
                  Quản lý State hiệu quả trong JavaScript
                </h2>
                <p className="text-sm text-gray-700 line-clamp-2 md:line-clamp-3">
                  Quản lý state là một trong những thử thách quan trọng nhất khi
                  phát triển ứng dụng Fullstack JavaScript, đặc biệt là khi ứng
                  dụng trở nên lớn mạnh và phức tạp hơn. Khi đó, việc duy trì sự
                  đồng bộ giữa state của các component frontend và dữ liệu từ
                  backend trở thành yếu tố then chốt để đảm bảo hiệu suất và sự
                  ổn định của ứng dụng. Việc quản lý state không chỉ giúp giao
                  diện người dùng phản hồi nhanh chóng mà còn tối ưu hóa quá
                  trình xử lý dữ liệu từ phía server.
                </p>
              </div>
            </div>
            <div className="item border h-4/5 border-gray-300 rounded-xl p-4 transform transition-transform hover:scale-95 duration-300    overflow-hidden">
              <img
                src="/img/newpost3.png"
                alt="Post Image"
                className="rounded-xl w-full object-cover mb-4"
              />
              <div className="min-h-24 md:min-h-40 overflow-hidden mb-4">
                {" "}
                {/* Giới hạn chiều cao của phần văn bản */}
                <h2 className="text-xl font-semibold mb-2">
                  Authentication Và Authorization Trong Fullstack JavaScript
                </h2>
                <p className="text-sm text-gray-700 line-clamp-2 md:line-clamp-3">
                  Hôm nay, chúng ta sẽ cùng tìm hiểu một trong những yếu tố then
                  chốt để đảm bảo tính an toàn và bảo mật cho bất kỳ ứng dụng
                  nào: Authentication (xác thực) và Authorization (phân quyền).
                  Đây không chỉ là lớp bảo vệ dữ liệu người dùng, mà còn là rào
                  chắn vững chắc giúp ngăn chặn các truy cập trái phép, đảm bảo
                  rằng chỉ những cá nhân có thẩm quyền mới được phép tiếp cận
                  các phần quan trọng và nhạy cảm của hệ thống.
                </p>
              </div>
            </div>
            <div className="item border h-4/5 border-gray-300 rounded-xl p-4 transform transition-transform hover:scale-95 duration-300    overflow-hidden">
              <img
                src="/img/newpost4.png"
                alt="Post Image"
                className="rounded-xl w-full object-cover mb-4"
              />
              <div className="min-h-24 md:min-h-40 overflow-hidden mb-4">
                {" "}
                {/* Giới hạn chiều cao của phần văn bản */}
                <h2 className="text-xl font-semibold mb-2">
                  Tầm quan trọng của Automation Testing trong kỷ nguyên số
                </h2>
                <p className="text-sm text-gray-700 line-clamp-2 md:line-clamp-3">
                  Automation Test là một quá trình xử lý tự động các bước thực
                  hiện một test case và được thực hiện bởi phần mềm là
                  Automation Testing Tool. Mục đích của Tester là tìm bug nhưng
                  mục đích cuối vẫn là hỗ trợ để làm ra sản phẩm tốt nhất. Với
                  tốc độ phát triển về sự cạnh tranh trong lĩnh vực công nghệ
                  thông tin đang diễn ra nhanh chóng và mạnh mẽ. Để duy trì cũng
                  như cải thiện chất lượng sản phẩm, chúng ta không chỉ cần phát
                  triển nhanh mà còn phải đảm bảo chất lượng sản phẩm của mình.
                </p>
              </div>
            </div>
          </OwlCarousel>
        </div>
      </div>
    </div>
  );
};

export default NewPostCarousel;
