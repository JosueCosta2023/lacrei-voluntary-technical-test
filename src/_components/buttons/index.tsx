import React from "react";
import { StyledButton } from "./style";

interface ButtonProps {
  href: string;
  label: string;
  newTab?: boolean;
}
const Buttons: React.FC<ButtonProps> = ({ href, label, newTab = false }) => {
  return (
    <StyledButton
      href={href}
      target={newTab ? "_blank" : "_self"}
      rel={newTab ? "noopener noreferrer" : "undefined"}
    >
      {label}
    </StyledButton>
  );
};

export default Buttons;
