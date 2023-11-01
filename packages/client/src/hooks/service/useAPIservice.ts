import { useState, useCallback, useContext } from "react";
import AuthContext from "../../store/auth/AuthContextProvider";
import axios from "../../axios";

const useApiServce = (endpoint: string) => {
  const { authState } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [response, setResponse] = useState(null);

  const fetchGet = useCallback(
    async (endpoint: string) => {
      setLoading(true);
      setError(null);
      const headers = {
        "x-access-token": authState.authToken,
      };
      await axios
        .get(endpoint, { headers })
        .then((response) => {
          setResponse(response.data.results[0]);
        })
        .catch((err) => {
          console.error(err);
        });
    },
    [authState.authToken]
  );
  setLoading(false);
  return {
    loading: loading,
    error: error,
    fetchGet: fetchGet,
    setError: setError,
  };
};

export default useApiServce;
