import "./details.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ScaleLoader } from "react-spinners";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

const Details = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [load, setLoad] = useState(false);

  const fetchProductById = async () => {
    try {
      setLoad(true);
      const response = await axios.get(
        `https://fakestoreapi.com/products/${id}`
      );
      // if (!response.ok) throw new Error("Failed to fetch product");
      // const data = await response.json();
      setProduct(response.data);
    } catch (error) {
      toast.error("Error fetching product details");
    } finally {
      setLoad(false);
    }
  };

  useEffect(() => {
    fetchProductById();
  }, [id]);

  return (
    <div className="details-page">
      <h2>Product Details</h2>
      <hr />
      {load ? (
        <ScaleLoader color="orange" />
      ) : (
        <>
          <h2>{product.title}</h2>
          <img src={product.image} alt={product.title} />
          <p>{product.description}</p>
          <p>${product.price}</p>
          <b style={{ color: "green" }}>{product.rating?.rate}</b>
        </>
      )}
      <ToastContainer />
    </div>
  );
};

export default Details;
// In the Details component, we use the useParams hook to get the id from the URL. We use this id to fetch the product details from the API. We use the useEffect hook to fetch the product details when the component mounts. We display a loading spinner while fetching the product details. Once the product details are fetched, we display the product details. We also display a toast notification if there is an error fetching the product details.
