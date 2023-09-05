import React, { useState } from "react";
import { useEffect } from "react";
import ProductCard from "../Components/ProductCard";
import { useDispatch, useSelector } from "react-redux";

function Home() {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cartItems);

  useEffect(() => {
    fetch("../Products/products.json")
      .then((response) => response.json())
      .then((result) => setProducts(result.products))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    let ids = JSON.parse(
      localStorage.getItem("productIds")
        ? localStorage.getItem("productIds")
        : []
    );
    console.log(ids);
    let newIds = ids.filter((id) => {
      return cartItems.some((key) => key.id === id);
    });
    console.log(ids);
    localStorage.setItem("productIds", JSON.stringify(newIds));
  });

  const handleAddToCart = (data) => {
    let ids = JSON.parse(
      localStorage.getItem("productIds")
        ? localStorage.getItem("productIds")
        : "[]"
    );
    ids.push(data.id);
    dispatch({ type: "ADD_TO_CART", payload: data });

    localStorage.setItem("productIds", JSON.stringify(ids));
  };

  const handleRemoveItem = (product) => {
    let ids = JSON.parse(localStorage.getItem("productIds"));
    let newIds = ids.filter((id) => id !== product.id);
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: { id: product.id },
    });
    localStorage.setItem("productIds", JSON.stringify(newIds));
  };
  return (
    <>
      <div className="productsContainer">
        {products &&
          products.map((product, index) => {
            return (
              <div key={product.id}>
                <ProductCard
                  product={product}
                  handleAddToCart={handleAddToCart}
                  handleRemoveItem={handleRemoveItem}
                  added={JSON.parse(
                    localStorage.getItem("productIds")
                  )?.includes(product.id)}
                />
              </div>
            );
          })}
      </div>
    </>
  );
}

export default Home;
