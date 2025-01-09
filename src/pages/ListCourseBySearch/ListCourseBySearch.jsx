import React, { useEffect, useState } from "react";
import SearchHeader from "./components/SearchHeader";
import ListSearch from "./components/ListSearch";
import { useLocation } from "react-router-dom";
import { KhoaHocService } from "../../services/khoaHoc.service";

const ListCourseBySearch = () => {
  const [ListCourseBySearch, setListCourseBySearch] = useState([]);
  const [openDropdown, setOpenDropdown] = useState(false);

  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const name = query.get("tenKhoaHoc");
  useEffect(() => {
    if (name) {
      KhoaHocService.getDanhSachKhoaHocTheoTen(name)
        .then((res) => {
          console.log(res.data);
          setListCourseBySearch(res.data);
          setOpenDropdown(true);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      setListCourseBySearch([]);
      setOpenDropdown(false);
    }
  }, [name]);
  return (
    <div className="pt-24">
      <SearchHeader soLuong={ListCourseBySearch.length} search={name} />
      <ListSearch ListSearch={ListCourseBySearch} />
    </div>
  );
};

export default ListCourseBySearch;
