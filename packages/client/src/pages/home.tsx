import { Button, Typography } from "@mui/material";
import * as S from "./home.styled";

const Home: React.FC = () => {
  return (
    <S.MainContainer>
      <Typography variant="h1" className="text12" sx={{ opacity: 0.8 }}>
        Test
      </Typography>
    </S.MainContainer>
  );
};

export default Home;
