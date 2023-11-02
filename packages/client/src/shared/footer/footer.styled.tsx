import { styled } from "@mui/material/styles";

export const MainContainer = styled("div")`
  color: ${({ theme }) => theme.palette.colorWhite.main};
  background-color: ${({ theme }) => theme.palette.colorShadow.main};
  /* padding-top: 5vh;
  padding-bottom: 5vh; */
  text-align: center;
`;

export const VideoFooter = styled("video")`
  width: 20vw;

  @media (max-width: 750px) {
    width: 100vw;
  }
`;

export const ContactContainer = styled("div")`
  color: ${({ theme }) => theme.palette.colorWhite.main};

  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const TextContainer = styled("div")`
  color: ${({ theme }) => theme.palette.colorWhite.main};

  display: grid;
  grid-template-columns: 20% 80%;
  align-items: center;
  justify-content: space-evenly;
`;
