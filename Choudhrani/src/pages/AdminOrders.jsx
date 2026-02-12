import { useEffect, useState } from "react";
import axiosInstance from "../utils/axiosInstance";

export default function AdminOrders() {
  const [orders, setOrders] = useState([]);

  const loadOrders = async () => {
    const res = await axiosInstance.get("/auth/orders/admin/all");
    setOrders(res.data);
  };

  useEffect(() => {
    loadOrders();
  }, []);

  const updateStatus = async (orderId, status) => {
    await axiosInstance.put(`/auth/orders/${orderId}/status`, {
      status
    });
    alert("Order status updated");
    loadOrders();
  };

  return (
    <div style={{ padding: 30 }}>
      <h2>Admin Orders Dashboard</h2>

      <table border="1" width="100%" cellPadding="10">
        <thead>
          <tr>
            <th>Order No</th>
            <th>User</th>
            <th>Status</th>
            <th>Change Status</th>
          </tr>
        </thead>

        <tbody>
          {orders.map(o => (
            <tr key={o.id}>
              <td>{o.orderNumber}</td>
              <td>{o.userId}</td>
              <td>{o.orderStatus}</td>
              <td>
                <select
                  value={o.orderStatus}
                  onChange={(e) =>
                    updateStatus(o.id, e.target.value)
                  }
                >
                  <option>CONFIRMED</option>
                  <option>PACKED</option>
                  <option>SHIPPED</option>
                  <option>DELIVERED</option>
                  <option>CANCELLED</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}