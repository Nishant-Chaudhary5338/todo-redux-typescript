/** @format */

import { FC, memo } from "react";
import { Link } from "react-router-dom";
type NavBarProps = {};

const NavBar: FC<NavBarProps> = (props) => {
  return (
    <>
      <div className="flex justify-between px-4 py-4 border border-gray-200 sm:px-20">
        <h3 className="text-2xl font-semibold">CodeYogi TODO</h3>
        <div className="space-x-6 text-xl font-semibold">
          <Link to="/">Todo</Link>
          <Link to="/users">Users</Link>
        </div>
      </div>
    </>
  );
};

NavBar.defaultProps = {};

export default memo(NavBar);
