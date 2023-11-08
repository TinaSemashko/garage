import { Typography } from "@mui/material";
import FormContact from "../components/formContact";
import { APIKey } from "../config";
import ImgContact from "../images/garage.jpg";

import * as S from "./contact.styled";

const Contact: React.FC = () => {
  const APIUrl = `https://www.mapquestapi.com/staticmap/v5/map?locations=Toulouse,Fr&size=1100,300@2x&defaultMarker=marker-start-sm&key=${APIKey}`;

  return (
    <S.MainContainer>
      <S.FlexContainer>
        <S.Img src={ImgContact} alt="contact" />
        <FormContact />
      </S.FlexContainer>

      <S.Carte src={APIUrl} />
    </S.MainContainer>
  );
};

export default Contact;
