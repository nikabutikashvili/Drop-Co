import React, { useState, SyntheticEvent } from "react";
import Search from "../Products/ProductSearch";
import Boxes from "./ProductBoxes";
import Pagination from "./pagination";
import { paginate } from "../../utils/paginate";
import { useEffect } from "react";

function ProductsCatalogue(props: any) {
  const [searchTerm, setSearchTerm] = useState("");
  const [pageSize, setPageSize] = useState(12);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsArray, setProductsArray] = useState([...props.data]);
  const [searchProduct, setSearchProduct] = useState([]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  function handleChange(event: SyntheticEvent): void {
    setSearchTerm((event.target as HTMLInputElement).value);
  }
  let productsOnPage = paginate(searchProduct, currentPage, pageSize);
  useEffect(() => {
    let list = productsArray.filter((product: any) =>
      product.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
    );
    setSearchProduct(list);
    productsOnPage = paginate(searchProduct, currentPage, pageSize);
  }, [productsArray]);
  // const searchProducts = productsArray.filter((product: any) =>
  //   product.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
  // );
  function lowToHigh() {
    const sorted: Array<number> = productsArray.sort(function (a: any, b: any) {
      if (a.price < b.price) return -1;
      if (a.price > b.price) return 1;
      return 0;
    });
    setProductsArray(sorted);
  }
  function hightoLow() {
    const sorted: Array<number> = productsArray.sort(function (a: any, b: any) {
      if (a.price < b.price) return 1;
      if (a.price > b.price) return -1;
      return 0;
    });
    setProductsArray(sorted);
  }

  return (
    <div>
      <div className="product-filter">
        <button className="btn btn-filter" onClick={lowToHigh}>
          Low to High
        </button>
        <Search onSearch={handleChange} />
        <button className="btn btn-filter" onClick={hightoLow}>
          High to Low
        </button>
      </div>
      <Boxes products={productsOnPage} />
      <Pagination
        itemsCount={searchProduct.length}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
}
export default ProductsCatalogue;
