import { useState } from "react";
import "./More.css";
import { Link } from 'react-router-dom';




function More() {
  const [counter, setCounter] = useState(1);
  const incrementHandler = () => {
    if (counter < 10)
      setCounter((val) => val + 1);
  }
  const decrementHandler = () => {
    if (counter > 1)
      setCounter((val) => val - 1);
  }
  return (
    <>
      <div class="cart-page">
        <div class="cart-details">
          <h1></h1>
          <table>
            <thead>
              <tr>
                <th>Image</th>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Sub Total</th>
                <th>Remove Product</th>
                <th>Purchase Product</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><img src="https://via.placeholder.com/110" alt="Product Image" /></td>
                <td>Beardo Godfather</td>
                <td>₹ 5.00</td>
                <td>
                  <div class="quantity-form">
                    <button onClick={decrementHandler} class="quantity-button decrement">-</button>
                    <div className="form-control text-between">{counter} </div>
                    <button onClick={incrementHandler} class="quantity-button increment" >+</button>
                  </div>
                </td>
                <td>₹ 5.00</td>
                <td><Link to="/" class="remove-button btn">✖ Remove</Link></td>
                <td><Link to="/checkout" class="btn btn-primary">✔ Purchase</Link></td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>

    </>
  );
}

export default More;
