import { styled } from "@mui/material/styles";

export const MainContainer = styled("div")`
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 750px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
  }
`;

export const Img = styled("img")`
  width: 50%;
  height: calc(100vh - 10vh);
  z-index: 1;

  @media (max-width: 750px) {
    width: 100%;
  }
`;

export const Col2 = styled("div")`
  width: 50%;
  background-color: ${({ theme }) => theme.palette.secondary.main};
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding-top: 4vh;
  z-index: 2;

  @media (max-width: 750px) {
    width: 100%;
  }
`;

export const ContForm = styled("div")`
  width: 55%;
  background-color: ${({ theme }) => theme.palette.secondary.main};
  text-align: center;
  border-radius: 5%;
`;

export const BoxForm = styled("div")`
  padding-top: 4vh;
  padding-bottom: 4vh;

  .lien-inscr {
    text-decoration: underline;
  }
`;

export const ContainerEmail = styled("div")`
  display: flex;
  justify-content: center;
`;
