/** @format */

import { FC, memo } from "react";
import { useDispatch } from "react-redux";
import { PASS_INCREASED } from "./actions";
type PassedUpdatorProps = {};

const PassedUpdator: FC<PassedUpdatorProps> = (props) => {
  const dispatch = useDispatch();
  const updatePassed = () => {
    dispatch({ type: PASS_INCREASED });
  };
  return (
    <>
      <button
        className="bg-green-500 px-4 py-2 rounded-md "
        onClick={updatePassed}
      >
        Update Pass
      </button>
    </>
  );
};

PassedUpdator.defaultProps = {};

export default memo(PassedUpdator);
