/** @format */

import { FC, InputHTMLAttributes, memo } from "react";
type InputProps = {} & InputHTMLAttributes<HTMLInputElement>;

const Input: FC<InputProps> = ({ type, ...rest }) => {
  return (
    <>
      <input
        className="block border-gray-300 rounded-md shadow-sm w-96 focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
        type="text"
        {...rest}
      />
    </>
  );
};

Input.defaultProps = {};

export default memo(Input);
