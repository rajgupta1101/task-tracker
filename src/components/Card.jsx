import React from "react";

export default function Card({
  title,
  subTitle,
  active,
  onDoubleClick,
  onDelete,
}) {
  return (
    <div
      onDoubleClick={onDoubleClick}
      className={"card" + (active ? " active" : "")}
    >
      <div>
        <div className="title">{title}</div>
        <div className="sub-title">{subTitle}</div>
      </div>
      <div className="bin" onClick={onDelete}>
        <i className="bi bi-trash3-fill"></i>
      </div>
    </div>
  );
}
