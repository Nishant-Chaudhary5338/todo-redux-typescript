/** @format */

import { FC, InputHTMLAttributes, memo } from "react";
type CheckboxProps = {
  children?: any;
  checked: boolean;
  onChange: (event: any) => void;
};

const Checkbox: FC<CheckboxProps> = ({ checked, onChange, children }) => {
  return (
    <>
      <input
        type="checkbox"
        onChange={onChange}
        checked={checked}
        className="w-4 h-4 text-yellow-600 border-gray-300 rounded focus:ring-yellow-500"
        {...children}
      />
    </>
  );
};

Checkbox.defaultProps = {};

export default memo(Checkbox);
