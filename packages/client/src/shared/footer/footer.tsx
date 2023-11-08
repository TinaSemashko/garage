import ImgContact from "../../images/logofooter.mp4";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Typography } from "@mui/material";
import FormHoraires from "../../components/formHoraires";

import * as S from "./footer.styled";

const Home: React.FC = () => {
  return (
    <S.MainContainer>
      <S.ContactContainer>
        <S.VideoFooter src={ImgContact} autoPlay loop muted />
        <FormHoraires />
        <S.TextContainer>
          <EmailIcon />
          v.parrot@gmail.com
          <LocalPhoneIcon />
          55.55.55.55.55
          <LocationOnIcon />
          <Typography
            variant="body1"
            sx={{ textAlign: { xs: "center", md: "left" } }}
          >
            14, avenue Duquesne 31000 Toulouse
          </Typography>
        </S.TextContainer>
      </S.ContactContainer>
      <Typography variant="h4" textAlign="center">
        © 2023 Garage V.Parrot. Tous Droits Réservés.
      </Typography>
    </S.MainContainer>
  );
};

export default Home;
