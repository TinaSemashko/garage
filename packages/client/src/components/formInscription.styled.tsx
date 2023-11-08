import { Box, Button } from "@mui/material";
import { styled } from "@mui/material/styles";

export const MainContainer = styled("div")`
  text-align: center;

  @media (max-width: 750px) {
    align-items: center;
  }
`;

export const ButtonSubmit = styled(Button)`
  background-color: ${({ theme }) => theme.palette.primary.main};
  color: ${({ theme }) => theme.palette.colorWhite.main};
  border-radius: 10px;

  @media (max-width: 750px) {
  }
`;

export const FlexBox = styled(Box)`
  display: flex;
  justify-content: space-evenly;
  text-align: center;
  align-items: center;
  padding-left: 20%;
  padding-right: 20%;

  @media (max-width: 750px) {
    flex-direction: column;
    padding-left: 0%;
    padding-right: 0%;
  }
`;
