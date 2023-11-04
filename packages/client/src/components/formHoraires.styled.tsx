import { Button, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

export const MainContainer = styled("div")`
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

export const RowContainerExt = styled("div")`
  display: flex;
  justify-content: start;
  align-items: center;
  @media (max-width: 750px) {
  }
`;

export const RowContainerInt = styled("div")`
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media (max-width: 750px) {
  }
`;

export const CustomDisableInput = styled(TextField)(() => ({
  ".MuiInputBase-input.Mui-disabled": {
    WebkitTextFillColor: "#FFF",
    color: "#FFF",
  },
}));
