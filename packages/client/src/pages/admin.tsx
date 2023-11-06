import { Box, MenuItem, TextField, Typography } from "@mui/material";
import { useEffect, useState, useContext } from "react";
import { useSnackbar } from "notistack";
import AuthContext from "../store/auth/AuthContextProvider";
import Auth from "../pages/auth";
import FormProduits from "../components/formProduits";
import FormProduitsList from "../components/formProduitsList";
import { UserRoles } from "../constants/roles";
import useApiServce from "../hooks/service/useAPIservice";

import * as S from "./admin.styled";

interface User {
  id: number;
  nom: string;
  prenom: string;
  nickname: string;
  email: string;
  role: string;
  id_role: number;
}

const userRolessArray = Object.values(UserRoles);

const Admin: React.FC = () => {
  const { authState } = useContext(AuthContext);
  const { enqueueSnackbar } = useSnackbar();
  const { request, setError } = useApiServce();
  const [userdata, setUserdata] = useState<User[]>([]);
  const [disabledId, setDisabledId] = useState("");
  const [editedData, setEditedData] = useState<{
    [key: string]: {
      nom: string;
      prenom: string;
      email: string;
      nickname: string;
      role: string;
      id_role: number;
    };
  }>({});
  const [user, setUser] = useState<User>({
    id: 0,
    nom: "",
    prenom: "",
    nickname: "",
    email: "",
    role: "",
    id_role: 0,
  });
  const [userId, setUserId] = useState(0);
  const [userIdDel, setUserIdDel] = useState(0);

  const showError = (err: any, mess: string) => {
    enqueueSnackbar(mess, { variant: "error" });
    console.error(err);
  };

  const onInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    itemId: number
  ) => {
    setUser({
      ...user,
      [event.target?.name]: event.target?.value,
    });
    setEditedData((prevData) => ({
      ...prevData,
      [itemId]: {
        ...prevData[itemId],
        [event.target?.name]: event.target?.value,
      },
    }));
  };

  useEffect(() => {
    const params = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      request("GET", `users`, params, setUserdata);
    } catch (error: any) {
      setError(error.message || error);
      showError(error, error.message);
    }
  }, []);

  const handleDelete = (id: number) => {
    const params = {
      id: id,
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      request("DELETE", `delete`, params, setUserIdDel);
    } catch (error: any) {
      setError(error.message || error);
      showError(error, error.message);
    }
  };

  useEffect(() => {
    if (userIdDel)
      enqueueSnackbar("L'utilisateur est deleté avec succès", {
        variant: "success",
      });
  }, [userIdDel]);

  useEffect(() => {
    if (userId)
      enqueueSnackbar("L'utilisateur est modifié avec succès", {
        variant: "success",
      });
  }, [userId]);

  const handlePut = (id: string) => {
    if (disabledId === "") setDisabledId(id);
    else {
      const params = {
        data: user,
        id: id,
        headers: {
          "Content-Type": "application/json",
        },
      };
      if (Object.keys(editedData).length) {
        try {
          request("PUT", `update`, params, setUserId);
        } catch (error: any) {
          setError(error.message || error);
          showError(error, error.message);
        }
      } else
        enqueueSnackbar("Aucun changement effectué", {
          variant: "info",
        });
      setDisabledId("");
    }
  };

  return (
    <S.MainContainer>
      <Typography variant="h3">Admin page</Typography>
      <br />
      <br />
      <Auth />
      <Box
        component="form"
        sx={{
          color: "colorWhite.main",
          "& .MuiTextField-root": {
            m: 1,
            display: "inline-block",
            width: { xs: "50vw", md: "25vw" },
            textAlign: "center",
            justifyContent: "center",
            color: "colorWhite.main",
          },

          "& .MuiInput-root": {
            textAlign: "center",
            justifyContent: "center",
            alignContent: "center",
            color: "colorWhite.main",
          },
          "& .Mui-disabled": {
            textAlign: "center",
            justifyContent: "center",
            alignContent: "center",
            webkitTextFillColor: "colorWhite.main",
          },
        }}
        noValidate
        autoComplete="off"
      >
        <S.GridContainer>
          <div>№</div>
          <div>Nom</div>
          <div>Prénom</div>
          <div>Pseudonim</div>
          <div>Email</div>
          <div>Role</div>
          <div>Modifier</div>
          <div>Delete</div>
        </S.GridContainer>
        {userdata.map((item, index) => (
          <S.GridContainer key={index}>
            <div>{index + 1}</div>
            <S.TextFieldContainer>
              <TextField
                variant="standard"
                type="text"
                name="nom"
                value={editedData[item.id]?.nom || item?.nom}
                disabled={disabledId === item?.id.toString() ? false : true}
                onChange={(e) => onInputChange(e, item?.id)}
              />
            </S.TextFieldContainer>
            <S.TextFieldContainer>
              <TextField
                variant="standard"
                type="text"
                fullWidth
                name="prenom"
                value={editedData[item.id]?.prenom || item?.prenom}
                disabled={disabledId === item?.id.toString() ? false : true}
                onChange={(e) => onInputChange(e, item?.id)}
              />
            </S.TextFieldContainer>
            <S.TextFieldContainer>
              <TextField
                variant="standard"
                type="text"
                fullWidth
                name="nickname"
                value={editedData[item.id]?.nickname || item?.nickname}
                disabled={disabledId === item?.id.toString() ? false : true}
                onChange={(e) => onInputChange(e, item?.id)}
              />
            </S.TextFieldContainer>
            <S.TextFieldContainer>
              <TextField
                variant="standard"
                type="text"
                fullWidth
                name="email"
                value={editedData[item.id]?.email || item?.email}
                disabled={disabledId === item?.id.toString() ? false : true}
                onChange={(e) => onInputChange(e, item?.id)}
              />
            </S.TextFieldContainer>
            <S.TextFieldContainer>
              <TextField
                variant="standard"
                select
                type="text"
                fullWidth
                name="role"
                value={editedData[item.id]?.role || item?.role}
                disabled={disabledId === item?.id.toString() ? false : true}
                onChange={(e) => onInputChange(e, item?.id)}
              >
                {userRolessArray?.map((item1, index) => (
                  <MenuItem key={index} value={item1}>
                    {item1}
                  </MenuItem>
                ))}
              </TextField>
            </S.TextFieldContainer>

            <div>
              <S.ButtonMod onClick={() => handlePut(item?.id.toString())}>
                Modifier
              </S.ButtonMod>
            </div>
            <div>
              <S.ButtonMod onClick={() => handleDelete(item?.id)}>
                DELETE
              </S.ButtonMod>
            </div>
          </S.GridContainer>
        ))}
      </Box>
      <FormProduits />
      <FormProduitsList />
    </S.MainContainer>
  );
};

export default Admin;
