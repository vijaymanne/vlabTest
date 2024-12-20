import React from "react";

interface ListProps {
  items: string[]; // List of item names
}

const List: React.FC<ListProps> = ({ items }) => {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

export default List;
