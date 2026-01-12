// import "../../styles/product-variants.css"

// export default function ProductVariants({ variants, selected, onSelect }) {
//   if (!variants?.length) return null;

//   return (
//     <div className="variants">
//       <h4>Variants</h4>
//       {variants.map(v => (
//         <button
//           key={v.id}
//           className={
//             selected?.id === v.id
//               ? "variant-btn active"
//               : "variant-btn"
//           }
//           onClick={() => onSelect(v)}
//           disabled={v.stock === 0}
//         >
//           {v.name}
//         </button>
//       ))}
//     </div>
//   );
// }





// export default function ProductVariants({ variants, selected, onSelect }) {
//   return (
//     <div className="variant-section">
//       <h4>Select Option</h4>

//       <div className="variant-options">
//         {variants.map(v => (
//           <button
//             key={v.id}
//             className={
//               selected?.id === v.id
//                 ? "variant-btn active"
//                 : "variant-btn"
//             }
//             onClick={() => onSelect(v)}
//           >
//             {v.value || "Free Size"}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// }


// import "../../styles/product-variants.css";

// export default function ProductVariants({
//   variants = [],
//   selected,
//   onSelect,
//   type
// }) {

//   // 🔒 SAFETY: agar type hi nahi hai, kuch bhi render mat karo
//   if (!type) return null;

//   console.log("VARIANT TYPE 👉", type);

//   let filteredVariants = [];

//   if (type === "size") {
//     filteredVariants = variants.filter(v => v.size);
//   }

//   if (type === "color") {
//     filteredVariants = variants.filter(v => v.color);
//   }

//   if (!filteredVariants.length) return null;

//   return (
//     <div className="variant-section">

//       <div className="variant-header">
//         <h4>{type === "size" ? "Size" : "Colour"}</h4>

//         {type === "size" && (
//           <span className="variant-guide">Size Guide</span>
//         )}
//       </div>

//       <div className={`variant-options ${type}`}>
//         {filteredVariants.map(v => (
//           <button
//             key={v.id}
//             className={
//               selected?.id === v.id
//                 ? "variant-btn active"
//                 : "variant-btn"
//             }
//             onClick={() => onSelect(v)}
//           >
//             {type === "size" ? v.size : v.color}
//           </button>
//         ))}
//       </div>

//     </div>
//   );
// }
import "../../styles/product-variants.css";

export default function ProductVariants({
  variants = [],
  selected,
  onSelect,
  type
}) {

  if (!type) return null;

  console.log("VARIANTS 👉", variants);
  console.log("VARIANT TYPE 👉", type);


  let filteredVariants = [];

  if (type === "size") {
    filteredVariants = variants.filter(
      v => v.attributes?.size
    );
  }

  if (type === "color") {
    filteredVariants = variants.filter(
      v => v.attributes?.color
    );
  }

  if (!filteredVariants.length) return null;

  return (
    <div className="variant-section">

      <div className="variant-header">
        <h4>{type === "size" ? "Size" : "Colour"}</h4>

        {type === "size" && (
          <span className="variant-guide">Size Guide</span>
        )}
      </div>

      <div className={`variant-options ${type}`}>


        {filteredVariants.map(v => (
          
          <button
            key={v.id}
            className={
              selected?.id === v.id
                ? "variant-btn active"
                : "variant-btn"
            }
            onClick={() => onSelect(v)}
          >
            {type === "size"
              ? v.attributes.size
              : v.attributes.color}
          </button>
          
        ))}
      </div>


    </div>
  );
}
