import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

export const MainContainer = styled("div")`
  @media (max-width: 750px) {
  }
`;
export const GridContainer = styled("div")`
  width: 100%;
  display: grid;
  grid-template-columns: 2% 8.5% 8.5% 8.5% 8.5% 8.5% 8.5% 8.5% 8.5% 8.5% 8.5% 6% 6%;
  grid-template-rows: auto;
  justify-items: center;
  align-items: center;
  color: ${({ theme }) => theme.palette.colorWhite.main};

  @media (max-width: 750px) {
    /* grid-template-columns: 100vw; */
    align-items: center;
    font-size: 0.5rem;
  }
`;

export const TextFieldContainer = styled("div")`
  display: block;
  width: 100%;
  text-align: center;
  color: ${({ theme }) => theme.palette.colorWhite.main};

  @media (max-width: 750px) {
  }
`;

export const Admin = styled("div")<{ show: boolean }>`
  display: ${({ show }) => (show ? "block" : "none")};

  @media (max-width: 750px) {
  }
`;

export const ButtonMod = styled(Button)`
  background-color: ${({ theme }) => theme.palette.primary.main};
  color: ${({ theme }) => theme.palette.secondary.main};
  border-radius: 10px;

  @media (max-width: 750px) {
    width: 5vw;
    height: 2vh;
    font-size: 0.5rem;
  }
`;
