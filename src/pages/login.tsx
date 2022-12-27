import * as React from "react";
import { LoginForm } from "../components/login-form";
import { Navigate } from "react-router-dom";
import { STORAGE_IS_LOGGED_IN } from "../constants/constants";
import * as storage from "../lib/storage";

export const LoginPage = () => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  React.useEffect(() => {
    const loggedIn = storage.load(STORAGE_IS_LOGGED_IN) === "Yes";
    if (loggedIn) {
      setIsLoggedIn(loggedIn);
    } else {
      storage.save(STORAGE_IS_LOGGED_IN, "No");
      setIsLoggedIn(false);
    }
  }, [isLoggedIn]);
  if (isLoggedIn) {
    return <Navigate to={"/"} />;
  } else
    return (
      <div>
        <LoginForm
          onSuccess={() => {
            storage.save(STORAGE_IS_LOGGED_IN, "Yes");
            setIsLoggedIn(true);
          }}
        />
      </div>
    );
};
