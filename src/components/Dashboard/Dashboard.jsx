import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import styles from "./Dashboard.module.css";
import { userActions } from "../../actions";

function Dashboard() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userActions.getAll());
  }, [dispatch]);

  return (
    <>
      <div className={styles.addApiCard}>
        <span>+ Add</span>
      </div>
      <div className={styles.dashboard}>
        <div className={styles.apiCard}></div>
      </div>
    </>
  );
}

export { Dashboard };
