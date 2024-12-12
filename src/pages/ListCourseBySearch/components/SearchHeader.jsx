import React from "react";

const SearchHeader = ({ soLuong, search }) => {
  return (
    <div className="pt-9">
      <div className="container ">
        <h1 className="text-4xl capitalize font-bold">
          Tìm thấy {soLuong} kết quả cho {search}
        </h1>
      </div>
    </div>
  );
};

export default SearchHeader;
