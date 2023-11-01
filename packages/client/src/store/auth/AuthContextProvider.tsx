import React, {
  createContext,
  useReducer,
  useCallback,
  useEffect,
} from "react";
import { useNavigate } from "react-router-dom";
import { AuthActionEnum } from "./authActions";
import authReducer, { AuthState, defaultAuthState } from "./authReducer";
import { Routes } from "../../app/routes";

type AuthProviderProps = {
  children: React.ReactElement;
};

export type UserData = {
  authToken: string;
  userId: string;
  nom: string;
  prenom: string;
  nickname: string;
  email: string;
  id_role: number;
  role: string;
};

export interface AuthContext {
  authState: AuthState;
  globalLogInDispatch: (props: UserData) => void;
  globalLogOutDispatch: () => void;
}

// Auth context
const authCtx = createContext<AuthContext>({
  authState: defaultAuthState,
  globalLogInDispatch: () => {},
  globalLogOutDispatch: () => {},
});

export const AuthContextProvider = (props: AuthProviderProps) => {
  const { children } = props;

  const [authState, authDispatch] = useReducer(authReducer, defaultAuthState);
  const navigate = useNavigate();

  // Check if user detail is persisted, mostly catering for refreshing of the browser
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      const userData: UserData = JSON.parse(user);
      authDispatch({ type: AuthActionEnum.LOG_IN, payload: userData });
    }
  }, []);

  const globalLogInDispatch = useCallback(
    (props: UserData) => {
      const { authToken, email, nom, prenom, nickname, userId, id_role, role } =
        props;
      authDispatch({
        type: AuthActionEnum.LOG_IN,
        payload: {
          authToken,
          userId,
          nom,
          prenom,
          nickname,
          email,
          id_role,
          role,
        },
      });
      navigate(Routes.home);
    },
    [navigate]
  );

  const globalLogOutDispatch = useCallback(() => {
    authDispatch({ type: AuthActionEnum.LOG_OUT, payload: null });
    navigate(Routes.login);
  }, [navigate]);

  // context values to be passed down to children
  const ctx = {
    authState,
    globalLogInDispatch,
    globalLogOutDispatch,
  };

  return <authCtx.Provider value={ctx}>{children}</authCtx.Provider>;
};

export default authCtx;
