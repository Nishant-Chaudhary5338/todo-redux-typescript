/** @format */

import { FC, HTMLAttributes, memo } from "react";
type H3Props = {} & HTMLAttributes<HTMLHeadElement>;

const H3: FC<H3Props> = ({ children }) => {
  return (
    <>
      <h3 className="text-lg font-medium">{children}</h3>
    </>
  );
};

H3.defaultProps = {};

export default memo(H3);
