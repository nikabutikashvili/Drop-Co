import React, { useState, SyntheticEvent } from "react";
import Search from "../Products/ProductSearch";
import Boxes from "./ProductBoxes";
import Pagination from "./pagination";
import { paginate } from "../../utils/paginate";

function ProductsCatalogue(props: any) {
  const [searchTerm, setSearchTerm] = useState("");
  const [inputValueEmpty, setInputValueEmpty] = useState(true);
  const [pageSize, setPageSize] = useState(12);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsArray, setProductsArray] = useState([...props.data.coffee]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  function handleChange(event: SyntheticEvent): void {
    setSearchTerm((event.target as HTMLInputElement).value);
    setInputValueEmpty(false);
  }
  const searchProducts = productsArray.filter((product: any) =>
    product.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
  );
  function highToLow() {
    const sorted: Array<number> = productsArray.sort(function (a: any, b: any) {
      if (a.price < b.price) return -1;
      if (a.price > b.price) return 1;
      return 0;
    });
    setProductsArray(sorted);
    console.log(sorted);
  }
  const productsOnPage = paginate(searchProducts, currentPage, pageSize);
  return (
    <div>
      <Search onSearch={handleChange} />
      {/* <ul>
        {searchProducts.map((item: any) => {
          if (!inputValueEmpty) return <li>{item.name}</li>;
        })}
      </ul> */}
      <Boxes products={productsOnPage} />
      <Pagination
        itemsCount={searchProducts.length}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
}
export default ProductsCatalogue;
