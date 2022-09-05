import React, { useState } from "react";
import { StyledList } from "./styles/List.Styled";
import { IoIosArrowDown } from "react-icons/io";

// add items as prop

export default function List({ items, footer }) {
  const [isOpened, setIsOpened] = useState(false);

  const Handler = () => {
    setIsOpened((prev) => !prev);
  };

  console.log(isOpened);

  return (
    <StyledList state={isOpened}>
      <h3>{items.header}</h3>
      {footer && (
        <IoIosArrowDown
          style={{
            transform: !isOpened
              ? "rotate(0deg) scale(1.5)"
              : "rotate(180deg) scale(1.5)",
          }}
          onClick={Handler}
        />
      )}
      <ul>
        {items.ListItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </StyledList>
  );
}
