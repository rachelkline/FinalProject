import React, { useReducer, useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";

import LoginForm from "../components/log-in";
import SignUpForm from "../components/sign-up";

const initialState = {
  status: "pending",
  user: undefined,
  error: undefined,
};

export const AuthContext = React.createContext(initialState);

function reducer(state, action) {
  console.log("action: ", action);

  switch (action.type) {
    case "authenticated":
      return {
        error: undefined,
        user: action.user,
        status: action.type,
      };
    case "error":
      return {
        user: undefined,
        status: action.type,
        error: action.error,
      };
    case "unauthenticated":
      return {
        user: undefined,
        status: action.type,
        error: undefined,
      };
    default:
      throw new Error();
  }
}

export const AuthComponent = function ({ children, ...props }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios
      .get("/user")
      .then(({ data }) => {
        const { user } = data;

        dispatch({ type: "authenticated", user });
      })
      .catch((error) => {
        if (error.response.status === 422) {
          dispatch({ type: "unauthenticated" });

          return;
        }

        dispatch({ type: "error", error });
      });
  }, []);

  let content;
  const { status } = state;

  if (status === "pending") {
    content = <div>Loading...</div>;
  } else if (status === "unauthenticated") {
    content = <UnauthComponent />;
  } else if (status === "error") {
    content = (
      <div>
        ruh roh we ran into an error
        <div>
          <pre>{state.error.message}</pre>
        </div>
      </div>
    );
  } else {
    content = children;
  }

  console.log(content);

  const value = {
    ...state,
    updateUser(user) {
      dispatch({ type: "authenticated", user });
    },
    logoutUser() {
      dispatch({ type: "unauthenticated" });
    },
  };

  return <AuthContext.Provider value={value}>{content}</AuthContext.Provider>;
};

export default AuthComponent;

const UnauthComponent = () => {
  const [componentName, setComponentName] = useState("login");

  if (componentName === "login") {
    return <LoginForm setComponentName={setComponentName} />;
  } else if (componentName === "signup") {
    return <SignUpForm setComponentName={setComponentName} />;
  } else {
    return <div>ruh roh something went wrong</div>;
  }
};
