import { Card } from "@mui/material";
import { styled } from "@mui/material/styles";

export const MainContainer = styled(Card)`
  margin-top: 5%;
  padding-top: 5%;
  padding-bottom: 10%;

  background: linear-gradient(
    180deg,
    rgba(216, 236, 232, 0.34505139946603647) 28%,
    rgba(122, 184, 181, 0.6335668056285014) 100%
  );

  @media (max-width: 750px) {
  }
`;

export const FlexContainer = styled("div")`
  display: flex;

  @media (max-width: 750px) {
  }
`;

export const CardContainer = styled("div")`
  width: 50vw;
  padding-left: 5%;

  @media (max-width: 750px) {
  }
`;

export const TextContainer = styled("div")`
  padding-top: 1%;
  padding-left: 10%;
  width: 50vw;
  font-size: 8vh;

  @media (max-width: 750px) {
  }
`;

export const BoxForm = styled("div")`
  padding-bottom: 4vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: start;
`;

export const AvisContainer = styled("div")`
  text-align: center;

  @media (max-width: 750px) {
  }
`;
