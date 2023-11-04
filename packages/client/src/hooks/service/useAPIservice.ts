import { useState, useCallback, useContext } from "react";
import AuthContext from "../../store/auth/AuthContextProvider";
import axios from "../../axios";

const useApiServce = () => {
  const { authState } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [response, setResponse] = useState(null);

  // const requete = {
  //   params: {},
  //   headers: {
  //     "x-access-token": authState.authToken,
  //   },
  // };

  // if (authState.isLoggedIn) {
  //   const headers = {
  //     "x-access-token": authState.authToken,
  //   };
  // }

  const request = useCallback(
    async (
      method: string,
      endpoint: string,
      params: { [key: string]: any },
      handleSuccessResponse: (data: any) => void,
      handleErrorResponse?: (error: Error) => void
    ) => {
      setLoading(true);
      setError(null);

      if (authState.isLoggedIn) {
        params.headers["x-access-token"] = authState.authToken;
      }

      await axios({
        method: method,
        url: endpoint,
        params: { ...params },
      })
        .then((response) => {
          handleSuccessResponse(response.data.results[0]);
        })
        .catch((error) => {
          if (handleErrorResponse) {
            handleErrorResponse(error.message || error.error || error);
          } else {
            setError(error.message || error.error || error);
          }
        });
      setLoading(false);
    },
    [authState.authToken]
  );

  return {
    loading: loading,
    error: error,
    request: request,
    setError: setError,
  };
};

export default useApiServce;
