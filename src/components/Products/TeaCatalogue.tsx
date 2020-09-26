import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import ProductsCatalogue from "../common/ProductsCatalogue";

function TeaCatalogue() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const { data: teaData } = await axios.get("http://localhost:3000/tea");
      setData([...teaData]);
      setLoading(false);
    };
    fetchData();
  }, []);
  return (
    <div>
      {loading ? (
        <div className="loading">
          <h1>Still Loading</h1>
        </div>
      ) : (
        <ProductsCatalogue data={data} />
      )}
    </div>
  );
}
export default TeaCatalogue;
