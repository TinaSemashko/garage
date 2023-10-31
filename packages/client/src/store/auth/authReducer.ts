import { Reducer } from "react";
import { AuthAction } from "./authActions";

export interface AuthState {
  isLoggedIn: boolean;
  authToken?: string;
  userId?: string;
  nom?: string;
  email?: string;
  role?: string;
}

export const defaultAuthState: AuthState = {
  isLoggedIn: false,
};

const authReducer: Reducer<AuthState, AuthAction> = (state, action) => {
  console.log("reducer");
  // user successfully authenticated
  if (action.type === "LOG_IN") {
    localStorage.setItem("user", JSON.stringify(action.payload));
    return {
      ...state,
      isLoggedIn: true,
      authToken: action.payload.authToken,
      userId: action.payload.userId,
      nom: action.payload.nom,
      prenom: action.payload.prenom,
      nickname: action.payload.nickname,
      email: action.payload.email,
      id_role: action.payload.id_role,
    };
  }

  // log out user
  if (action.type === "LOG_OUT") {
    localStorage.removeItem("user");
    return defaultAuthState;
  }

  return defaultAuthState;
};

export default authReducer;
