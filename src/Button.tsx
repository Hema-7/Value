import React, { Children, ReactNode } from "react";
interface Props {
  children: ReactNode;
  color: ReactNode;
}

const Button = ({ children, color }: Props) => {
  return <button className={"btn btn-" + color}>{children}</button>;
          
};

export default Button;
