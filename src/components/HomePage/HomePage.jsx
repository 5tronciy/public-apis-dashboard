import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import styles from "./HomePage.module.css";
import { userActions } from "../../actions";

import { MainBar } from "../MainBar";
import { Dashboard } from "../Dashboard";

function HomePage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userActions.getAll());
  }, [dispatch]);

  return (
    <div className={styles.main}>
      <div className={styles.content}>
        <MainBar />
        <Dashboard />
      </div>
    </div>
  );
}

export { HomePage };
