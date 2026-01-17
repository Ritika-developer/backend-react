import { useEffect, useState } from "react";
import { CheckoutService } from "../services/CheckoutService";
import "../styles/checkout.css";

export default function OrdersPage() {
  const [orders, setOrders] = useState([]);

  const loadOrders = async () => {
    try {
      const res = await CheckoutService.getOrders();
      setOrders(res.data);
    } catch (err) {
      console.error("LOAD ORDERS ERROR", err);
    }
  };

  useEffect(() => {
    loadOrders();
  }, []);

  if (orders.length === 0) {
    return <h2 className="empty">📦 No orders yet</h2>;
  }

  return (
    <div className="checkout-container">
      <h2>My Orders</h2>

      {orders.map(o => (
        <div key={o.id} className="order-card">
          <p><b>Order ID:</b> {o.id}</p>
          <p><b>Product ID:</b> {o.productId}</p>
          <p><b>Quantity:</b> {o.quantity}</p>
          <p><b>Total Price:</b> ₹{o.price}</p>
          <p className="status">{o.orderStatus}</p>
        </div>
      ))}
    </div>
  );
}
