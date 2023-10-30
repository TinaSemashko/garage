import { styled } from "@mui/material/styles";

export const MainContainer = styled("div")`
  color: ${({ theme }) => theme.palette.colorWhite.main};
  background-color: ${({ theme }) => theme.palette.primary.main};
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
