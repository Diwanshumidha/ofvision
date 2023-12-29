import React from "react";
type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> &
  ExtraProps;

type ExtraProps = {
  background: "black" | "white";
};
const Button = (props: ButtonProps) => {
  const { className, children, background, ...otherProps } = props;
  return (
    <button
      {...otherProps}
      className={`px-4 py-3 font-bold  border-white border-2 border-solid rounded-full
      ${
        background === "black"
          ? "bg-background text-text hover:bg-text hover:text-background transition-all"
          : "bg-text text-background hover:bg-background hover:text-text transition-all"
      }
      ${className}
      `}
    >
      {children}
    </button>
  );
};

export default Button;
