import { Typography } from "@mui/material";
import CardProduction from "../components/cardProduction";

import * as S from "./produits.styled";

const Produits: React.FC = () => {
  return (
    <S.MainContainer>
      <Typography variant="h1" className="text12" sx={{ opacity: 0.8 }}>
        Les voitures d'occasion
      </Typography>
      <CardProduction />
    </S.MainContainer>
  );
};

export default Produits;
