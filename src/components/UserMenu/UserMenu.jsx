import React from "react";
import styles from "./UserMenu.module.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import UserInList from "./UserInList/UserInList";

import { getUsers, getUser } from "../../selectors/selectors";
function UserMenu() {
  const users = useSelector(getUsers);
  const user = useSelector(getUser);

  return (
    <div className={styles.userMenu}>
      <div className={styles.currentUserContainer}>
        <div className={styles.currentUserInfo}>
          {user.firstName + " " + user.lastName}
        </div>
      </div>

      <div className={styles.usersContainer}>
        {users.loading && <em>Loading users...</em>}
        {users.error && (
          <span className="text-danger">ERROR: {users.error}</span>
        )}
        {users.items && (
          <div>
            {users.items.map((user) => (
              <UserInList user={user} key={user.id} />
            ))}
          </div>
        )}
      </div>

      <div className={styles.addUserContainer} tabIndex="-1">
        <Link to="/register" className={styles.addUserLink}>
          <div className={styles.addUserSvg}>
            <svg
              enableBackground="new 0 0 24 24"
              focusable="false"
              height="20"
              viewBox="0 0 24 24"
              width="20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm0 7c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4zm6 5H3v-.99C3.2 16.29 6.3 15 9 15s5.8 1.29 6 2v1zm3-4v-3h-3V9h3V6h2v3h3v2h-3v3h-2z"></path>
            </svg>
          </div>
          <div className={styles.addUser}>Add user account</div>
        </Link>
      </div>

      <div className={styles.logoutContainer}>
        <Link to="/login" className={styles.logout}>
          Logout all accounts
        </Link>
      </div>
    </div>
  );
}

export default UserMenu;
