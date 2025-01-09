// custom hook để lấy thông tin kích thước của viewport
import React, { useEffect, useState } from "react";

const useViewPort = () => {
  // window.innerWidth trả về chiều rộng của viewport
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return { width };
};

export default useViewPort;
