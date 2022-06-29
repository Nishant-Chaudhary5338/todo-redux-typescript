/** @format */

import { FC, memo } from "react";
import { connect } from "react-redux";
import { User } from "../models/User";
import { userSelector } from "../selectors/user";
import { State } from "../store";
import UserRow from "./UserRow";
type UserListProps = {
  users: User[];
};

const UserList: FC<UserListProps> = ({ users }) => {
  return (
    <div>
      {users.map((u) => (
        <UserRow user={u} key={u.id}></UserRow>
      ))}
    </div>
  );
};

UserList.defaultProps = {};
const mapper = (s: State) => {
  return { users: userSelector(s) };
};

export default connect(mapper)(memo(UserList));
