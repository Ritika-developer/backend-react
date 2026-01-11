import { useEffect, useState } from "react";
import "../styles/product-gallery.css";

export default function ProductImageGallery({ images = [] }) {

  const primary =
    images.find(img => img.isPrimary) || images[0];

  const [selected, setSelected] = useState(primary);

  useEffect(() => {
    setSelected(primary);
  }, [images]);

  if (!images.length) {
    return <img src="/no-image.png" alt="No image" />;
  }

  return (
    <div className="gallery-wrapper">
      <div className="gallery-thumbs">
        {images.map(img => (
          <img
            key={img.id}
            src={img.imageUrl}
            alt=""
            className={
              selected?.id === img.id
                ? "thumb active"
                : "thumb"
            }
            onClick={() => setSelected(img)}
          />
        ))}
      </div>

      <div className="gallery-main">
        <img
          src={selected?.imageUrl}
          alt="Product"
          className="main-image"
        />
      </div>
    </div>
  );
}
