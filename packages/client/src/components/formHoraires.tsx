import { useEffect, useState, useContext } from "react";
import { Box, Typography } from "@mui/material";
import { Validate, ValidationGroup } from "mui-validate";
import { useSnackbar } from "notistack";
import AuthContext from "../store/auth/AuthContextProvider";
import { UserRoles } from "../constants/roles";
import axios from "../axios";

import * as S from "./formHoraires.styled";

type Horaries = {
  id: number;
  jour: string;
  debut: string;
  debutDej: string;
  finDej: string;
  fin: string;
};

const FormHoraries: React.FC = () => {
  const { authState } = useContext(AuthContext);
  const { enqueueSnackbar } = useSnackbar();
  const [horaires, setHoraries] = useState<Horaries[]>([]);
  const [editedData, setEditedData] = useState<{
    [key: string]: {
      jour: string;
      debut: string;
      debutDej: string;
      finDej: string;
      fin: string;
    };
  }>({});
  const [horariesId, setHorariesId] = useState([]);

  const onInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    itemId: number
  ) => {
    setEditedData((prevData) => ({
      ...prevData,
      [itemId]: {
        ...prevData[itemId],
        [event.target?.name]: event.target?.value,
      },
    }));
    setEditedData((prevData) => ({
      ...prevData,
      [itemId]: { ...prevData[itemId], jour: horaires[itemId - 1].jour },
    }));
  };
  const fetchGetHoraries = async () => {
    await axios
      .get(`horaires`)
      .then((response) => {
        setHoraries(response.data.results[0]);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    fetchGetHoraries();
  }, []);

  const fetchPut = async () => {
    const params = {
      data: editedData,
    };
    const headers = {
      "x-access-token": authState.authToken,
    };
    await axios
      .put(`updhoraires`, params, { headers })
      .then((response) => setHorariesId(response.data.results[0]))
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    if (horariesId)
      enqueueSnackbar("L'horaires sont modifié avec succès", {
        variant: "success",
      });
  }, [horariesId]);

  const handlePut = () => {
    if (Object.keys(editedData).length) {
      fetchPut();
    } else
      enqueueSnackbar("Aucun changement effectué", {
        variant: "info",
      });
  };

  return (
    <S.MainContainer>
      <ValidationGroup>
        <>
          <Typography
            variant="h4"
            sx={{
              color: "colorWhite.main",
            }}
          >
            Horaires d'ouverture
          </Typography>
          <br />

          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": {
                m: 0.5,
                width: { xs: "18vw", md: "5vw" },
                height: "4vh",
                color: "colorWhite.main",
                backgroundColor: "colorShadow.main",
              },

              "& .MuiInputBase-root ": {
                height: "4vh",
                color: "colorWhite.main",
                webkitTextFillColor: "colorWhite.main",
              },
            }}
            noValidate
            autoComplete="off"
          >
            <S.RowContainerInt>
              <Typography variant="body1"></Typography>
              <Typography variant="body1" alignItems="left">
                Début
              </Typography>
              <Typography variant="body1" alignItems="left">
                Déjeuner
              </Typography>
              <Typography variant="body1" alignItems="left">
                Fin
              </Typography>
            </S.RowContainerInt>
            {horaires?.map((item, index) => (
              <S.RowContainerExt>
                <Typography
                  key={index}
                  variant="body1"
                  sx={{
                    color: "colorWhite.main",
                    width: { xs: "17vw", md: "10vw" },
                    alignItems: "left",
                  }}
                >
                  {item.jour}
                </Typography>
                <S.RowContainerInt>
                  <S.CustomDisableInput
                    required
                    type="text"
                    name="debut"
                    value={editedData[item.id]?.debut || item?.debut}
                    disabled={authState.role !== UserRoles.ADMINISTRATEUR}
                    onChange={(e) => onInputChange(e, item.id)}
                  />
                  <S.CustomDisableInput
                    required
                    type="text"
                    name="debutDej"
                    value={editedData[item.id]?.debutDej || item?.debutDej}
                    disabled={authState.role !== UserRoles.ADMINISTRATEUR}
                    onChange={(e) => onInputChange(e, item.id)}
                  />
                  <S.CustomDisableInput
                    required
                    type="text"
                    name="finDej"
                    value={editedData[item.id]?.finDej || item?.finDej}
                    disabled={authState.role !== UserRoles.ADMINISTRATEUR}
                    onChange={(e) => onInputChange(e, item.id)}
                  />
                  <S.CustomDisableInput
                    required
                    type="text"
                    name="fin"
                    value={editedData[item.id]?.fin || item?.fin}
                    disabled={authState.role !== UserRoles.ADMINISTRATEUR}
                    onChange={(e) => onInputChange(e, item.id)}
                  />
                </S.RowContainerInt>
              </S.RowContainerExt>
            ))}

            <br />
            <S.ButtonContainer>
              <S.ButtonSubmit
                type="button"
                color="primary"
                onClick={() => handlePut()}
                sx={{
                  display:
                    authState.role === UserRoles.ADMINISTRATEUR
                      ? "block"
                      : "none",
                  width: "10vw",
                }}
              >
                Submit
              </S.ButtonSubmit>
            </S.ButtonContainer>
          </Box>
        </>
      </ValidationGroup>
    </S.MainContainer>
  );
};

export default FormHoraries;
