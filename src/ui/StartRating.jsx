import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Text from "./Text";

const containerStyle = {
  display: "flex",
  alignItems: "center", // ✅ Perbaikan typo: aliginItems -> alignItems
  gap: "16px",
  color: "black",
};

const starContainerStyle = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
};

StartRating.propTypes = {
  maxRating: PropTypes.number,
  defaultRating: PropTypes.number,
  color: PropTypes.string,
  size: PropTypes.number,
  messages: PropTypes.array,
  className: PropTypes.string,
  onSetMovieRating: PropTypes.func,
};

export default function StartRating({
  maxRating = 5,
  color = "#fcc419",
  size = 42,
  messages = [],
  defaultRating = 0,
  className = "",
  onSetMovieRating = () => {},
}) {
  const [rating, setRating] = useState(defaultRating);
  const [hoverRating, setHoverRating] = useState(0); // ✅ Diganti hoverRating biar lebih jelas

  // 🚀 SANGAT PENTING: Update state kalau data 'defaultRating' dari API backend berubah
  useEffect(() => {
    setRating(defaultRating);
  }, [defaultRating]);

  function handleRating(newRating) {
    setRating(newRating);
    onSetMovieRating(newRating);
  }

  const textStyle = {
    lineHeight: "1",
    margin: "0",
    fontWeight: "400",
    fontSize: `${size / 1.6}px`,
  };

  return (
    <div style={containerStyle} className={className}>
      <div style={starContainerStyle}>
        {Array.from({ length: maxRating }, (_, i) => (
          <Star // ✅ Diganti namanya jadi Star (Bintang)
            key={i}
            onRate={() => handleRating(i + 1)}
            onHoverIn={() => setHoverRating(i + 1)}
            onHoverOut={() => setHoverRating(0)}
            full={hoverRating ? hoverRating >= i + 1 : rating >= i + 1}
            color={color}
            size={size}
          />
        ))}
      </div>
      {rating > 1 && (
        <Text style={textStyle} className="">
          (
          {messages.length === maxRating
            ? messages[hoverRating ? hoverRating - 1 : rating - 1]
            : hoverRating || rating || ""}
          .0)
        </Text>
      )}
    </div>
  );
}

// ✅ Nama komponen child diganti Star (Bukan Start)
function Star({ onRate, full, onHoverIn, onHoverOut, size, color }) {
  const starStyle = {
    width: `${size / 1.4}px`,
    height: `${size / 1.4}px`,
    cursor: "pointer",
    display: "block",
  };

  return (
    <span
      style={starStyle}
      onClick={onRate}
      onMouseEnter={onHoverIn}
      onMouseLeave={onHoverOut}
    >
      {full ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill={color}
          stroke={color}
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke={color}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2} // ✅ Perbaikan syntax dari "{2}" menjadi {2}
            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
          />
        </svg>
      )}
    </span>
  );
}
