import * as React from "react";
import { Link } from "react-router-dom";

interface Props {
  link: string;
  className: string;
  img: string;
  title: string;
  text: string;
}

const ProductBar: React.FC<Props> = ({ link, className, img, title, text }) => {
  return (
    <Link to={link} className={className ? className : ""}>
      <img src={img} />
      <h1>{title}</h1>
      <p>{text}</p>
    </Link>
  );
};

export default ProductBar;
