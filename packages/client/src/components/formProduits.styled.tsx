import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

export const MainContainer = styled("div")`
  display: flex;
  /* flex-direction: column; */
  justify-content: space-evenly;
  width: 100%;
  margin-top: 10vh;
  margin-bottom: 10vh;

  @media (max-width: 750px) {
  }
`;

export const ButtonSubmit = styled(Button)`
  background-color: ${({ theme }) => theme.palette.primary.main};
  color: ${({ theme }) => theme.palette.colorWhite.main};
  border-radius: 10px;

  @media (max-width: 750px) {
  }
`;

export const UploadContainer = styled("div")`
  text-align: center;
  padding-top: 10vh;
  @media (max-width: 750px) {
  }
`;

export const DivUpload = styled("div")`
  width: 10vw;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  text-align: center;

  @media (max-width: 750px) {
    width: 10vw;
    height: 10vh;
  }
`;

export const ImgProduit = styled("img")`
  width: 10vw;
  grid-column: 1;
  grid-row: 1;

  @media (max-width: 750px) {
  }
`;
