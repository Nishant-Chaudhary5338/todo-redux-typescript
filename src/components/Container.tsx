/** @format */

import { FC, memo } from "react";
type ContainerProps = {
  children: JSX.Element;
};

const Container: FC<ContainerProps> = ({ children }) => {
  return (
    <>
      <div className="px-20 py-4 border border-gray-200">{children}</div>
    </>
  );
};

Container.defaultProps = {};

export default memo(Container);
