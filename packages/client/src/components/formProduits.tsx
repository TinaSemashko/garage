import { ChangeEvent, useEffect, useState, useContext } from "react";
import TextField from "@mui/material/TextField";
import { Box, Button, Input, MenuItem, Typography } from "@mui/material";
import { Validate, ValidationGroup } from "mui-validate";
import { useSnackbar } from "notistack";
import UpLoad from "../images/UpLoad.png";
import AuthContext from "../store/auth/AuthContextProvider";
import useApiServce from "../hooks/service/useAPIservice";

import * as S from "./formProduits.styled";

type Produit = {
  title: string;
  id_type: number;
  annee: string;
  prix: string;
  kilometrage: string;
  id_marque: number;
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
  const { authState } = useContext(AuthContext);
  const { request, setError } = useApiServce();
  const [produitTypes, setProduitTypes] = useState<ProduitsTypes[]>();
  const [produitModel, setProduitModel] = useState<ProduitsModele[]>();
  const [produitMarque, setProduitMarque] = useState<ProduitsMarque[]>();
  const [type, setType] = useState<ProduitsTypes>();
  const [marque, setMarque] = useState<ProduitsMarque>();
  const [modele, setModele] = useState<ProduitsModele>();
  const [dataUrl, setDataUrl] = useState(UpLoad);
  const [produit, setProduit] = useState<Produit>({
    title: "",
    id_type: 0,
    annee: "",
    prix: "",
    kilometrage: "",
    id_marque: 0,
    id_modele: 0,
    puissance_fiscale: "",
    puissance_motor: "",
    boite_vitesse: "",
    image: "",
  });
  const [produitId, setProduitId] = useState(0);

  const {
    title,
    id_type,
    annee,
    prix,
    kilometrage,
    id_marque,
    puissance_fiscale,
    puissance_motor,
    boite_vitesse,
    image,
  } = produit;

  const showError = (err: any, mess: string) => {
    enqueueSnackbar(mess, { variant: "error" });
    console.error(err);
  };

  const onInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (event.target?.name === "type" && produitTypes !== undefined) {
      setProduit({
        ...produit,
        id_type:
          produitTypes.findIndex((item) => item.type === event.target?.value) +
          1,
      });
    } else if (event.target?.name === "marque" && produitMarque !== undefined) {
      setProduit({
        ...produit,
        id_marque:
          produitMarque.findIndex(
            (item) => item.marque === event.target?.value
          ) + 1,
      });
    } else if (event.target?.name === "modele" && produitModel !== undefined)
      setProduit({
        ...produit,
        id_modele:
          produitModel.findIndex(
            (item) => item.modele === event.target?.value
          ) + 1,
      });
    else setProduit({ ...produit, [event.target?.name]: event.target?.value });
  };

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

  const convertToBase64 = (file: File) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const handleUpload = async (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const base64Data = (await convertToBase64(
        event.target.files[0]
      )) as string;
      setDataUrl(URL.createObjectURL(event.target.files[0]));
      setProduit({ ...produit, image: base64Data });
    }
  };

  const handlePost = () => {
    if (Object.keys(produit).length) {
      const formData = new FormData();
      formData.append("title", produit.title);
      formData.append("id_type", produit.id_type.toString());
      formData.append("annee", produit.annee);
      formData.append("prix", produit.prix);
      formData.append("kilometrage", produit.kilometrage);
      formData.append("id_marque", produit.id_marque.toString());
      formData.append("id_modele", produit.id_modele.toString());
      formData.append("puissance_fiscale", produit.puissance_fiscale);
      formData.append("puissance_motor", produit.puissance_motor);
      formData.append("boite_vitesse", produit.boite_vitesse);
      formData.append("image", produit.image);

      try {
        request("POST", `createproduct`, formData, setProduitId);
      } catch (error: any) {
        console.error(error.message || error);
        setError(error.message || error);
        showError(error, error.message);
      }
    } else
      enqueueSnackbar("Aucun changement effectué", {
        variant: "info",
      });
  };

  useEffect(() => {
    if (produitId)
      enqueueSnackbar("Produit est créé avec succès", {
        variant: "success",
      });
  }, [produitId]);

  return (
    <S.MainContainer>
      <ValidationGroup>
        <>
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": {
                m: 1,
                width: { xs: "30vw", md: "15vw" },
                borderRadius: "10px",
                borderBlockColor: "colorWhite.main",
                backgroundColor: "colorWhite.main",
                boxShadow: " 0px 4px 4px gray inset",
              },
            }}
            noValidate
            autoComplete="off"
          >
            <Typography
              variant="h4"
              sx={{
                color: "colorWhite.main",
              }}
            >
              Ajouter un produit
            </Typography>
            <br />
            <TextField
              required
              type="text"
              placeholder="Tile"
              name="title"
              value={title}
              onChange={(e) => onInputChange(e)}
            />

            <TextField
              id="outlined-select-role"
              select
              label="Select type"
              required
              type="text"
              placeholder="Type"
              name="type"
              value={type}
              onChange={(e) => onInputChange(e)}
            >
              {produitTypes?.map((item, index) => (
                <MenuItem key={index} value={item.type}>
                  {item.type}
                </MenuItem>
              ))}
            </TextField>
            <br />
            <TextField
              required
              type="text"
              placeholder="Annee"
              name="annee"
              value={annee}
              onChange={(e) => onInputChange(e)}
            />

            <TextField
              required
              type="text"
              placeholder="Prix"
              name="prix"
              value={prix}
              onChange={(e) => onInputChange(e)}
            />
            <br />
            <TextField
              required
              type="text"
              placeholder="Kilometrage"
              name="kilometrage"
              value={kilometrage}
              onChange={(e) => onInputChange(e)}
            />

            <TextField
              required
              select
              label="Select marque"
              type="text"
              name="marque"
              value={marque}
              onChange={(e) => onInputChange(e)}
            >
              {produitMarque?.map((item, index) => (
                <MenuItem key={index} value={item.marque}>
                  {item.marque}
                </MenuItem>
              ))}
            </TextField>
            <br />
            <TextField
              required
              select
              type="text"
              label="Select modele"
              name="modele"
              value={modele}
              onChange={(e) => onInputChange(e)}
            >
              {produitModel
                ?.filter((el) => el.id_marque === produit.id_marque)
                .map((item, index) => (
                  <MenuItem key={index} value={item.modele}>
                    {item.modele}
                  </MenuItem>
                ))}
            </TextField>
            <TextField
              required
              type="text"
              placeholder="Puissance fiscale"
              name="puissance_fiscale"
              value={puissance_fiscale}
              onChange={(e) => onInputChange(e)}
            />
            <br />
            <TextField
              required
              type="text"
              placeholder="Puissance motor"
              name="puissance_motor"
              value={puissance_motor}
              onChange={(e) => onInputChange(e)}
            />

            <TextField
              required
              type="text"
              placeholder="Boite vitesse"
              name="boite_vitesse"
              value={boite_vitesse}
              onChange={(e) => onInputChange(e)}
            />
            <br />
            <S.ButtonSubmit
              type="button"
              //   disabled={validationForm ? false : true}
              color="primary"
              onClick={() => handlePost()}
            >
              Submit
            </S.ButtonSubmit>
          </Box>
        </>
      </ValidationGroup>
      <S.UploadContainer>
        <S.DivUpload>
          <S.ImgProduit src={dataUrl} alt="img produit" width="100vw" />
          <Input
            sx={{
              opacity: "0",
              gridColumn: "1",
              gridRow: "1",
            }}
            type="file"
            onChange={handleUpload}
            name="imageproduit"
          />
        </S.DivUpload>
        <Typography
          variant="h6"
          sx={{
            color: "colorWhite.main",
          }}
        >
          Choisissez votre image
        </Typography>
      </S.UploadContainer>
    </S.MainContainer>
  );
};

export default FormProduits;
