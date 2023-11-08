import { styled } from "@mui/material/styles";

export const MainContainer = styled("div")`
  color: ${({ theme }) => theme.palette.colorWhite.main};
  background-color: ${({ theme }) => theme.palette.colorShadow.main};
  text-align: center;
`;

export const VideoFooter = styled("video")`
  width: 20vw;

  @media (max-width: 750px) {
    width: 10vw;
  }
`;

export const ContactContainer = styled("div")`
  color: ${({ theme }) => theme.palette.colorWhite.main};

  display: flex;
  align-items: center;
  justify-content: space-evenly;

  @media (max-width: 750px) {
    flex-direction: column;
  }
`;

export const TextContainer = styled("div")`
  color: ${({ theme }) => theme.palette.colorWhite.main};

  display: grid;
  grid-template-columns: 10% 90%;
  align-items: center;
  justify-items: start;

  @media (max-width: 750px) {
    justify-items: center;
  }
`;
