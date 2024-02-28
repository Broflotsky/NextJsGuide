export interface ButtonProps {
  children: string;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  name: string;
}
