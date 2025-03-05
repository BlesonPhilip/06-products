import { useState, useEffect } from "react";
import "./home.css";

const Home = () => {
  const [products, setProducts] = useState([]);

  const getProductFromApi = async () => {
    // try {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    setProducts(data);
    // } catch (error) {
    //   console.error("Error fetching products:", error);
    // }
  };

  useEffect(() => {
    getProductFromApi();
  }, []);

  return (
    <div className="home-container">
      <h2>Your Products</h2>
      <hr />
      <div className="product-container">
        {products.map((item) => (
          <div className="product-card" key={item.id}>
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
            <p>${item.price}</p>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
