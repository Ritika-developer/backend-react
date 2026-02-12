export default function StarRating({ rating, setRating }) {

  return (
    <div style={{ fontSize: "28px", cursor: "pointer" }}>
      {[1,2,3,4,5].map((star) => (
        <span
          key={star}
          onClick={() => setRating(star)}
          style={{ color: star <= rating ? "gold" : "gray" }}
        >
          ★
        </span>
      ))}
    </div>
  );
}
