import { ChangeEvent, useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import { Box, Button, Input, MenuItem, Typography } from "@mui/material";
import { Validate, ValidationGroup } from "mui-validate";
import { useSnackbar } from "notistack";
import UpLoad from "../images/UpLoad.png";

import * as S from "./formProduits.styled";
import useApi from "../hooks/api/useApi";
import axios from "../axios";

type Produit = {
  title: string;
  type: string;
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

type ProduitsTypes = {
  id: Number;
  type: string;
};

type Roles = {
  id: Number;
  role: string;
};

const FormProduits: React.FC = () => {
  //const [produit, setProduit] = useState<Produit>();
  const [produitTypes, setProduitTypes] = useState<ProduitsTypes[]>();
  const [selectedType, setSelectedType] = useState("");
  const [dataUrl, setDataUrl] = useState(UpLoad);

  //list
  const [produitdata, setProduitdata] = useState<Produit[]>([]);
  const [disabledId, setDisabledId] = useState("");
  const [editedData, setEditedData] = useState<{
    [key: string]: {
      title: string;
      type: string;
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
    title: "",
    type: "",
    annee: "",
    prix: "",
    kilometrage: "",
    marque: "",
    modele: "",
    puissance_fiscale: "",
    puissance_motor: "",
    boite_vitesse: "",
    image: "",
  });
  const [produitId, setProduitId] = useState(0);

  // const {
  //   title,
  //   type,
  //   annee,
  //   prix,
  //   kilometrage,
  //   marque,
  //   modele,
  //   puissance_fiscale,
  //   puissance_motor,
  //   boite_vitesse,
  //   image,
  //  } = produit;

  const onInputChangeList = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    itemId: number
  ) => {
    setProduit({
      ...produit,
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

  const onInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    // setProduit({ ...produit, [event.target?.name]: event.target?.value });
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedType(event.target.value as string);
    // setProduit({ ...produit, type: selectedType });
    // produit.push(type);
  };

  useEffect(() => {
    if (produitTypes !== undefined) console.log(produitTypes);

    const fetchGetTypes = async () => {
      await axios
        .get(`types`)
        .then((response) => {
          setProduitTypes(response.data.results[0]);
        })
        .catch((err) => {
          console.error(err);
        });
    };

    fetchGetTypes();
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
      const base64Data = await convertToBase64(event.target.files[0]);
      setDataUrl(URL.createObjectURL(event.target.files[0]));
      // setProduit({ ...produit, image: base64Data });
    }
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
            Ajouter un produit
          </Typography>
          <br />

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
            <TextField
              required
              type="text"
              placeholder="Tile"
              name="title"
              // value={title}
              onChange={(e) => onInputChange(e)}
            />

            <TextField
              id="outlined-select-role"
              select
              label="Select"
              required
              type="text"
              placeholder="Type"
              name="type"
              value={selectedType}
              onChange={handleChange}
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
              // value={annee}
              onChange={(e) => onInputChange(e)}
            />

            <TextField
              required
              type="text"
              placeholder="Prix"
              name="prix"
              // value={prix}
              onChange={(e) => onInputChange(e)}
            />
            <br />
            <TextField
              required
              type="text"
              placeholder="Kilometrage"
              name="kilometrage"
              // value={kilometrage}
              onChange={(e) => onInputChange(e)}
            />

            <TextField
              required
              type="text"
              placeholder="Marque"
              name="marque"
              // value={marque}
              onChange={(e) => onInputChange(e)}
            />
            <br />
            <TextField
              required
              type="text"
              placeholder="Modele"
              name="modele"
              // value={modele}
              onChange={(e) => onInputChange(e)}
            />

            <TextField
              required
              type="text"
              placeholder="Puissance fiscale"
              name="puissance_fiscale"
              // value={puissance_fiscale}
              onChange={(e) => onInputChange(e)}
            />
            <br />
            <TextField
              required
              type="text"
              placeholder="Puissance motor"
              name="puissance_motor"
              // value={puissance_motor}
              onChange={(e) => onInputChange(e)}
            />

            <TextField
              required
              type="text"
              placeholder="Boite vitesse"
              name="boite_vitesse"
              // value={boite_vitesse}
              onChange={(e) => onInputChange(e)}
            />
            <br />
            <S.ButtonSubmit
              type="submit"
              //   disabled={validationForm ? false : true}
              color="primary"
            >
              Submit
            </S.ButtonSubmit>
          </Box>
          <div>
            <S.ButtonUpload variant="contained">
              <Input
                style={{ display: "none" }}
                type="file"
                hidden
                onChange={handleUpload}
                name="userphoto"
              />
            </S.ButtonUpload>
            <Typography
              variant="h6"
              sx={{
                color: "colorWhite.main",
              }}
            >
              Choisissez votre image
            </Typography>
          </div>
        </>
      </ValidationGroup>
    </S.MainContainer>
  );
};

export default FormProduits;
