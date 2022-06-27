/** @format */

import { FC, memo } from "react";
import { useDispatch } from "react-redux";
import { FAILED_INCREASED } from "./actions";
type FailedUpdatorProps = {};

const FailedUpdator: FC<FailedUpdatorProps> = (props) => {
  const dispatch = useDispatch();
  const updateFailed = () => {
    dispatch({ type: FAILED_INCREASED });
  };
  return (
    <>
      <button
        className="bg-red-300 px-4 py-2 rounded-md"
        onClick={updateFailed}
      >
        Update Failed
      </button>
    </>
  );
};

FailedUpdator.defaultProps = {};

export default memo(FailedUpdator);
