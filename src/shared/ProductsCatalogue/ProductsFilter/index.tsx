import * as React from "react";

import Search from "../../Search";

interface Props {
  handleChange: (event: React.SyntheticEvent) => void;
  searchTerm: string;
  sortByPrice: (arg: boolean) => void;
}

const ProductsFilter: React.FC<Props> = ({
  handleChange,
  searchTerm,
  sortByPrice,
}) => {
  return (
    <div className="product-filter">
      <button className="btn btn-filter" onClick={() => sortByPrice(true)}>
        Low to High
      </button>
      <Search state={searchTerm} onSearch={handleChange} />
      <button className="btn btn-filter" onClick={() => sortByPrice(false)}>
        High to Low
      </button>
    </div>
  );
};

export default ProductsFilter;
