import * as React from "react";

import Boxes from "../ProductBoxes";
import Pagination from "../Pagination";
import { paginate } from "../../utils/paginate";
import ProductsFilter from "./ProductsFilter";

const ProductsCatalogue = (props: any) => {
  const pageSize = 12;
  const { data } = props;
  const [searchTerm, setSearchTerm] = React.useState("");
  const [currentPage, setCurrentPage] = React.useState(1);
  const [searchProduct, setSearchProduct] = React.useState(data);
  const [productsOnPage, setProductsOnPage] = React.useState(
    paginate(searchProduct, currentPage, pageSize)
  );

  React.useEffect(() => {
    if (searchTerm) {
      let list = data.filter((product: any) =>
        product?.name
          .toLocaleLowerCase()
          .includes(searchTerm.toLocaleLowerCase())
      );
      setSearchProduct(list);
      setProductsOnPage(paginate(searchProduct, currentPage, pageSize));
    }
  }, [data, searchTerm]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleChange = (event: React.SyntheticEvent): void => {
    setSearchTerm((event.target as HTMLInputElement).value);
  };

  const sortByPrice = (ascending: boolean) => {
    const lowestToHighest = searchProduct.sort((a, b) => {
      if (ascending) return a.price - b.price;
      return b.price - a.price;
    });
    setSearchProduct(lowestToHighest);
    setProductsOnPage(paginate(searchProduct, currentPage, pageSize));
  };

  return (
    <div>
      <ProductsFilter
        handleChange={handleChange}
        searchTerm={searchTerm}
        sortByPrice={sortByPrice}
      />
      <Boxes products={productsOnPage} />
      <Pagination
        itemsCount={searchProduct.length}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};
export default ProductsCatalogue;
