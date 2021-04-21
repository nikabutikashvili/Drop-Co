import React, { useEffect } from "react";
import ProductsCatalogue from "../../../shared/ProductsCatalogue";
import axios from "axios";
import { useState } from "react";
function SnacksCatalogue() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const { data: snacksData } = await axios.get(
        "http://localhost:4000/snacks"
      );
      setData([...snacksData]);
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
export default SnacksCatalogue;
