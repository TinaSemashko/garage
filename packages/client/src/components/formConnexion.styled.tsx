import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

export const MainContainer = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  background-color: ${({ theme }) => theme.palette.secondary.main};
  text-align: center;
  margin-left: 30%;
  margin-right: 30%;
  border-radius: 10px;
  margin-bottom: 5%;

  @media (max-width: 750px) {
    display: grid;
    grid-template-columns: 1fr;
    margin-left: 0%;
    margin-right: 0%;
  }
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

export const ButtonSubmit = styled(Button)`
  background-color: ${({ theme }) => theme.palette.primary.main};
  color: ${({ theme }) => theme.palette.colorWhite.main};
  border-radius: 10px;

  @media (max-width: 750px) {
  }
`;
