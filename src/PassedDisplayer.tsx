/** @format */

import { FC, memo } from "react";
import { useSelector } from "react-redux";
import { passedSelector } from "./selector";
type PassedDisplayerProps = {};

const PassedDisplayer: FC<PassedDisplayerProps> = (props) => {
  const passedCount = useSelector(passedSelector);
  return (
    <>
      <div className="bg-yellow-200">No. of passed students {passedCount}</div>
    </>
  );
};

PassedDisplayer.defaultProps = {};

export default memo(PassedDisplayer);
