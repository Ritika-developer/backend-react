

const categories = [
//   { name: "Silk Sarees", img: "https://images.unsplash.com/photo-1604147706283-d7119b5b822c" },
  { name: "Silk Sarees", img:"/silksarees.webp"},
  { name: "Cotton Sarees", img: "/silksarees.webp" },
  { name: "Designer Sarees", img: "/silksarees.webp" },
  { name: "Bridal Sarees", img: "/silksarees.webp" }
];

export default function Categories() {
  return (
    <section className="fade-in">
      <h3>Shop By Category</h3>

      <div className="categories">
        {categories.map((c, i) => (
          <div className="category-card luxury-card" key={i}>
            <img
              src={`${c.img}?auto=format&fit=crop&w=900&q=80`}
              alt={c.name}
            />

            <div className="category-overlay">
              <h4>{c.name}</h4>
              <span>Explore</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
