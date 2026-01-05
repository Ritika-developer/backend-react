import "../styles/orders.css";

const orders = [
  { id: "ORD123", item: "Banarasi Saree", status: "Delivered" },
  { id: "ORD124", item: "Bridal Saree", status: "Shipped" },
];

export default function Orders() {
  return (
    <>
      
      <div className="orders-page">
        <h2>My Orders</h2>

        {orders.map((o) => (
          <div key={o.id} className="order-card">
            <p><b>Order ID:</b> {o.id}</p>
            <p><b>Item:</b> {o.item}</p>
            <p>
              <b>Status:</b>{" "}
              <span className="status">{o.status}</span>
            </p>
          </div>
        ))}
      </div>
       
    </>
  );
}
