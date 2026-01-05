
import "../styles/cart.css";

const cartItems = [
  { id: 1, name: "Banarasi Silk Saree", price: 12999 },
  { id: 2, name: "Kanjeevaram Saree", price: 15499 },
];

export default function Cart() {
  const total = cartItems.reduce((sum, i) => sum + i.price, 0);

  return (
    <>
     
      <div className="cart-page">
        <h2>Your Cart</h2>

        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <span>{item.name}</span>
            <span>₹{item.price}</span>
          </div>
        ))}

        <div className="cart-total">
          <p>Total: <b>₹{total}</b></p>
          <button>Proceed to Checkout</button>
        </div>
      </div>
       
      
    </>
  );
}
