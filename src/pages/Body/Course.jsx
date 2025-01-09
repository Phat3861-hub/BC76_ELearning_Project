import React from "react";
import "./Course.scss";
import CourseDetail from "./CourseDetail";
import { RightOutlined } from "@ant-design/icons";

const Course = () => {
  return (
    <div className="bg-[#505170]">
      <div className="container course py-10">
        <h2 className="text-white lg:text-5xl sm:text-3xl font-semibold mb-10 text-center">
          Khám phá các khoá học của CyberSoft
        </h2>
        <div className=" grid lg:grid-cols-3 sm:grid-cols-1 lg:gap-5 ">
          <div className="lg:col-span-2 flex-col ">
            <div className="flex items-center bg-color-gray rounded-t-lg p-6 ">
              <img
                src="https://cybersoft.edu.vn/wp-content/uploads/2023/02/data-science.png"
                alt=""
                className="p-4 bg-white rounded-full me-8"
                width={80}
              />
              <p className="text-white md:text-2xl sm:text-xl font-semibold">
                Các khoá học của CyberSoft
              </p>
            </div>
            <div className="p-5 bg-white space-y-3 rounded-b-lg">
              <CourseDetail
                name={"Bootcamp - Lập trình Front End từ Zero đến có việc"}
                month={"6 tháng"}
                day={"44 buổi"}
              />
              <CourseDetail
                name={
                  "Bootcamp - Lập trình Fullstack JavaScript từ Zero đến có việc "
                }
                month={"8 tháng"}
                day={"63 buổi"}
              />
              <CourseDetail
                name={
                  "Bootcamp - Lập trình FullStack Web C# .NET CORE từ Zero tới được nhận việc với kỹ năng cao cấp mới"
                }
                month={"6.5 tháng"}
                day={"54 buổi"}
              />
              <CourseDetail
                name={
                  "Bootcamp - Testing chuyên nghiệp từ Zero tới được nhận việc"
                }
                month={"4 tháng"}
                day={"32 buổi"}
              />
              <CourseDetail
                name={"Bootcamp - Lập trình Back-End JAVA từ Zero đến có việc"}
                month={"6.5 tháng"}
                day={"54 buổi"}
              />
              <CourseDetail
                name={"Bootcamp - Cấp tốc - Lập trình Fullstack từ Zero"}
                month={"6 tháng"}
                day={"63 buổi"}
              />
              <CourseDetail
                name={"Lập trình Back End NodeJS viết API thực tế"}
                month={"Hơn 2 tháng"}
                day={"19 buổi"}
              />
              <CourseDetail
                name={
                  "Backend cao cấp NodeJS-NestJS-CLOUD-DEVOPS-Microservice-Redis-ElasticSearch"
                }
                month={"2.5 tháng"}
                day={"20 buổi"}
                Class="border-none "
              />
            </div>
          </div>
          <div className="tab-col md:flex-col w-full sm:mt-10 space-y-5">
            <div className="bg-white ">
              <div className="border-bp overflow-hidden p-6 rounded-lg hover:cursor-pointer ">
                <div className="flex justify-between rounded-lg ">
                  <div className="flex items-center gap-3">
                    <div className="bg-color-gray p-5 rounded-full">
                      <img
                        src="https://cybersoft.edu.vn/wp-content/uploads/2023/02/cyberlearn-1.png"
                        alt=""
                        width={30}
                        className="  "
                      />
                    </div>
                    <div>
                      <h1 className="lg:text-2xl sm:text-base font-bold">
                        CyberLearn
                      </h1>
                      <p className="lg:text-base sm:text-sm">
                        Học lập trình online video
                      </p>
                    </div>
                  </div>
                  <RightOutlined />
                </div>
              </div>
            </div>
            <div className="bg-white ">
              <div className="border-bp overflow-hidden p-6 rounded-lg hover:cursor-pointer ">
                <div className="flex justify-between rounded-lg ">
                  <div className="flex items-center gap-3">
                    <div className="bg-color-gray p-5 rounded-full">
                      <img
                        src="https://cybersoft.edu.vn/wp-content/uploads/2023/02/data-science-1.png"
                        alt=""
                        width={80}
                        className="sm:w-8  "
                      />
                    </div>
                    <div>
                      <h1 className="lg:text-2xl sm:text-base font-bold">
                        Phân tích dữ liệu / Data Analysis / Data Science / AI
                      </h1>
                      <p className="lg:text-base sm:text-sm">
                        Học lập trình online video
                      </p>
                    </div>
                  </div>
                  <RightOutlined />
                </div>
              </div>
            </div>
            <div className="bg-white ">
              <div className="border-bp overflow-hidden p-6 rounded-lg hover:cursor-pointer ">
                <div className="flex justify-between rounded-lg ">
                  <div className="flex items-center gap-3">
                    <div className="bg-color-gray p-5 rounded-full">
                      <img
                        src="https://cybersoft.edu.vn/wp-content/uploads/2023/02/codingCamp-1.png"
                        alt=""
                        width={30}
                        className="  "
                      />
                    </div>
                    <div>
                      <h1 className="lg:text-2xl sm:text-base font-bold">
                        CodeZuni
                      </h1>
                      <p className="lg:text-base sm:text-sm">
                        Chương trình học các kỹ năng mới
                      </p>
                    </div>
                  </div>
                  <RightOutlined />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
