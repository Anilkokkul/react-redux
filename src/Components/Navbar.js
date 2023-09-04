import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useState } from "react";
import cart from "./cart.svg";

const Navbar = () => {
  const [home, setHome] = useState(false);
  const cartItems = useSelector((state) => state.cartItems);

  const handleHome = () => {
    setHome(home);
    setHome(!home);
  };

  return (
    <div className="Navbar">
      {window.location.href?.includes("/cart") ? (
        <div className="home">
          <Link to={"/"} onClick={handleHome}>
            Back to Home
          </Link>
        </div>
      ) : (
        <div className="shop">My Shoppig Cart</div>
      )}

      <div className="cart">
        <img src={cart} alt="cart"></img>
        <Link to={"/cart"} onClick={() => setHome(!home)}>
          Cart <span>{cartItems.length}</span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
