import { FormEventHandler, useCallback, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import {
  Button,
  FilledInput,
  FormControl,
  IconButton,
  InputAdornment,
  Typography,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import axios from "../axios";
import { useNavigate } from "react-router";
import { Validate, ValidationGroup } from "mui-validate";
import Cookies from "js-cookie";
import { useSnackbar } from "notistack";
import { Routes } from "./../app/routes";
import ImgConnection from "../images/connection.jpg";
import * as S from "./formConnexion.styled";

type Props = {
  onSubmit: FormEventHandler<HTMLFormElement>;
};

const FormConnection: React.FC<Props> = (props: Props) => {
  const { onSubmit } = props;
  const [validationEmail, setValidationEmail] = useState({
    valid: false,
    messages: [],
    display: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <S.MainContainer>
      <S.Col2>
        <ValidationGroup>
          <>
            <Typography
              variant="h4"
              sx={{
                color: "secondary.main",
              }}
            >
              Connection
            </Typography>
            <S.ContForm>
              <Box
                component="form"
                sx={{
                  "& .MuiTextField-root": {
                    m: 1,
                    width: { xs: "50vw", md: "25vw" },
                    borderRadius: "10px",
                    borderBlockColor: "colorWhite.main",
                    backgroundColor: "colorWhite.main",
                    boxShadow: " 0px 4px 4px gray inset",
                  },
                }}
                noValidate
                autoComplete={"off"}
              >
                <S.BoxForm>
                  <Typography
                    variant="body1"
                    color="colorWhite.main"
                    textAlign="left"
                    paddingLeft="1.5rem"
                  >
                    Email :
                  </Typography>

                  <Validate
                    name="email"
                    regex={[
                      /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                      "Votre email n'est pas valide",
                    ]}
                    after={(result: any) => setValidationEmail(result)}
                  >
                    <S.ContainerEmail>
                      <TextField
                        required
                        id="email"
                        type="text"
                        placeholder="Entrez votre email..."
                        fullWidth
                        name="email"
                      />
                    </S.ContainerEmail>
                  </Validate>

                  <Typography
                    variant="body1"
                    color="colorWhite.main"
                    textAlign="left"
                    paddingLeft="1.5rem"
                  >
                    Mot de passe :
                  </Typography>
                  <FormControl
                    sx={{
                      m: 1,
                      width: { xs: "50vw", md: "25vw" },
                      borderRadius: "10px",
                      borderBlockColor: "colorWhite.main",
                      backgroundColor: "colorWhite.main",
                      boxShadow: " 0px 4px 4px gray inset",
                    }}
                    variant="standard"
                  >
                    <FilledInput
                      id="filled-adornment-password"
                      type={showPassword ? "text" : "password"}
                      autoComplete="new-password"
                      placeholder="Entrez votre mot de passe..."
                      name="password"
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                  </FormControl>

                  <br />
                  <br />
                  <Button
                    variant="contained"
                    color="secondary"
                    sx={{
                      color: "colorWhite.main",
                      borderRadius: "10px",
                      width: { xs: "30vw", md: "15vw" },
                    }}
                  >
                    Se Connecter
                  </Button>
                  <br />
                  <br />
                  <Typography
                    variant="body1"
                    sx={{
                      color: "colorWhite.main",
                    }}
                  >
                    Pas de compte ?&nbsp;
                    <span
                      className="lien-inscr"
                      // onClick={() => navigate(Routes.inscription)}
                      style={{
                        cursor: "pointer",
                      }}
                    >
                      Inscrivez-vous
                    </span>
                  </Typography>
                </S.BoxForm>
              </Box>
            </S.ContForm>
          </>
        </ValidationGroup>
      </S.Col2>
    </S.MainContainer>
  );
};

export default FormConnection;
