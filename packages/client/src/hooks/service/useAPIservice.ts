import { useState, useCallback, useContext } from "react";
import AuthContext from "../../store/auth/AuthContextProvider";
import axios from "../../axios";

const useApiServce = () => {
  const { authState } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const request = useCallback(
    async (
      method: string,
      endpoint: string,
      data: { [key: string]: any },
      handleSuccessResponse: (data: any) => void,
      handleErrorResponse?: (error: Error) => void
    ) => {
      setLoading(true);
      setError(null);

      const headers: { [key: string]: string } = {};
      if (authState.isLoggedIn && authState.authToken) {
        headers["x-access-token"] = authState.authToken;
      }

      await axios({
        method: method,
        url: endpoint,
        data: data,
        headers: headers,
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
