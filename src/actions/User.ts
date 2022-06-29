/** @format */

export const USER_ADD = "user added";

let nextId = 0;
export const UserActionCreator = (name: string) => {
  return {
    type: USER_ADD,
    payload: { name, id: ++nextId },
  };
};
