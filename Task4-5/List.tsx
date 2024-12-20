import React from "react";

interface ListProps {
  items: string[];
  handleRemove: (item: string) => void;
}

const List: React.FC<ListProps> = ({ items, handleRemove }) => {
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
  };

  const buttonStyle: React.CSSProperties = {
    marginTop: "10px",
    padding: "5px 10px",
    backgroundColor: "#ff4d4d",
    border: "none",
    borderRadius: "4px",
    color: "white",
    cursor: "pointer",
  };

  return (
    <ul style={listStyle}>
      {items.map((item, index) => (
        <li key={index} style={listItemStyle}>
          {item}
          <button style={buttonStyle} onClick={() => handleRemove(item)}>
            Remove
          </button>
        </li>
      ))}
    </ul>
  );
};

export default List;
