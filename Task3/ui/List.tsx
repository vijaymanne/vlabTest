import React from "react";

interface ListProps {
  items: string[];
}

const List: React.FC<ListProps> = ({ items }) => {
  const listStyle: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
    gap: "16px",
    padding: "0",
    listStyleType: "none",
  };

  const listItemStyle: React.CSSProperties = {
    padding: "10px",
    textAlign: "center",
    background: "#f5f5f5",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    fontFamily: "Arial, sans-serif",
  };

  return (
    <ul style={listStyle}>
      {items.map((item, index) => (
        <li key={index} style={listItemStyle}>
          {item}
        </li>
      ))}
    </ul>
  );
};

export default List;
