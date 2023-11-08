import { useEffect, useState, useContext } from "react";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";
import AuthContext from "../store/auth/AuthContextProvider";
import Rating from "@mui/material/Rating";
import { useSnackbar } from "notistack";
import { Box, Button, MenuItem, MenuList, TextField } from "@mui/material";
import axios from "../axios";

import * as S from "./cardProduit.styled";

type Produit = {
  id: number;
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
  imgUrl: string;
};

type Avis = {
  message: string;
  note: number;
  id_user: number;
  id_produit: number;
};

type Avises = {
  message: string;
  note: number;
  nickname: string;
  id_produit: number;
};

const CardProduit: React.FC = () => {
  const { authState } = useContext(AuthContext);
  const { enqueueSnackbar } = useSnackbar();
  const [produit, setProduit] = useState<Produit>();

  const [newAvisId, setNewAvisId] = useState("");
  const [avises, setAvises] = useState<Avises[]>([]);
  const [avis, setAvis] = useState<Avis>({
    message: "",
    note: 0,
    id_user: 0,
    id_produit: 0,
  });

  const { message, note, id_user, id_produit } = avis;
  const prod = JSON.parse(localStorage.getItem("produit") as string);

  useEffect(() => {
    if (prod !== undefined) {
      setProduit({
        id: prod?.id,
        title: prod?.title,
        type: prod?.type,
        annee: prod?.annee,
        prix: prod?.prix,
        kilometrage: prod?.kilometrage,
        marque: prod?.marque,
        modele: prod?.modele,
        puissance_fiscale: prod?.puissance_fiscale,
        puissance_motor: prod?.puissance_motor,
        boite_vitesse: prod?.boite_vitesse,
        imgUrl: prod?.image,
      });

      setAvis({
        ...avis,
        id_produit: prod?.id as number,
        id_user: parseInt(authState.userId as string),
      });
    }
  }, []);

  const showError = (err: any, mess: string) => {
    enqueueSnackbar(mess, { variant: "error" });
    console.error(err);
  };

  const onInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setAvis({ ...avis, [event.target?.name]: event.target?.value });
  };

  useEffect(() => {
    if (newAvisId)
      enqueueSnackbar("Votre avis est ajouté avec succès", {
        variant: "success",
      });
  }, [newAvisId]);

  const fetchPost = async () => {
    const params = {
      data: avis,
    };
    const headers = {
      "x-access-token": authState.authToken,
    };
    await axios
      .post("createavis", params, { headers })
      .then((response) => setNewAvisId(response.data.results))
      .catch((err) => {
        showError(err, err.message);
      });
  };

  const addAvis = () => {
    console.log(avis);
    fetchPost();
  };

  const fetchGet = async () => {
    const headers = {
      "x-access-token": authState.authToken,
    };
    await axios
      .get(`geteavis/${prod?.id}`, { headers })
      .then((response) => {
        setAvises(response.data.results[0]);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    fetchGet();
    // localStorage.removeItem("produit");
  }, []);

  return (
    <S.MainContainer>
      <S.FlexContainer>
        <S.CardContainer>
          <CardHeader
            title={produit?.title}
            sx={{ color: "primary.main", fontSize: "8vh" }}
          />
          <CardMedia
            component="img"
            image={produit?.imgUrl}
            sx={{
              width: { xs: "90vw", md: "50vw" },
              height: { xs: "20vh", md: "70vh" },
            }}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Modele: {produit?.modele}
            </Typography>
            <Typography gutterBottom variant="h6" component="div">
              Marque: {produit?.marque}
            </Typography>
          </CardContent>
        </S.CardContainer>
        <S.TextContainer>
          <MenuList
            id="composition-menu"
            aria-labelledby="composition-button"
            sx={{ width: "20vw" }}
          >
            <MenuItem>
              <Typography gutterBottom variant="h5" component="div">
                Annee: {produit?.annee}
              </Typography>
            </MenuItem>
            <MenuItem>
              <Typography gutterBottom variant="h5" component="div">
                Prix: {produit?.prix}
              </Typography>
            </MenuItem>
            <MenuItem>
              <Typography gutterBottom variant="h5" component="div">
                Kilometrage: {produit?.kilometrage}
              </Typography>
            </MenuItem>
            <MenuItem>
              <Typography gutterBottom variant="h5" component="div">
                Puissance fiscale: {produit?.puissance_fiscale}
              </Typography>
            </MenuItem>
            <MenuItem>
              <Typography gutterBottom variant="h5" component="div">
                Puissance motor: {produit?.puissance_motor}
              </Typography>
            </MenuItem>
            <MenuItem>
              <Typography gutterBottom variant="h5" component="div">
                Boite vitesse: {produit?.boite_vitesse}
              </Typography>
            </MenuItem>
          </MenuList>

          <Box>
            <Typography component="legend">Avis</Typography>
            <Rating
              name="simple-controlled"
              value={note}
              disabled={!authState.isLoggedIn}
              onChange={(event, newValue) => {
                setAvis({
                  ...avis,
                  note: newValue === null ? 0 : (newValue as number),
                });
              }}
            />
          </Box>
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": {
                m: 1,
                width: { xs: "50vw", md: "25vw" },
                borderRadius: "10px",
                borderBlockColor: "colorWhite.main",
                backgroundColor: "colorWhite.main",
                boxShadow: " 0px 4px 4px gray inset",
              },
            }}
            noValidate
            autoComplete="off"
          >
            <S.BoxForm>
              <TextField
                required
                id="standard"
                type="text"
                fullWidth
                name="sujet"
                value={authState.nom}
                disabled
              />
              <TextField
                required
                id="standard"
                type="text"
                placeholder="Ecrivez votre message..."
                multiline
                rows={4}
                fullWidth
                name="message"
                value={message}
                onChange={(e) => onInputChange(e)}
                sx={{ width: { xs: "50vw", md: "25vw" } }}
                disabled={!authState.isLoggedIn}
              />
              <br />
              <br />
              <Button
                variant="contained"
                color="secondary"
                disabled={!authState.isLoggedIn}
                onClick={() => addAvis()}
                sx={{
                  color: "colorWhite.main",
                  backgroundColor: "primary.main",
                  borderRadius: "10px",
                  width: "10vw",
                }}
              >
                Valider
              </Button>
            </S.BoxForm>
          </Box>
        </S.TextContainer>
      </S.FlexContainer>
      <S.AvisContainer>
        {avises.map((item, index) => (
          <div>
            <Rating value={item.note} disabled />
            <Typography gutterBottom variant="h5" component="div">
              {item.nickname}:{item.message}
            </Typography>
          </div>
        ))}
      </S.AvisContainer>
    </S.MainContainer>
  );
};

export default CardProduit;
