/** @format */

import { FC, memo } from "react";
import { User } from "../models/User";
type UserRowProps = {
  user: User;
};

const UserRow: FC<UserRowProps> = ({ user }) => {
  return (
    <div>
      <h1>
        {" "}
        #{user.id} {user.name}
      </h1>
    </div>
  );
};

UserRow.defaultProps = {};

export default memo(UserRow);
