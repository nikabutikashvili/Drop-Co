import * as React from "react";
import axios from "axios";
import ProductsCatalogue from "../ProductsCatalogue";
import shuffleArray from "../../utils/shuffleArray";

interface Props {
  productType?: string;
}

interface fetchedData {
  name: string;
  about: string;
  img: string;
  price: number;
  calories: number;
  number: number;
  id: number;
  reviews: Array<string>;
}

const CoffeeCatalogue: React.FC<Props> = ({ productType }) => {
  const [data, setData] = React.useState<Array<fetchedData>>([]);
  const [loading, setLoading] = React.useState<boolean>(true);
  React.useEffect(() => {
    const fetchData = async () => {
      if (productType) {
        const { data: fetchedData } = await axios.get(
          `https://drop-coffee.herokuapp.com/api/${productType}`
        );
        setData([...fetchedData]);
        setLoading(false);
      } else {
        const { data: coffee } = await axios.get(
          `https://drop-coffee.herokuapp.com/api/coffee`
        );
        const { data: tea } = await axios.get(
          `https://drop-coffee.herokuapp.com/api/tea`
        );
        const { data: snacks } = await axios.get(
          `https://drop-coffee.herokuapp.com/api/snacks`
        );
        const newArr = [...coffee, ...tea, ...snacks];
        const shuffledArray = shuffleArray(newArr);
        setData([...shuffledArray]);
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      {loading ? (
        <div className="loading">
          <h1>Loading</h1>
        </div>
      ) : (
        <ProductsCatalogue data={data} />
      )}
    </div>
  );
};

export default CoffeeCatalogue;
