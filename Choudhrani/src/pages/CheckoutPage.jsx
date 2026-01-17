import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CheckoutService } from "../services/CheckoutService";
import "../styles/checkout.css";

export default function CheckoutPage() {
  const [loading, setLoading] = useState(false);
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  const handleCheckout = async () => {
    try {
      setLoading(true);
      const res = await CheckoutService.checkout();
      setOrders(res.data);
    } catch (err) {
      console.error("CHECKOUT ERROR", err);
      alert("Checkout failed");
    } finally {
      setLoading(false);
    }
  };

  if (orders.length > 0) {
    return (
      <div className="checkout-container">
        <h2>✅ Order Confirmed</h2>

        {orders.map(o => (
          <div key={o.id} className="order-card">
            <p><b>Product ID:</b> {o.productId}</p>
            <p><b>Quantity:</b> {o.quantity}</p>
            <p><b>Price:</b> ₹{o.price}</p>
            <p className="status">{o.orderStatus}</p>
          </div>
        ))}

        <button onClick={() => navigate("/orders")}>
          View My Orders
        </button>
      </div>
    );
  }

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>

      <button
        className="checkout-btn"
        disabled={loading}
        onClick={handleCheckout}
      >
        {loading ? "Processing..." : "Place Order"}
      </button>
    </div>
  );
}
