import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";
import { ToastContainer, toast } from "react-toastify";
import axios from "../../utils/axios";
import { Skeleton } from "antd";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [load, setLoad] = useState(false);

  const navigate = useNavigate();

  const getProductFromApi = async () => {
    try {
      setLoad(true);
      const response = await axios.get("/products");
      setProducts(response.data);
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
        <div
          className="loader-div"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "20px",
          }}
        >
          {[...Array(12)].map((_, index) => (
            <div key={index} className="product-card">
              <Skeleton.Image style={{ width: 150, height: 200 }} active />
              <Skeleton active paragraph={{ rows: 2 }} />
            </div>
          ))}
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
              <p className="description">{item.description}</p>
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
