import React from "react";

export const Button = ({ children, onClick, disable }) => {
  return (
    <button onClick={onClick} disabled={disable}>
      {children}
    </button>
  );
};
