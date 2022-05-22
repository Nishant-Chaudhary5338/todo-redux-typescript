/** @format */

import { FC, memo } from "react";
type CardProps = {
  children: JSX.Element;
};

const Card: FC<CardProps> = ({ children }) => {
  return (
    <>
      <div className="px-10 py-10 rounded-md shadow-md">{children}</div>
    </>
  );
};

Card.defaultProps = {};

export default memo(Card);
