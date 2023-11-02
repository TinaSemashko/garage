import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import img from "../images/fon_admin.jpg";

export const MainContainer = styled("div")`
  padding-top: 15vh;
  padding-bottom: 15vh;
  display: block;
  text-align: center;
  position: relative;
  min-height: 100vh;
  color: ${({ theme }) => theme.palette.colorWhite.main};

  &::before {
    content: "";
    background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
      url(${img}) no-repeat center center;

    background-size: cover;
    opacity: 0.4;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -1;
  }

  @media (max-width: 750px) {
  }
`;

export const GridContainer = styled("div")`
  width: 95%;
  display: grid;
  grid-template-columns: 5% 15% 15% 15% 15% 15% 10% 10%;
  grid-template-rows: auto;
  justify-items: center;
  align-items: center;
  color: ${({ theme }) => theme.palette.colorWhite.main};

  @media (max-width: 750px) {
    grid-template-columns: 100vw;
    align-items: center;
  }
`;

export const TextFieldContainer = styled("div")`
  display: block;
  /*  justify-content: "center"; */
  text-align: center;
  color: ${({ theme }) => theme.palette.colorWhite.main};

  .MuiTextField-root.Mui-selected {
    color: red;
  }

  .MuiOutlinedInput-root.Mui-error {
    color: red;
  }

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
  }
`;
