import { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import { Box, MenuItem, Typography } from "@mui/material";
import { useSnackbar } from "notistack";
import useApiServce from "../hooks/service/useAPIservice";

import * as S from "./formProduitsList.styled";

type Produit = {
  id: number;
  title: string;
  type: string;
  id_type: number;
  annee: string;
  prix: string;
  kilometrage: string;
  marque: string;
  id_marque: number;
  modele: string;
  id_modele: number;
  puissance_fiscale: string;
  puissance_motor: string;
  boite_vitesse: string;
  image: string;
};

type ProduitsTypes = {
  id: Number;
  type: string;
};

type ProduitsModele = {
  id: Number;
  id_marque: number;
  modele: string;
};

type ProduitsMarque = {
  id: Number;
  marque: string;
};

const FormProduits: React.FC = () => {
  const { enqueueSnackbar } = useSnackbar();
  const { request, setError } = useApiServce();
  const [produitTypes, setProduitTypes] = useState<ProduitsTypes[]>();
  const [produitModel, setProduitModel] = useState<ProduitsModele[]>();
  const [produitMarque, setProduitMarque] = useState<ProduitsMarque[]>();
  const [produitdata, setProduitdata] = useState<Produit[]>([]);
  const [disabledId, setDisabledId] = useState("");
  const [editedData, setEditedData] = useState<{
    [key: string]: {
      title: string;
      type: string;
      id_type: number;
      annee: string;
      prix: string;
      kilometrage: string;
      marque: string;
      modele: string;
      puissance_fiscale: string;
      puissance_motor: string;
      boite_vitesse: string;
      image: string;
    };
  }>({});
  const [produit, setProduit] = useState<Produit>({
    id: 0,
    title: "",
    type: "",
    id_type: 0,
    annee: "",
    prix: "",
    kilometrage: "",
    marque: "",
    id_marque: 0,
    modele: "",
    id_modele: 0,
    puissance_fiscale: "",
    puissance_motor: "",
    boite_vitesse: "",
    image: "",
  });
  const [produitId, setProduitId] = useState(0);
  const [produitIdDel, setProduitIdDel] = useState(0);

  console.log(produitdata);

  const showError = (err: any, mess: string) => {
    enqueueSnackbar(mess, { variant: "error" });
    console.error(err);
  };

  const onInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    itemId: number
  ) => {
    if (event.target?.name === "type" && produitTypes !== undefined) {
      setProduit({
        ...produit,
        id_marque: produitTypes.findIndex(
          (item) => item.type === event.target?.value
        ),
        type: event.target?.value,
      });
    } else if (event.target?.name === "marque" && produitMarque !== undefined) {
      setProduit({
        ...produit,
        id_marque: produitMarque.findIndex(
          (item) => item.marque === event.target?.value
        ),
        marque: event.target?.value,
      });
    } else if (event.target?.name === "modele" && produitModel !== undefined)
      setProduit({
        ...produit,
        id_modele: produitModel.findIndex(
          (item) => item.modele === event.target?.value
        ),
        modele: event.target?.value,
      });
    else setProduit({ ...produit, [event.target?.name]: event.target?.value });
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
      request("GET", `products`, params, setProduitdata);
    } catch (error: any) {
      setError(error.message || error);
      showError(error, error.message);
    }
  }, []);

  useEffect(() => {
    const params = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      request("GET", `types`, params, setProduitTypes);
    } catch (error: any) {
      setError(error.message || error);
      showError(error, error.message);
    }
  }, []);

  useEffect(() => {
    const params = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      request("GET", `modeles`, params, setProduitModel);
    } catch (error: any) {
      setError(error.message || error);
      showError(error, error.message);
    }
  }, []);

  useEffect(() => {
    const params = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      request("GET", `marques`, params, setProduitMarque);
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
      request("DELETE", `delproduct`, params, setProduitIdDel);
    } catch (error: any) {
      setError(error.message || error);
      showError(error, error.message);
    }
  };

  useEffect(() => {
    if (produitIdDel)
      enqueueSnackbar("Le produit est deleté avec succès", {
        variant: "success",
      });
  }, [produitIdDel]);

  useEffect(() => {
    if (produitId)
      enqueueSnackbar("Le produit est modifié avec succès", {
        variant: "success",
      });
  }, [produitId]);

  const handlePut = (id: string) => {
    if (disabledId === "") setDisabledId(id);
    else {
      const params = {
        data: produit,
        id: id,
        headers: {
          "Content-Type": "application/json",
        },
      };
      if (Object.keys(editedData).length) {
        try {
          request("PUT", `updproduct`, params, setProduitId);
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
      <Typography variant="h3">Liste de produits</Typography>
      <br />
      <br />
      <Box
        component="form"
        sx={{
          color: "colorWhite.main",
          "& .MuiTextField-root": {
            m: 1,
            display: "inline-block",
            width: { xs: "10vw", md: "7vw" },
            textAlign: "center",
            justifyContent: "center",
            color: "colorWhite.main",
            fontSize: { xs: "0.4rem", md: "1rem" },
          },

          "& .MuiInput-root": {
            textAlign: "center",
            justifyContent: "center",
            alignContent: "center",
            color: "colorWhite.main",
            fontSize: { xs: "0.4rem", md: "1rem" },
          },
          "& .Mui-disabled": {
            textAlign: "center",
            justifyContent: "center",
            alignContent: "center",
            webkitTextFillColor: "colorWhite.main",
            fontSize: { xs: "0.4rem", md: "1rem" },
          },
        }}
        noValidate
        autoComplete="off"
      >
        <S.GridContainer>
          <div>№</div>
          <div>Titre</div>
          <div>Type</div>
          <div>Annee</div>
          <div>Prix</div>
          <div>Kilometrage</div>
          <div>Marque</div>
          <div>Modele</div>
          <div>Puiss. fisc.</div>
          <div>Puiss. motor</div>
          <div>Boite vit.</div>
          <div>Modif</div>
          <div>Delete</div>
        </S.GridContainer>
        {produitdata.slice(93, 100).map((item, index) => (
          <S.GridContainer key={index}>
            <div>{index + 1}</div>
            <S.TextFieldContainer>
              <TextField
                variant="standard"
                type="text"
                name="title"
                value={editedData[item.id]?.title || item?.title}
                disabled={disabledId === item?.id.toString() ? false : true}
                onChange={(e) => onInputChange(e, item?.id)}
              />
            </S.TextFieldContainer>
            <S.TextFieldContainer>
              <TextField
                select
                variant="standard"
                type="text"
                fullWidth
                name="type"
                value={editedData[item.id]?.type || item?.type}
                disabled={disabledId === item?.id.toString() ? false : true}
                onChange={(e) => onInputChange(e, item?.id)}
              >
                {produitTypes?.map((item1, index) => (
                  <MenuItem key={index} value={item1.type}>
                    {item1.type}
                  </MenuItem>
                ))}
              </TextField>
            </S.TextFieldContainer>
            <S.TextFieldContainer>
              <TextField
                variant="standard"
                type="text"
                fullWidth
                name="annee"
                value={editedData[item.id]?.annee || item?.annee}
                disabled={disabledId === item?.id.toString() ? false : true}
                onChange={(e) => onInputChange(e, item?.id)}
              />
            </S.TextFieldContainer>
            <S.TextFieldContainer>
              <TextField
                variant="standard"
                type="text"
                fullWidth
                name="prix"
                value={editedData[item.id]?.prix || item?.prix}
                disabled={disabledId === item?.id.toString() ? false : true}
                onChange={(e) => onInputChange(e, item?.id)}
              />
            </S.TextFieldContainer>
            <S.TextFieldContainer>
              <TextField
                variant="standard"
                type="text"
                fullWidth
                name="kilometrage"
                value={editedData[item.id]?.kilometrage || item?.kilometrage}
                disabled={disabledId === item?.id.toString() ? false : true}
                onChange={(e) => onInputChange(e, item?.id)}
              />
            </S.TextFieldContainer>
            <S.TextFieldContainer>
              <TextField
                select
                variant="standard"
                type="text"
                name="marque"
                value={editedData[item.id]?.marque || item?.marque}
                disabled={disabledId === item?.id.toString() ? false : true}
                onChange={(e) => onInputChange(e, item?.id)}
              >
                {produitMarque?.map((item1, index) => (
                  <MenuItem key={index} value={item1.marque}>
                    {item1.marque}
                  </MenuItem>
                ))}
              </TextField>
            </S.TextFieldContainer>
            <S.TextFieldContainer>
              <TextField
                select
                variant="standard"
                type="text"
                fullWidth
                name="model"
                value={editedData[item.id]?.modele || item?.modele}
                disabled={disabledId === item?.id.toString() ? false : true}
                onChange={(e) => onInputChange(e, item?.id)}
              >
                {produitModel?.map((item1, index) => (
                  <MenuItem key={index} value={item1.modele}>
                    {item1.modele}
                  </MenuItem>
                ))}
              </TextField>
            </S.TextFieldContainer>
            <S.TextFieldContainer>
              <TextField
                variant="standard"
                type="text"
                fullWidth
                name="puissance_fiscale"
                value={
                  editedData[item.id]?.puissance_fiscale ||
                  item?.puissance_fiscale
                }
                disabled={disabledId === item?.id.toString() ? false : true}
                onChange={(e) => onInputChange(e, item?.id)}
              />
            </S.TextFieldContainer>
            <S.TextFieldContainer>
              <TextField
                variant="standard"
                type="text"
                fullWidth
                name="puissance_motor"
                value={
                  editedData[item.id]?.puissance_motor || item?.puissance_motor
                }
                disabled={disabledId === item?.id.toString() ? false : true}
                onChange={(e) => onInputChange(e, item?.id)}
              />
            </S.TextFieldContainer>
            <S.TextFieldContainer>
              <TextField
                variant="standard"
                type="text"
                fullWidth
                name="boite_vitesse"
                value={
                  editedData[item.id]?.boite_vitesse || item?.boite_vitesse
                }
                disabled={disabledId === item?.id.toString() ? false : true}
                onChange={(e) => onInputChange(e, item?.id)}
              />
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
    </S.MainContainer>
  );
};

export default FormProduits;
