import { useEffect, useState, useContext } from "react";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router";
import { MenuItem, MenuList } from "@mui/material";
import { Routes } from "../app/routes";

import * as S from "./cardProduits.styled";

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

type Props = {
  element?: Produit;
  hidden?: boolean;
};
const CardProduction: React.FC<Props> = ({ element, hidden = false }) => {
  const [dataUrl, setDataUrl] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (element?.image) {
      setDataUrl(`data:image/jpeg;base64,${element.image}`);
    }
  }, [element]);

  const openCard = (item: Produit | undefined) => {
    console.log(item);
    if (item !== undefined) {
      item.image = dataUrl;

      localStorage.setItem("produit", JSON.stringify(item));

      navigate(Routes.cardproduit);
    }
  };

  if (hidden) return null;

  return (
    <S.MainContainer
      sx={{
        width: { xs: "90vw", md: "50vw" },
        height: { xs: "60vh", md: "100%" },
        backgroundColor:
          "linear-gradient(180deg, rgba(123,201,188,0.8548553210346639) 47%, rgba(16,86,83,1) 100%);",
      }}
    >
      <CardHeader title={element?.title} subheader={element?.type} />
      <CardMedia
        component="img"
        height="196"
        image={dataUrl}
        alt={element?.title}
      />
      <CardContent>
        <Typography variant="h4" component="div">
          Modele: {element?.modele}
        </Typography>
        <Typography variant="h4" component="div">
          Marque: {element?.marque}
        </Typography>
        <MenuList
          id="composition-menu"
          aria-labelledby="composition-button"
          sx={{ width: "20vw" }}
        >
          <MenuItem
            sx={{
              fontSize: { xs: "0.7rem", md: "1.5rem" },
              py: 0,
              minHeight: { xs: "0", md: "48" },
            }}
          >
            Annee: {element?.annee}
          </MenuItem>
          <MenuItem
            sx={{
              fontSize: { xs: "0.7rem", md: "1.5rem" },
              py: 0,
              minHeight: { xs: "0", md: "48" },
            }}
          >
            Prix: {element?.prix}
          </MenuItem>
          <MenuItem
            sx={{
              fontSize: { xs: "0.7rem", md: "1.5rem" },
              py: 0,
              minHeight: { xs: "0", md: "48" },
            }}
          >
            Kilometrage: {element?.kilometrage}
          </MenuItem>
          <MenuItem
            sx={{
              fontSize: { xs: "0.7rem", md: "1.5rem" },
              py: 0,
              minHeight: { xs: "0", md: "48" },
            }}
          >
            Puissance fiscale: {element?.puissance_fiscale}
          </MenuItem>
          <MenuItem
            sx={{
              fontSize: { xs: "0.7rem", md: "1.5rem" },
              py: 0,
              minHeight: { xs: "0", md: "48" },
            }}
          >
            Puissance motor: {element?.puissance_motor}
          </MenuItem>
          <MenuItem
            sx={{
              fontSize: { xs: "0.7rem", md: "1.5rem" },
              py: 0,
              minHeight: { xs: "0", md: "48" },
            }}
          >
            Boite vitesse: {element?.boite_vitesse}
          </MenuItem>
        </MenuList>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          onClick={() => {
            openCard(element);
          }}
        >
          Learn More
        </Button>
      </CardActions>
    </S.MainContainer>
  );
};

export default CardProduction;
