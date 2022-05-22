/** @format */

import { FC, memo } from "react";
type NavBarProps = {};

const NavBar: FC<NavBarProps> = (props) => {
  return (
    <>
      <div className="px-20 py-4 border border-gray-200">
        <h3 className="text-xl font-semibol">CodeYogi TODO</h3>
      </div>
    </>
  );
};

NavBar.defaultProps = {};

export default memo(NavBar);
