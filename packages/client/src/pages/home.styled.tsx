import { styled } from "@mui/material/styles";
import img from "../images/papier.png";
import { Button } from "@mui/material";

export const MainContainer = styled("div")`
  @media (max-width: 750px) {
  }
`;

export const VideoAccueil = styled("video")`
  width: 100vw;
  text-align: center;
  position: fixed;
  z-index: -1;
  @media (max-width: 750px) {
    width: 100vw;
  }
`;

export const TextContainer = styled("div")`
  background-size: 85vw;
  padding: 10vw;

  &::before {
    content: "";
    background: url(${img}) no-repeat center center;

    background-size: cover;
    opacity: 0.8;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -1;
    margin-top: 10vh;
    padding-bottom: 20vh;
    height: 100%;
  }

  @media (max-width: 750px) {
  }
`;

export const AtelieContainer = styled("div")`
  display: flex;
`;

export const ImgContainer = styled("div")`
  width: 50vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.palette.colorDisabled.main};
  @media (max-width: 750px) {
    display: none;
  }
`;

export const Img = styled("img")`
  width: 500px;
  height: 200px;
  z-index: 10;
`;

export const LogoContainer = styled("div")`
  text-align: center;
`;

export const ButtContainer = styled("div")`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;
