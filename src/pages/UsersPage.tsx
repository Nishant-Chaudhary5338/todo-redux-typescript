/** @format */

import { FC, memo, useState } from "react";
import Button from "../components/Button";
import NavBar from "../components/NavBar";
import UserForm from "../components/UserForm";
import UserList from "../components/UserList";
type UsersPageProps = {};

const UsersPage: FC<UsersPageProps> = (props) => {
  const [form, setForm] = useState(false);
  const showForm = () => setForm(true);
  const hideForm = () => setForm(false);

  return (
    <div>
      <NavBar></NavBar>
      <div className="sm:px-20">
        <div>This is users page</div>
        {!form && (
          <Button onClick={showForm} theme="highlight">
            Add a User
          </Button>
        )}
        {form && <UserForm onClose={hideForm}></UserForm>}
        <div className="fixed top-96">
          <UserList></UserList>
        </div>
      </div>
    </div>
  );
};

UsersPage.defaultProps = {};

export default memo(UsersPage);
