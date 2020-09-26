import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductsCatalogue from "../common/ProductsCatalogue";

function CoffeeCatalogue() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    const fetchData = async () => {
      const { data: coffeeData } = await axios.get(
        "http://localhost:3000/coffee"
      );
      setData([...coffeeData]);
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

export default CoffeeCatalogue;
