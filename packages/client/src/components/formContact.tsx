import { useState } from "react";
import TextField from "@mui/material/TextField";
import { Box, Button, Typography } from "@mui/material";
import { Validate, ValidationGroup } from "mui-validate";
import { useSnackbar } from "notistack";

import * as S from "./formContact.styled";

const Contact: React.FC = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [validationEmail, setValidationEmail] = useState({
    valid: false,
    messages: [],
    display: false,
  });

  const [validationSujet, setValidationSujet] = useState({
    valid: false,
    messages: [],
    display: false,
  });

  const [messageBox, setMessageBox] = useState({
    email: "",
    sujet: "",
    message: "",
  });

  const { email, sujet, message } = messageBox;

  const onInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setMessageBox({ ...messageBox, [event.target?.name]: event.target?.value });
  };

  const addMessage = () => {
    if (validationEmail.valid && validationSujet.valid) {
      enqueueSnackbar("Votre message est envoyé avec succès", {
        variant: "success",
      });
    } else
      enqueueSnackbar("Corrigez les erreurs dans le formulaire", {
        variant: "error",
      });
  };

  return (
    <S.Col2>
      <ValidationGroup>
        <>
          <Typography
            variant="h4"
            sx={{
              color: "secondary.main",
            }}
          >
            Nous Contacter
          </Typography>
          <br />
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
              autoComplete="off"
            >
              <S.BoxForm>
                <Typography
                  variant="body1"
                  color="colorWhite.main"
                  textAlign="left"
                >
                  Email :
                </Typography>
                <div>
                  <Validate
                    name="email"
                    regex={[
                      /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                      "Votre email n'est pas valide",
                    ]}
                    after={(result: any) => setValidationEmail(result)}
                  >
                    <TextField
                      required
                      id="standard"
                      type={"email"}
                      placeholder="Entrez votre email..."
                      fullWidth
                      name="email"
                      value={email}
                      onChange={(e) => onInputChange(e)}
                    />
                  </Validate>
                </div>
                <Typography
                  variant="body1"
                  color="colorWhite.main"
                  textAlign="left"
                >
                  Sujet :
                </Typography>
                <div>
                  <Validate
                    name="sujet"
                    custom={[
                      (value) => value.length <= 10 && value.length > 0,
                      "Maximum 10 ch",
                    ]}
                    after={(result: any) => setValidationSujet(result)}
                  >
                    <TextField
                      required
                      id="standard"
                      type="text"
                      placeholder="Sujet de votre message.."
                      fullWidth
                      name="sujet"
                      value={sujet}
                      onChange={(e) => onInputChange(e)}
                    />
                  </Validate>
                </div>
                <Typography
                  variant="body1"
                  color="colorWhite.main"
                  textAlign="left"
                >
                  Message :
                </Typography>
                <TextField
                  required
                  id="standard"
                  type="text"
                  placeholder="Ecrivez votre message..."
                  multiline
                  rows={4}
                  fullWidth
                  name="message"
                  value={message}
                  onChange={(e) => onInputChange(e)}
                  sx={{ width: { xs: "50vw", md: "25vw" } }}
                />
                <br />
                <br />
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => addMessage()}
                  sx={{
                    color: "colorWhite.main",
                    borderRadius: "10px",
                    width: "10vw",
                  }}
                >
                  Valider
                </Button>
              </S.BoxForm>
            </Box>
          </S.ContForm>
        </>
      </ValidationGroup>
    </S.Col2>
  );
};

export default Contact;
