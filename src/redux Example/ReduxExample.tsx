/** @format */

import { FC, memo } from "react";
import FailedDisplayer from "./FailedDisplayer";
import FailedUpdator from "./FailedUpdator";
import PassedDisplayer from "./PassedDisplayer";
import PassedUpdator from "./PassedUpdator";
type ReduxExampleProps = {};

const ReduxExample: FC<ReduxExampleProps> = (props) => {
  return (
    <>
      <PassedUpdator></PassedUpdator>
      <FailedUpdator></FailedUpdator>
      <FailedDisplayer></FailedDisplayer>
      <PassedDisplayer></PassedDisplayer>
    </>
  );
};

ReduxExample.defaultProps = {};

export default memo(ReduxExample);
