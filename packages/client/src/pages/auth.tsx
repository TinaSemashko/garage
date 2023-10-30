import { useEffect, useState, useContext, FormEventHandler } from "react";

import useApi from "../hooks/api/useApi";
import AuthContext from "../store/auth/AuthContextProvider";
import { AuthData } from "../hooks/api/apiData";
import { useLocation } from "react-router-dom";
import FormConnection from "../components/formConnexion";
import FormInscription from "../components/formInscription";

import * as S from "./auth.styled";

const Auth = () => {
  const [authData, setAuthData] = useState<AuthData>();

  const { request, setError } = useApi();
  const { globalLogInDispatch } = useContext(AuthContext);
  const location = useLocation();
  const currentPathArray = location.pathname.split("/");
  const isLogin = currentPathArray[currentPathArray.length - 1] === "login";

  // Upon successful response from the api for login user, dispatch global auth LOG_IN event
  useEffect(() => {
    if (authData && "success" in authData) {
      globalLogInDispatch({
        authToken: authData.user.auth_token,
        userId: authData.user.user_id,
        nom: authData.user.nom,
        email: authData.user.email,
        role: authData.user.role,
      });
    }
  }, [authData, globalLogInDispatch]);

  const authHandler: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    console.log(data);
    try {
      const params = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: data.get("email"),
          password: data.get("password"),
          nom: data.get("nom"),
          prenom: data.get("prenom"),
          nickname: data.get("nickname"),
          id_role: 3,
        }),
      };

      const endpoint = `${isLogin ? "login" : "register"}`;
      await request(endpoint, params, setAuthData);
    } catch (error: any) {
      setError(error.message || error);
    }
  };

  return (
    <S.MainContainer>
      <h1>{isLogin ? "Log In" : "Sign Up"}</h1>
      {isLogin ? (
        <FormConnection onSubmit={authHandler} />
      ) : (
        <FormInscription onSubmit={authHandler} />
      )}
    </S.MainContainer>
  );
};

export default Auth;
