// import { useEffect, useState } from "react";
// import { CheckoutService } from "../services/CheckoutService";
// import "../styles/checkout.css";

// export default function OrdersPage() {
//   const [orders, setOrders] = useState([]);

//   const loadOrders = async () => {
//     try {
//       const res = await CheckoutService.getOrders();
//       setOrders(res.data);
//     } catch (err) {
//       console.error("LOAD ORDERS ERROR", err);
//     }
//   };

//   useEffect(() => {
//     loadOrders();
//   }, []);

//   if (orders.length === 0) {
//     return <h2 className="empty">📦 No orders yet</h2>;
//   }

//   return (
//     <div className="checkout-container">
//       <h2>My Orders</h2>

//       {orders.map(o => (
//         <div key={o.id} className="order-card">
//           <p><b>Order ID:</b> {o.id}</p>
//           <p><b>Product ID:</b> {o.productId}</p>
//           <p><b>Quantity:</b> {o.quantity}</p>
//           <p><b>Total Price:</b> ₹{o.price}</p>
//           <p className="status">{o.orderStatus}</p>
//         </div>
//       ))}
//     </div>
//   );
// }



















// image 
import { useEffect, useState } from "react";
import axiosInstance from "../utils/axiosInstance";
import { useNavigate } from "react-router-dom";

export default function MyOrders() {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));

    axiosInstance
      .get(`/auth/orders/user/${user.id}`)
      .then((res) => {
         console.log("ORDERS API RESPONSE 👉", res.data);
        setOrders(res.data);
      })
      .catch((err) => {
        console.error("Orders load error", err);
      });
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>My Orders</h2>

      {orders.map((order) => (
        <div
          key={order.id}
          style={{
            border: "1px solid #ddd",
            borderRadius: 8,
            marginBottom: 20,
            padding: 15
          }}
        >
          <h4>Order #{order.orderNumber}</h4>
          <p>
            Status: <b>{order.orderStatus}</b>
          </p>

          {/* PRODUCTS */}
  {order.items?.map((item, i) => (
  <div
    key={i}
    style={{
      display: "flex",
      gap: 15,
      marginTop: 10,
      borderTop: "1px solid #eee",
      paddingTop: 10
    }}
  >
    <img
      src={item.productImage}
      alt={item.productName}
      style={{
        width: 80,
        height: 80,
        objectFit: "cover",
        borderRadius: 6
      }}
    />

    <div>
      <h5>{item.productName}</h5>
      <p>Qty: {item.quantity}</p>
      <p>₹{item.price}</p>
    </div>
  </div>
))}

          {/* <button
            style={{ marginTop: 10 }}
            onClick={() => navigate(`/track-order/${order.orderNumber}`)}
          >
            Track Order
          </button> */}
        </div>
      ))}
    </div>
  );
}