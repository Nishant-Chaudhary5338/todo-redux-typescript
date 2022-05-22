/** @format */

import { FC, memo } from "react";
type H1Props = {
  children: string;
};

const H1: FC<H1Props> = ({ children }) => {
  return (
    <>
      <h1 className="text-3xl font-bold">{children}</h1>
    </>
  );
};

H1.defaultProps = {};

export default memo(H1);
