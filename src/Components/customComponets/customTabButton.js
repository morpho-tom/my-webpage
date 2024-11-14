import React from "react";
import { StyledButton } from "./customTabButton.styles";

const CustomTabButton = ({ children, onClick, isActive, ...props }) => {
  return (
    <StyledButton onClick={onClick} isActive={isActive} {...props}>
      {children}
    </StyledButton>
  );
};

export default CustomTabButton;
