import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const CountUpComponent = () => {
  const [ref, inView] = useInView({ triggerOnce: false });

  return (
    <div
      className="relative py-10 bg-fixed bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/img/bg-countup.jpg')" }}
    >
      {/* Lớp phủ tối */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <div className="container relative ">
        <div className="text-center space-y-5">
          <h1 className="text-4xl font-bold text-white">
            CYBERSOFT - ĐÀO TẠO LẬP TRÌNH THEO LỘ TRÌNH DỰ ÁN
          </h1>
          <p className="text-xl text-white">Thống kê qua con số</p>
        </div>
        <div className="text-center mt-5">
          <ul className="flex items-center justify-between">
            <li className="md:flex items-center md:space-x-5" ref={ref}>
              <div className="h-24 w-24 rounded-full bg-purple-400 flex items-center justify-center text-4xl text-white">
                <i className="fa-solid fa-building"></i>
              </div>
              <div>
                <h2 className="text-4xl font-bold text-purple-400">
                  {inView && <CountUp start={0} end={7} duration={5} />}
                </h2>
                <p className="text-xl text-white">Trung tâm</p>
              </div>
            </li>
            <li className="md:flex items-center md:space-x-5" ref={ref}>
              <div className="h-24 w-24 rounded-full bg-purple-400 flex items-center justify-center text-4xl text-white">
                <i className="fa-solid fa-user-graduate"></i>
              </div>
              <div>
                <h2 className="text-4xl font-bold text-purple-400">
                  {inView && (
                    <CountUp start={0} end={9500} duration={5} separator="," />
                  )}
                  +
                </h2>
                <p className="text-xl text-white">Học viên</p>
              </div>
            </li>
            <li className="md:flex items-center md:space-x-5" ref={ref}>
              <div className="h-24 w-24 rounded-full bg-purple-400 flex items-center justify-center text-4xl text-white">
                <i className="fa-solid fa-handshake"></i>
              </div>
              <div>
                <h2 className="text-4xl font-bold text-purple-400">
                  {inView && <CountUp start={0} end={200} duration={5} />}+
                </h2>
                <p className="text-xl text-white">Đối tác</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CountUpComponent;
