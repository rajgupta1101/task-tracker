import React from "react";

export default function Button({ title, type = "success", onClick }) {
  return (
    <button onClick={onClick} className={type}>
      {title}
    </button>
  );
}
