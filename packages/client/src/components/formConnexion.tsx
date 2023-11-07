import { FormEventHandler, useCallback, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import {
  FilledInput,
  FormControl,
  IconButton,
  InputAdornment,
  Typography,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useNavigate } from "react-router";
import { Validate, ValidationGroup } from "mui-validate";
import { Routes } from "./../app/routes";

import * as S from "./formConnexion.styled";

type Props = {
  onSubmit: FormEventHandler<HTMLFormElement>;
};

const FormConnection: React.FC<Props> = (props: Props) => {
  const navigate = useNavigate();
  const { onSubmit } = props;
  const [validationEmail, setValidationEmail] = useState({
    valid: false,
    messages: [],
    display: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const validationForm = validationEmail.valid;

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const addValidationForm = (event: React.FormEvent<HTMLFormElement>) => {
    if (validationForm) onSubmit(event);
  };

  return (
    <S.MainContainer>
      <ValidationGroup>
        <>
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
            onSubmit={addValidationForm}
          >
            <S.BoxForm>
              <Typography
                variant="body1"
                color="colorWhite.main"
                textAlign="center"
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
                textAlign="center"
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
              <S.ButtonSubmit
                type="submit"
                variant="contained"
                color="secondary"
                disabled={validationForm ? false : true}
              >
                Se Connecter
              </S.ButtonSubmit>
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
                  onClick={() => navigate(Routes.auth)}
                  style={{
                    cursor: "pointer",
                  }}
                >
                  Inscrivez-vous
                </span>
              </Typography>
            </S.BoxForm>
          </Box>
        </>
      </ValidationGroup>
    </S.MainContainer>
  );
};

export default FormConnection;
