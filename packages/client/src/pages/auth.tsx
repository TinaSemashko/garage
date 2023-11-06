import { useEffect, useState, useContext, FormEventHandler } from "react";
import useApi from "../hooks/api/useApi";
import AuthContext from "../store/auth/AuthContextProvider";
import { AuthData } from "../hooks/api/apiData";
import { useLocation } from "react-router-dom";
import FormConnection from "../components/formConnexion";
import FormInscription from "../components/formInscription";
import { UserRoles } from "../constants/roles";
import { useSnackbar } from "notistack";

import * as S from "./auth.styled";

const Auth = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [authData, setAuthData] = useState<AuthData>();
  const { request, setError } = useApi();
  const { globalLogInDispatch } = useContext(AuthContext);
  const location = useLocation();
  const currentPathArray = location.pathname.split("/");
  const isLogin = currentPathArray[currentPathArray.length - 1] === "login";
  const isAdmin = currentPathArray[currentPathArray.length - 1] === "admin";

  // Upon successful response from the api for login user, dispatch global auth LOG_IN event
  useEffect(() => {
    if (authData && "success" in authData) {
      enqueueSnackbar("L'utilisateur est connecté avec succès", {
        variant: "success",
      });
      globalLogInDispatch({
        authToken: authData.user.auth_token,
        userId: authData.user.user_id,
        nom: authData.user.nom,
        prenom: authData.user.prenom,
        nickname: authData.user.nickname,
        email: authData.user.email,
        id_role: authData.user.id_role,
        role: authData.user.role,
      });
    }
  }, [authData, globalLogInDispatch]);

  const authHandler: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const roleValue = data.get("role")?.toString().toUpperCase();
    let roleIndex = 3;
    if (roleValue !== undefined) {
      roleIndex = Object.keys(UserRoles).indexOf(roleValue) + 1;
    }

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
          id_role: data.get("role") ? roleIndex : 3,
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
      <h1>
        {isLogin ? "Log In" : isAdmin ? "Ajouteur l'utilisateur" : "Sign Up"}
      </h1>
      {isLogin ? (
        <FormConnection onSubmit={authHandler} />
      ) : (
        <FormInscription onSubmit={authHandler} />
      )}
    </S.MainContainer>
  );
};

export default Auth;
