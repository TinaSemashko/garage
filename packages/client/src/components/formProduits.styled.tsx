import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

export const MainContainer = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
