import React, { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import DropdownHeader from "../../../../components/Dropdown/DropdownHeader";
import { Dropdown } from "antd";
import { NavLink, useNavigate } from "react-router-dom";
import { useDebounce } from "use-debounce";
import InputSearch from "../../../../components/Input/InputSearch";
import { KhoaHocService } from "../../../../services/khoaHoc.service";
const defaultImage = "/img/logo-title.png";
import "./ReponsiveMenu.scss";
const ReponsiveMenu = ({ openHambur, items }) => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [listSearch, setListSearch] = useState([]);
  const [key, setKey] = useState("");
  const handleImageError = (e) => {
    e.target.src = defaultImage; // Set default image if the original one fails to load
  };
  const navigate = useNavigate();
  const [value] = useDebounce(key, 1000);
  // Hàm xử lý thay đổi giá trị tìm kiếm (key)
  const handleChangeKey = (event) => {
    setKey(event.target.value);
  };

  // Hàm xử lý khi người dùng gửi form tìm kiếm
  const handleSearchSubmit = () => {
    if (key.trim()) {
      navigate(`/list-course-by-search/search?tenKhoaHoc=${key}&MaNhom=GP01`); // Điều hướng đến trang kết quả tìm kiếm
      setOpenDropdown(false); // Đóng dropdown khi tìm kiếm
    }
  };

  // Chuyển đổi danh sách khóa học tìm kiếm thành các item hiển thị trong dropdown
  const itemListSearch = useMemo(() => {
    return listSearch.slice(0, 4).map((item) => ({
      key: item.id,
      label: (
        <NavLink
          to={`/course-detail/id?maKhoaHoc=${item.maKhoaHoc}`}
          className="flex items-center"
        >
          <img
            onError={handleImageError}
            src={item.hinhAnh}
            className="w-16 h-16 me-3"
            alt=""
          />
          <div>
            <h4>{item.tenKhoaHoc}</h4>
            <p>{item.danhGia}</p>
          </div>
        </NavLink>
      ),
    }));
  }, [listSearch]);

  // Lấy danh sách khóa học khi giá trị tìm kiếm thay đổi
  useEffect(() => {
    if (value) {
      KhoaHocService.getDanhSachKhoaHocTheoTen(value)
        .then((res) => {
          console.log(res.data);
          setListSearch(res.data);
          setOpenDropdown(true);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      setListSearch([]);
      setOpenDropdown(false);
    }
  }, [value]);
  return (
    <AnimatePresence mode="wait">
      {openHambur && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.3 }}
          className="reponsive-menu"
        >
          <div className="text-xl font-bold uppercase bg-black text-white py-10 m-6 rounded-md">
            <ul className="flex flex-col justify-center items-center space-y-5">
              <li>
                <DropdownHeader
                  buttonContent="Danh mục khóa học"
                  items={items}
                />
              </li>
              <Dropdown
                overlayClassName="dropdown-suggest"
                menu={{
                  items: itemListSearch,
                  onMouseLeave: () => {
                    setOpenDropdown(false);
                  },
                }}
                open={openDropdown}
              >
                <form
                  onSubmit={(e) => e.preventDefault()}
                  className=" xl:block 2xl:w-96"
                >
                  <InputSearch
                    onSearch={handleSearchSubmit} // Gọi trực tiếp handleSearchSubmit
                    handleClick={() => setOpenDropdown(true)}
                    handleChange={handleChangeKey}
                    value={key}
                    placeholder="Tìm kiếm khóa học ...... "
                  />
                </form>
              </Dropdown>
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ReponsiveMenu;
