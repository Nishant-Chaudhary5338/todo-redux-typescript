/** @format */

import { FC, memo } from "react";
import { useSelector } from "react-redux";
type FailedDisplayerProps = {};

const FailedDisplayer: FC<FailedDisplayerProps> = (props) => {
  const selector = useSelector((s: any) => s.failed);
  return (
    <>
      <div className="bg-gray-200">No. of failed students: {selector}</div>
    </>
  );
};

FailedDisplayer.defaultProps = {};

export default memo(FailedDisplayer);
