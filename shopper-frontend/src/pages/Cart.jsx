// pages/Cart.jsx
export default function Cart() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  return (
    <div>
      <h2>Your Cart</h2>
      {cart.map(item => (
        <p>{item.name} - ₹{item.price}</p>
      ))}
    </div>
  );
}
