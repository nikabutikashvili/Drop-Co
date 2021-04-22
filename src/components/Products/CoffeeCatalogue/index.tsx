import * as React from "react";
import FetchProducts from "../../../shared/FetchProdutcs";

const CoffeeCatalogue: React.FC = () => {
  return <FetchProducts productType="coffee" />;
};

export default CoffeeCatalogue;
