/** @format */

import { State } from "../store";

export const userSelector = (s: State) => {
  return Object.keys(s.users).map((userId) => s.users[userId as any]);
};
