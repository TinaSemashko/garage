import { useEffect, useState, useContext } from "react";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { MenuItem, MenuList } from "@mui/material";

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
  hidden: boolean;
};
const CardProduction: React.FC<Props> = ({ element, hidden = false }) => {
  const [dataUrl, setDataUrl] = useState("");

  useEffect(() => {
    if (element?.image) {
      setDataUrl(`data:image/jpeg;base64,${element.image}`);
    }
  }, [element]);

  if (hidden) return null;

  return (
    <S.MainContainer
      sx={{
        maxWidth: 345,
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
        <Typography gutterBottom variant="h5" component="div">
          Modele: {element?.modele}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          Marque: {element?.marque}
        </Typography>
        <MenuList
          id="composition-menu"
          aria-labelledby="composition-button"
          sx={{ width: "20vw" }}
        >
          <MenuItem> Annee: {element?.annee}</MenuItem>
          <MenuItem> Prix: {element?.prix}</MenuItem>
          <MenuItem> Kilometrage: {element?.kilometrage}</MenuItem>
          <MenuItem> Puissance fiscale: {element?.puissance_fiscale}</MenuItem>
          <MenuItem> Puissance motor: {element?.puissance_motor}</MenuItem>
          <MenuItem> Boite vitesse: {element?.boite_vitesse}</MenuItem>
        </MenuList>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </S.MainContainer>
  );
};

export default CardProduction;
