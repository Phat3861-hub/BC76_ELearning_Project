import React, { useEffect, useMemo, useState } from "react";
import { useDebounce } from "use-debounce";
import "./HeaderTemplate.scss";
import DropdownHeader from "../../../../components/Dropdown/DropdownHeader";
import { KhoaHocService } from "../../../../services/khoaHoc.service";
import InputSearch from "../../../../components/Input/InputSearch";
import { Link, useNavigate, useLocation, NavLink } from "react-router-dom";
import { Avatar, Dropdown, message } from "antd";
import { pathDefault } from "../../../../common/path";
import {
  ButtonGhost,
  ButtonOutline,
} from "../../../../components/Button/buttonCustom";
import ReponsiveMenu from "./ReponsiveMenu";
import logo from "/img/logo.png";
import { UserOutlined } from "@ant-design/icons";

const defaultImage = "/img/logo-title.png";

const HeaderTemplate = () => {
  const dataUser = JSON.parse(localStorage.getItem("userInfo"));
  const [listDanhMucKhoaHoc, setListDanhMucKhoaHoc] = useState([]);
  const [openHambur, setOpenHambur] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);
  const [listSearch, setListSearch] = useState([]);
  const [key, setKey] = useState("");
  const [value] = useDebounce(key, 1000);

  const navigate = useNavigate();
  const location = useLocation();
  const handleImageError = (e) => {
    e.target.src = defaultImage; // Set default image if the original one fails to load
  };

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

  // Chuyển đổi danh sách các danh mục khóa học thành các item cho Dropdown
  const itemListDanhMucKhoaHoc = useMemo(() => {
    return listDanhMucKhoaHoc.map((item) => ({
      key: item.maDanhMuc,
      label: (
        <NavLink
          to={`/list-course-by-category/category?maDanhMuc=${item.maDanhMuc}`}
        >
          {item.tenDanhMuc}
        </NavLink>
      ), // Ten danh muc
    }));
  }, [listDanhMucKhoaHoc]);

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

  // Lấy danh mục khóa học khi component lần đầu render
  useEffect(() => {
    KhoaHocService.getDanhMucKhoaHoc()
      .then((res) => {
        setListDanhMucKhoaHoc(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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

  const [shrink, setShrink] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShrink(true);
      } else {
        setShrink(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={`bg-black sticky top-0 z-50 ${
          shrink ? "py-3" : "py-5"
        } transition-all duration-300`}
      >
        <div className="container flex justify-between items-center ">
          <div className="flex items-center space-x-10">
            <NavLink to={"/"} className="mr-5">
              <img className="max-h-10 sm:max-h-14" src={logo} alt="Logo" />
            </NavLink>
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
                className="hidden xl:block 2xl:w-96"
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
          </div>
          <div className="flex items-center justify-between">
            <div className="hidden xl:block">
              <ul className="flex items-center text-white text-xs">
                <li>
                  <DropdownHeader
                    buttonContent="Danh mục khóa học"
                    items={itemListDanhMucKhoaHoc}
                  />
                </li>
              </ul>
            </div>
            {!dataUser ? (
              <div className="inline">
                <ButtonGhost
                  onClick={() => navigate(pathDefault.signIn)}
                  content={"Đăng nhập"}
                />
                <ButtonOutline
                  onClick={() => navigate(pathDefault.signUp)}
                  content={"Đăng ký"}
                />
              </div>
            ) : (
              <Dropdown
                menu={{
                  items: [
                    {
                      key: "userInfo",
                      label: (
                        <div
                          onClick={() => navigate(pathDefault.userInfo)}
                          className="py-2 px-4 cursor-pointer hover:bg-gray-100"
                        >
                          <h1 className="font-semibold text-base">Info</h1>
                        </div>
                      ),
                    },
                    {
                      key: "pageAdmin",
                      label: (
                        <div
                          onClick={() => navigate(pathDefault.admin)}
                          className={`py-2 px-4 cursor-pointer hover:bg-gray-100 ${
                            dataUser.maLoaiNguoiDung == "GV" ? `` : `hidden`
                          }`}
                        >
                          <h1 className="font-semibold text-base">Admin</h1>
                        </div>
                      ),
                    },
                    {
                      key: "signOut",
                      label: (
                        <div
                          onClick={() => {
                            // Xóa thông tin người dùng khỏi localStorage
                            localStorage.removeItem("userInfo");
                            message.success("Đăng xuất thành công");
                            setTimeout(() => {
                              navigate(pathDefault.homePage);
                              window.location.reload();
                            }, 1500);
                          }}
                          className="py-2 px-4 cursor-pointer hover:bg-gray-100"
                        >
                          <h1 className="font-semibold text-base">Đăng xuất</h1>
                        </div>
                      ),
                    },
                  ],
                }}
              >
                <Avatar size={50} className="bg-white">
                  <h1 className="text-2xl text-black uppercase">
                    {dataUser.hoTen.charAt(0)}
                  </h1>
                </Avatar>
              </Dropdown>
            )}

            <div className="xl:hidden ml-5 text-white text-3xl">
              <button onClick={() => setOpenHambur(!openHambur)}>
                <i className="fa-solid fa-bars"></i>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <ReponsiveMenu openHambur={openHambur} items={itemListDanhMucKhoaHoc} />
    </>
  );
};

export default HeaderTemplate;
