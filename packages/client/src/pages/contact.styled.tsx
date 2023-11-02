import { styled } from "@mui/material/styles";

export const MainContainer = styled("div")`
  @media (max-width: 750px) {
  }
`;

export const FlexContainer = styled("div")`
  padding-top: 10vh;
  display: flex;
  justify-items: space-evenly;

  @media (max-width: 750px) {
    align-items: center;
  }
`;

export const Img = styled("img")`
  width: 50vw;

  @media (max-width: 750px) {
    width: 100vw;
  }
`;
