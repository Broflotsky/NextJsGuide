"use client";
import { ButtonProps } from "./interfaces/ButtonProps";

export const Button: React.FC<ButtonProps> = ({
  children,
  disabled,
  onClick,
  name,
}: ButtonProps) => {
  return (
    <button disabled={disabled} onClick={onClick} name={name}>
      {children}
    </button>
  );
};

export default Button;
