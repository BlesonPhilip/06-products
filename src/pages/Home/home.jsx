import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";
import { ScaleLoader } from "react-spinners";
import { ToastContainer, toast } from "react-toastify";
import axios from "../../utils/axios";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [load, setLoad] = useState(false);

  const navigate = useNavigate();

  const getProductFromApi = async () => {
    try {
      setLoad(true);
      const response = await axios.get("/products");
      setProducts(response.data);
      // const response = await fetch("https://fakestoreapi.com/products");
      // const data = await response.json();
      // setProducts(data);
    } catch (error) {
      toast.error("Something went wrong", { position: "top-center" });
    } finally {
      setLoad(false);
    }
  };

  const onCardClick = (id) => {
    navigate("/product/" + id);
  };

  useEffect(() => {
    getProductFromApi();
  }, []);

  return (
    <div className="home-container">
      <h2>Your Products</h2>
      <ToastContainer />
      <hr />

      {load ? (
        <div className="loader-div">
          <ScaleLoader color="orange" />
        </div>
      ) : (
        <div className="product-container">
          {products.map((item) => (
            <div
              className="product-card"
              onClick={() => onCardClick(item.id)}
              key={item.id}
            >
              <img src={item.image} alt={item.title} />
              <h3>{item.title}</h3>
              <p>${item.price}</p>
              <p>{item.description}</p>
              <p>{item.category}</p>
              <b style={{ color: "green" }}>{item.rating.rate}</b>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
