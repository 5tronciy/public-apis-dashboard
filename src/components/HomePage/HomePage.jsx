import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import styles from "./HomePage.module.css";
import { userActions } from "../../actions";

import { MainBar } from "../MainBar";

function HomePage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userActions.getAll());
  }, [dispatch]);

  return (
    <div className={styles.main}>
      <div className={styles.content}>
        <MainBar />
        <div className={styles.menuBar}>
          <a href=".">
            <div className={styles.menuItem}>customers</div>
          </a>
          <a href=".">
            <div className={styles.menuItem}>destination</div>
          </a>
          <a href=".">
            <div className={styles.menuItem}>carriers</div>
          </a>
          <a href=".">
            <div className={styles.menuItem}>routes</div>
          </a>
          <a href=".">
            <div className={styles.menuItem}>phone numbers</div>
          </a>
          <a href=".">
            <div className={styles.menuItem}>companies</div>
          </a>
          <a href=".">
            <div className={styles.menuItem}>users</div>
          </a>
          <a href=".">
            <div className={styles.menuItem}>products</div>
          </a>
        </div>
        <div className={styles.addApiCard}>
          <span>+ Add</span>
        </div>
        <div className={styles.dashboard}>
          <div className={styles.apiCard}></div>
        </div>
      </div>
    </div>
  );
}

export { HomePage };
