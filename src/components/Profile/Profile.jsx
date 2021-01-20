import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { userActions } from "../../actions";
import styles from "./Profile.module.css";
import { getUser, getUsers } from "../../selectors/selectors";
import { MainBar } from "../MainBar";

function Profile() {
  const userInServer = useSelector(getUser);
  const users = useSelector(getUsers);
  const [user, setUser] = useState(userInServer);
  // console.log(
  //   users.items
  //     ? users.items.filter((users) => users.id === user.id)
  //     : "no users"
  // );

  // const userInfo = users.items.filter((users) => users.id === user.id);

  const [submitted, setSubmitted] = useState(false);

  const dispatch = useDispatch();

  function handleChange(e) {
    const { name, value } = e.target;
    setUser((user) => ({ ...user, [name]: value }));
    console.log(user);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    if (user.firstName && user.lastName) {
      dispatch(userActions.update(user));
    }
  }

  return (
    <div className={styles.main}>
      <div className={styles.content}>
        <MainBar />
        <div className={styles.container}>
          <div className={styles.formContainer}>
            <form className={styles.form} onSubmit={handleSubmit}>
              <h1 className={styles.title}>Profile</h1>
              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={user.firstName}
                  onChange={handleChange}
                  className={
                    "form-control" +
                    (submitted && !user.firstName ? " is-invalid" : "")
                  }
                />
                {submitted && !user.firstName && (
                  <div className="invalid-feedback">First Name is required</div>
                )}
                <label>Surname</label>
                <input
                  type="text"
                  name="lastName"
                  value={user.lastName}
                  onChange={handleChange}
                  className={
                    "form-control" +
                    (submitted && !user.lastName ? " is-invalid" : "")
                  }
                />
                {submitted && !user.lastName && (
                  <div className="invalid-feedback">Last Name is required</div>
                )}
                <label>About</label>
                <input
                  type="textarea"
                  name="about"
                  value={user.about}
                  onChange={handleChange}
                  className={
                    "form-control" +
                    (submitted && !user.username ? " is-invalid" : "")
                  }
                />
                <button className={styles.button}>Save</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Profile };
