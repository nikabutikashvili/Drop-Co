import * as React from "react";
import FetchProducts from "../../../shared/FetchProdutcs";

const TeaCatalogue: React.FC = () => {
  return <FetchProducts productType="tea" />;
};
export default TeaCatalogue;
