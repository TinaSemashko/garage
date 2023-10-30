import { styled } from "@mui/material/styles";

export const MainContainer = styled("div")`
  display: grid;
  grid-template-columns: 50vw 50vw;
  grid-template-rows: auto;
  justify-items: center;

  @media (max-width: 750px) {
    grid-template-columns: 100vw;
    align-items: center;
  }
`;
