import React from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

import { userActions } from "../../../actions";
import styles from "./UserInList.module.css";

const UserInList = ({ user }) => {
  const dispatch = useDispatch();
  const location = useLocation();

  const onChangeUser = (user) => {
    const { from } = location.state || { from: { pathname: "/" } };

    dispatch(userActions.login(user.username, user.password, from));
  };

  return (
    <div
      className={styles.userInfo}
      key={user.id}
      onClick={() => {
        onChangeUser(user);
      }}
    >
      <div className={styles.userName}>
        {user.firstName + " " + user.lastName}
      </div>
    </div>
  );
};

export default UserInList;
