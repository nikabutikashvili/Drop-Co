import React, { useState, SyntheticEvent } from "react";
import Search from "../Products/ProductSearch";
import Boxes from "./ProductBoxes";

function ProductsCatalogue(props: any) {
  const [searchTerm, setSearchTerm] = useState("");
  const [inputValueEmpty, setInputValueEmpty] = useState(true);
  function handleChange(event: SyntheticEvent): void {
    setSearchTerm((event.target as HTMLInputElement).value);
    setInputValueEmpty(false);
  }
  const searchProducts = props.data.coffee.filter((product: any) =>
    product.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
  );
  return (
    <div>
      <Search onSearch={handleChange} />
      {/* <ul>
        {searchProducts.map((item: any) => {
          if (!inputValueEmpty) return <li>{item.name}</li>;
        })}
      </ul> */}
      <Boxes products={searchProducts} />
    </div>
  );
}
export default ProductsCatalogue;
