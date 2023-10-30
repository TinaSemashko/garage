import { Typography } from "@mui/material";
import FormContact from "../components/formContact";
import * as S from "./contact.styled";

const Contact: React.FC = () => {
  return (
    <S.MainContainer>
      <Typography variant="h1" className="text12" sx={{ opacity: 0.8 }}>
        Contactez-nous
      </Typography>
      <FormContact />
    </S.MainContainer>
  );
};

export default Contact;
