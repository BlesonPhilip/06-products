import "./details.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Details = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  const fetchProductById = async () => {
    const response = await fetch("https://fakestoreapi.com/products/" + id);
    const data = await response.json();
    setProduct(data);
  };
  useEffect(() => {
    fetchProductById();
  }, []);
  return (
    <div className="details-page">
      <h2>Product Details</h2>
      <hr />
      <h2>{product.title}</h2>
      <img src={product.image} alt="" />
      <p>{product.description}</p>
      <p>${product.price}</p>
      <b style={{ color: "green" }}>{product.rating?.rate}</b>
    </div>
  );
};

export default Details;
