import { styled } from "@mui/material/styles";

export const MainContainer = styled("div")`
  padding-top: 10vh;
  text-align: center;
  color: ${({ theme }) => theme.palette.primary.main};
  @media (max-width: 750px) {
    align-items: center;
  }
`;

export const GridContainer = styled("div")`
  margin-top: 10%;
  margin-bottom: 10%;
  grid-gap: 1%;
  width: 100%;
  display: grid;
  grid-template-columns: 33% 33% 33%;
  grid-template-rows: auto;
  justify-items: center;
  align-items: center;

  @media (max-width: 750px) {
    grid-template-columns: 100vw;
    align-items: center;
  }
`;

export const Filter = styled("div")`
  text-align: center;
  @media (max-width: 750px) {
  }
`;

export const TextFieldContainer = styled("div")`
  display: block;
  width: 10vw;
  text-align: center;
  color: ${({ theme }) => theme.palette.colorWhite.main};

  @media (max-width: 750px) {
  }
`;

export const FlexContainer = styled("div")`
  display: flex;
  @media (max-width: 750px) {
  }
`;
