import ImgContact from "../../images/logofooter.mp4";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LocationOnIcon from "@mui/icons-material/LocationOn";

import * as S from "./footer.styled";

const Home: React.FC = () => {
  return (
    <S.MainContainer>
      <S.ContactContainer>
        <S.VideoFooter src={ImgContact} autoPlay loop muted />
        <div> © 2023 Garage V.Parrot. Tous Droits Réservés.</div>
        <S.TextContainer>
          <EmailIcon /> v.parrot@gmail.com
          <LocalPhoneIcon /> 55.55.55.55.55
          <LocationOnIcon /> 14, avenue Duquesne 31000 Toulouse
        </S.TextContainer>
      </S.ContactContainer>
    </S.MainContainer>
  );
};

export default Home;
