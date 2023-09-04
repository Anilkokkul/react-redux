import React from "react";
import { useSelector, useDispatch } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((state) => state.cartItems);
  const dispatch = useDispatch();
  const updateQuantity = (item, quantity) => {
    dispatch({ type: "UPDATE_QUANTITY", payload: { id: item.id, quantity } });
  };

  const totalAmount = cartItems.reduce((a, c) => a + c.price * c.quantity, 0);

  return (
    <>
      {cartItems.length <= 0 ? (
        <h2>Your Cart is Empty</h2>
      ) : (
        <div className="table-container">
          <h2>Shopping Cart</h2>
          <table className="table">
            <thead>
              <tr>
                <th>Item</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => {
                return (
                  <tr key={item.id}>
                    <td>{item.title}</td>
                    <td>$ {item.price}</td>
                    <td>
                      <button
                        className="decrement"
                        onClick={() =>
                          updateQuantity(
                            item,
                            item.quantity > 1
                              ? item.quantity - 1
                              : item.quantity
                          )
                        }
                      >
                        -
                      </button>
                      {item.quantity}
                      <button
                        className="increment"
                        onClick={() => updateQuantity(item, item.quantity + 1)}
                      >
                        +
                      </button>
                    </td>
                    <td>$ {item.price * item.quantity}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <h3>Total Amount : $ {totalAmount} </h3>
        </div>
      )}
    </>
  );
};

export default Cart;
