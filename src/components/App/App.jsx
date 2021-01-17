import styles from "./App.module.css";
import React, { useEffect } from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { history } from "../../helpers";
import { alertActions } from "../../actions";
import { PrivateRoute } from "..";
import { HomePage } from "../HomePage/HomePage";
import { LoginPage } from "../LoginPage/LoginPage";
import { RegisterPage } from "../RegisterPage/RegisterPage";
import { getAlert } from "../../selectors/selectors";

function App() {
  const alert = useSelector(getAlert);
  const dispatch = useDispatch();

  useEffect(() => {
    history.listen(() => {
      dispatch(alertActions.clear());
    });
  }, [dispatch]);
  return (
    <div className={styles.content}>
      <div className={styles.container}>
        <div className={styles.column}>
          {alert.message && (
            <div className={`alert ${alert.type}`}>{alert.message}</div>
          )}
          <Router history={history}>
            <Switch>
              <PrivateRoute exact path="/" component={HomePage} />
              <Route path="/login" component={LoginPage} />
              <Route path="/register" component={RegisterPage} />
              <Redirect from="*" to="/" />
            </Switch>
          </Router>
        </div>
      </div>
    </div>
  );
}

export { App };
