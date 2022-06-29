/** @format */

import { Reducer } from "redux";
import { USER_ADD } from "../actions/User";
import { User } from "../models/User";

export type UserState = {
  [id: number]: User;
};
export const initialUserState = {};

export const userReducer: Reducer<UserState> = (
  state = initialUserState,
  action
) => {
  switch (action.type) {
    case USER_ADD: {
      const user: User = action.payload;
      return { ...state, [user.id]: user };
    }
    default:
      return state;
  }
};
