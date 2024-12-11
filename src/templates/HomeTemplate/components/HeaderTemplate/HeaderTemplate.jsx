import React, { useEffect, useMemo, useState } from "react";
import { useDebounce } from "use-debounce";
import "./HeaderTemplate.scss";
import DropdownHeader from "../../../../components/Dropdown/DropdownHeader";
import { KhoaHocService } from "../../../../services/khoaHoc.service";
import InputSearch from "../../../../components/Input/InputSearch";
import { Link, useNavigate, useLocation, NavLink } from "react-router-dom";
import { Dropdown } from "antd";
import { pathDefault } from "../../../../common/path";
import {
  ButtonGhost,
  ButtonOutline,
} from "../../../../components/Button/buttonCustom";
import ReponsiveMenu from "./ReponsiveMenu";
import logo from "/img/logo.png";

const HeaderTemplate = () => {
  const [listDanhMucKhoaHoc, setListDanhMucKhoaHoc] = useState([]);
  const [openHambur, setOpenHambur] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);
  const [listSearch, setListSearch] = useState([]);
  const [key, setKey] = useState("");
  const [value] = useDebounce(key, 1000); // Debounce key input to avoid excessive API calls

  const navigate = useNavigate();

  // Hàm xử lý thay đổi giá trị tìm kiếm (key)
  const handleChangeKey = (event) => {
    setKey(event.target.value);
  };

  // Hàm xử lý khi người dùng gửi form tìm kiếm
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (key.trim()) {
      navigate(`#`); // Điều hướng (trong trường hợp này là không đi đâu cả)
      setOpenDropdown(false); // Đóng dropdown khi tìm kiếm
    }
  };

  // Chuyển đổi danh sách các danh mục khóa học thành các item cho Dropdown
  const itemListDanhMucKhoaHoc = useMemo(() => {
    return listDanhMucKhoaHoc.map((item) => ({
      key: item.maDanhMuc,
      label: (
        <>
          <NavLink
            to={`/list-course-by-category/category?maDanhMuc=${item.maDanhMuc}`}
          >
            {item.tenDanhMuc}
          </NavLink>
        </>
      ), // Ten danh muc
    }));
  }, [listDanhMucKhoaHoc]);

  // Chuyển đổi danh sách khóa học tìm kiếm thành các item hiển thị trong dropdown
  const itemListSearch = useMemo(() => {
    return listSearch.slice(0, 4).map((item) => ({
      key: item.id,
      label: (
        <NavLink to={`#`} className="flex items-center">
          <img src={item.hinhAnh} className="w-16 h-16 me-3" alt="" />
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
        console.log(res.data);
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
          setListSearch(res.data);
          setOpenDropdown(true);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      // Nếu giá trị tìm kiếm trống, đóng dropdown và reset danh sách tìm kiếm
      setListSearch([]);
      setOpenDropdown(false);
    }
  }, [value]);

  return (
    <>
      <nav className="bg-black">
        <div className="container flex justify-between  items-center py-5">
          <div className="flex items-center">
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
                onSubmit={handleSearchSubmit}
                className="hidden xl:block 2xl:w-96"
              >
                <InputSearch
                  handleClick={() => setOpenDropdown(true)}
                  handleChange={handleChangeKey}
                  value={key}
                  placeholder="Tìm kiếm khóa học ...... "
                />
              </form>
            </Dropdown>
          </div>
          <div className="flex items-center">
            <div className="hidden xl:block">
              <ul className="flex items-center  text-white text-xs">
                <li>
                  <DropdownHeader
                    buttonContent="Danh mục khóa học"
                    items={itemListDanhMucKhoaHoc}
                  />
                </li>
                <li>
                  <DropdownHeader
                    buttonContent="Danh mục khóa học"
                    items={itemListDanhMucKhoaHoc}
                  />
                </li>
                <li>
                  <DropdownHeader
                    buttonContent="Danh mục khóa học"
                    items={itemListDanhMucKhoaHoc}
                  />
                </li>
              </ul>
            </div>
            <div className="inline">
              <ButtonGhost
                onClick={() => {
                  navigate(pathDefault.signIn);
                }}
                content={"Sign In"}
              />
              <ButtonOutline
                onClick={() => {
                  navigate(pathDefault.signUp);
                }}
                content={"Join"}
              />
            </div>
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
