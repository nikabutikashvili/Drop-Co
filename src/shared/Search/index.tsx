import * as React from "react";

const Search: React.FC<any> = (props) => {
  return (
    <div className="search-container">
      <input
        type="search"
        onChange={props.onSearch}
        className="search-product form-control"
        placeholder="Search"
        value={props.state}
      />
    </div>
  );
};

export default Search;
