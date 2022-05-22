/** @format */

import { ButtonHTMLAttributes, FC, memo } from "react";
import cn from "classnames";
type ButtonProps = {
  theme: "primary" | "highlight" | "secondary";
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = ({ theme, ...rest }) => {
  const themeClasses = cn(
    "inline-flex justify-center px-4 rounded-md py-2 text-sm font-medium shadow-sm border",
    {
      "text-white bg-yellow-500 border-transparent shadow-sm hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500":
        theme === "primary",
      "text-white bg-yellow-500 rounded-full border-transparent shadow-sm hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500":
        theme === "highlight",
      "bg-white border-gray-300 text-gray-900 hover:bg-blue-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500":
        theme === "secondary",
    }
  );
  return (
    <>
      <button className={themeClasses} {...rest}></button>
    </>
  );
};

Button.defaultProps = {};

export default memo(Button);
