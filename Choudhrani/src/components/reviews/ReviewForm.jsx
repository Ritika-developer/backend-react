








// import { useEffect, useState } from "react";
// import StarRating from "./StarRating";
// import { ReviewService } from "../../services/reviewService";

// export default function ReviewForm({ productId }) {

//   const [rating, setRating] = useState(0);
//   const [review, setReview] = useState("");
//   const [reviews, setReviews] = useState([]);
//   const [summary, setSummary] = useState({});

//   // ================= LOAD REVIEWS =================
//   const loadReviews = async () => {
//     try {
//       const res = await ReviewService.getReviews(productId);

//       // 🔥 FIX HERE (important)
//       setReviews(Array.isArray(res.data) ? res.data : []);

//       const sum = await ReviewService.getSummary(productId);
//       setSummary(sum.data || {});
//     } catch (err) {
//       console.error(err);
//       setReviews([]);
//       setSummary({});
//     }
//   };

//   useEffect(() => {
//     loadReviews();
//   }, [productId]);

//   // ================= SUBMIT =================
//   const submitReview = async () => {

//     if (!rating) {
//       alert("Select rating first ⭐");
//       return;
//     }

//     const userId = localStorage.getItem("userId");

//     if (!userId) {
//       alert("Please login first ❌");
//       return;
//     }

//     await ReviewService.addReview(productId, userId, {
//       rating,
//       review
//     });

//     setRating(0);
//     setReview("");

//     loadReviews();
//   };

//   return (
//     <div style={{ maxWidth: "500px", margin: "auto" }}>

//       <h2>⭐ Reviews</h2>

//       <StarRating rating={rating} setRating={setRating} />

//       <textarea
//         placeholder="Write your review..."
//         value={review}
//         onChange={(e) => setReview(e.target.value)}
//         style={{ width: "100%", height: "80px", marginTop: "10px" }}
//       />

//       <button onClick={submitReview}>
//         Submit Review
//       </button>

//       <hr />

//       <h3>
//         Avg: {summary.averageRating || 0} ⭐ | Total: {summary.totalReviews || 0}
//       </h3>

//       {/* 🔥 SAFE MAP */}
//       {Array.isArray(reviews) && reviews.map((r) => (
//         <div key={r.id} style={{ borderBottom: "1px solid #ddd", padding: "8px" }}>
//           <b>{"⭐".repeat(r.rating)}</b>
//           <p>{r.review}</p>
//         </div>
//       ))}

//       {reviews.length === 0 && (
//         <p style={{ textAlign: "center", color: "gray" }}>
//           No reviews yet
//         </p>
//       )}

//     </div>
//   );
// }





































import { useEffect, useState } from "react";
import StarRating from "./StarRating";
import { ReviewService } from "../../services/reviewService";

export default function ReviewForm({ productId }) {

  const userId = localStorage.getItem("userId");

  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");
  const [reviews, setReviews] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(false);

  // ================= LOAD =================
  const loadReviews = async () => {
    try {
      const res = await ReviewService.getReviews(productId);
      setReviews(Array.isArray(res.data) ? res.data : []);
    } catch {
      setReviews([]);
    }
  };

  // useEffect(() => {
  //   loadReviews();
  // }, [productId]);

  

  // ================= SUBMIT =================
  const submitReview = async () => {

    if (!rating) return alert("Select rating first ⭐");
    if (!userId) return alert("Login first ❌");

    setLoading(true);

    const data = { rating, review };

    try {
      if (editingId) {
        await ReviewService.updateReview(productId, editingId, data);
        setEditingId(null);
      } else {
        await ReviewService.addReview(productId, userId, data);
      }

      setRating(0);
      setReview("");
      loadReviews();

    } finally {
      setLoading(false);
    }
  };

  // ================= DELETE =================
  const deleteReview = async (id) => {
    await ReviewService.deleteReview(productId, id);
    loadReviews();
  };

  // ================= EDIT =================
  const editReview = (r) => {
    setRating(r.rating);
    setReview(r.review);
    setEditingId(r.id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div style={{
      maxWidth: 600,
      margin: "30px auto",
      background: "#fff",
      padding: 20,
      borderRadius: 8,
      boxShadow: "0 2px 10px #ddd"
    }}>

      <h2>⭐ Ratings & Reviews</h2>

      {/* ===== FORM ===== */}
      <StarRating rating={rating} setRating={setRating} />

      <textarea
        placeholder="Write your review..."
        value={review}
        onChange={(e) => setReview(e.target.value)}
        style={{
          width: "100%",
          height: 80,
          marginTop: 10,
          padding: 8
        }}
      />

      <button
        onClick={submitReview}
        disabled={loading}
        style={{
          marginTop: 10,
          padding: "8px 16px",
          background: "#2874f0",
          color: "#fff",
          border: "none",
          borderRadius: 4
        }}
      >
        {loading ? "Saving..." : editingId ? "Update Review" : "Submit Review"}
      </button>

      <hr style={{ margin: "20px 0" }} />

      {/* ===== LIST ===== */}
      {reviews.length === 0 && (
        <p style={{ color: "gray" }}>No reviews yet</p>
      )}

      {reviews.map((r) => (
        <div key={r.id} style={{
          borderBottom: "1px solid #eee",
          padding: "12px 0"
        }}>

          {/* username */}
          <b style={{ color: "#2874f0" }}>
            {r.username || "User"}
          </b>

          {/* stars */}
          <div style={{ margin: "4px 0" }}>
            {"⭐".repeat(r.rating)}
          </div>

          {/* review text */}
          <p>{r.review}</p>

          {/* owner buttons */}
          {String(r.userId) === userId && (
            <div style={{ display: "flex", gap: 10 }}>
              <button onClick={() => editReview(r)}>✏ Edit</button>
              <button onClick={() => deleteReview(r.id)}>🗑 Delete</button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
