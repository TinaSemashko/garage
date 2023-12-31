import { TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

export const MainContainer = styled("div")`
  padding-top: 10vh;
  text-align: center;
  color: ${({ theme }) => theme.palette.primary.main};
  display: grid;
  grid-template-columns: 20% 80%;

  @media (max-width: 750px) {
    grid-template-columns: 100%;
    align-items: center;
  }
`;

export const GridContainer = styled("div")`
  margin-top: 10%;
  margin-bottom: 10%;
  grid-gap: 1%;
  max-width: 100%;
  display: grid;
  grid-template-columns: 33% 33% 33%;
  grid-template-rows: auto;
  justify-items: center;
  align-items: center;

  @media (max-width: 750px) {
    grid-template-columns: 100vw;
    align-items: center;
    grid-gap: 0%;
  }
`;

export const Filter = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  margin-left: 2%;
  width: 25%;
  @media (max-width: 750px) {
    width: 100%;
  }
`;

export const TextFieldContainer = styled("div")`
  display: block;
  width: 15vw;
  text-align: center;
  color: ${({ theme }) => theme.palette.colorWhite.main};

  @media (max-width: 750px) {
    width: 80vw;
  }
`;

export const FlexContainer = styled("div")`
  display: flex;
  justify-content: center;

  @media (max-width: 750px) {
  }
`;
