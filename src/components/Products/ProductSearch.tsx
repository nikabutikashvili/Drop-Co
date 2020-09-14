import React from "react";
function Search(props: any) {
  return (
    <div className="search-container">
      <input
        type="search"
        onChange={props.onSearch}
        className="search-product form-control"
        placeholder="Search"
      />
    </div>
  );
}

export default Search;
