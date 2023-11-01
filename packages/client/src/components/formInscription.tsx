import { Box, MenuItem, TextField, Typography } from "@mui/material";
import { FormEventHandler, useContext, useEffect, useState } from "react";
import { Validate, ValidationGroup } from "mui-validate";
import AuthContext from "../store/auth/AuthContextProvider";
import { UserRoles } from "../constants/roles";
import axios from "../axios";

import * as S from "./formInscription.styled";

type Props = {
  onSubmit: FormEventHandler<HTMLFormElement>;
};

type Roles = {
  id: Number;
  role: string;
};

const FormInscription: React.FC<Props> = ({ onSubmit }) => {
  const [validationNom, setValidationNom] = useState({
    valid: false,
    messages: [],
    display: false,
  });
  const [validationPreNom, setValidationPreNom] = useState({
    valid: false,
    messages: [],
    display: false,
  });
  const [validationEmail, setValidationEmail] = useState({
    valid: false,
    messages: [],
    display: false,
  });
  const [validationPseudo, setValidationPseudo] = useState({
    valid: false,
    messages: [],
    display: false,
  });

  const [roles, setRoles] = useState<Roles[]>();
  const { authState } = useContext(AuthContext);
  const userRole = authState.role;
  const [selectedRole, setSelectedRole] = useState(UserRoles.VISITEUR);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedRole(event.target.value as UserRoles);
  };

  const validationForm =
    validationNom.valid &&
    validationPreNom.valid &&
    validationEmail.valid &&
    validationPseudo.valid;

  const addValidationForm = (event: React.FormEvent<HTMLFormElement>) => {
    if (validationForm) onSubmit(event);
  };

  useEffect(() => {
    const fetchGetRoles = async () => {
      await axios
        .get(`roles`)
        .then((response) => {
          setRoles(response.data.results[0]);
        })
        .catch((err) => {
          console.error(err);
        });
    };

    fetchGetRoles();
  }, []);

  return (
    <S.MainContainer>
      <ValidationGroup>
        <>
          <Box component="form" onSubmit={addValidationForm} pb="10vh">
            <S.FlexBox>
              <Typography
                noWrap
                variant="body1"
                color="primary.main"
                textAlign="center"
              >
                Nom :
              </Typography>
              <Typography
                noWrap
                variant="body1"
                color="primary.main"
                textAlign="center"
              >
                Prénom :
              </Typography>
            </S.FlexBox>
            <S.FlexBox>
              <Validate
                name="nom"
                regex={[/[a-zA-Z]+/g, "Vous pouvez mettre des lettres latin"]}
                after={(result: any) => setValidationNom(result)}
              >
                <TextField
                  required
                  type="text"
                  placeholder="Entrez votre nom..."
                  sx={{
                    width: { xs: "44vw", md: "22vw" },
                  }}
                  name="nom"
                />
              </Validate>
              <Validate
                name="prenom"
                regex={[/[a-zA-Z]+/g, "Vous pouvez mettre des lettres latin"]}
                after={(result: any) => setValidationPreNom(result)}
              >
                <TextField
                  required
                  type="text"
                  placeholder="Entrez votre prénom.."
                  sx={{
                    width: { xs: "44vw", md: "22vw" },
                  }}
                  name="prenom"
                />
              </Validate>
            </S.FlexBox>
            <div> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
            <S.FlexBox>
              <Typography
                variant="body1"
                color="primary.main"
                textAlign="center"
              >
                Pseudo :
              </Typography>
              <Typography
                variant="body1"
                color="primary.main"
                textAlign="center"
              >
                Role :
              </Typography>
            </S.FlexBox>
            <S.FlexBox>
              <Validate
                name="nickname"
                custom={[
                  (value) => value.length <= 10 && value.length > 0,
                  "Maximum 10 ch",
                ]}
                after={(result: any) => setValidationPseudo(result)}
              >
                <TextField
                  required
                  type="text"
                  placeholder="Entrez votre pseudo..."
                  sx={{
                    width: { xs: "44vw", md: "22vw" },
                    textAlign: "center",
                  }}
                  name="nickname"
                />
              </Validate>
              <TextField
                id="outlined-select-role"
                select
                label="Select"
                name="role"
                value={selectedRole ? selectedRole : UserRoles.VISITEUR}
                defaultValue={UserRoles.VISITEUR}
                sx={{
                  width: { xs: "44vw", md: "22vw" },
                  textAlign: "center",
                }}
                disabled={userRole !== UserRoles.ADMINISTRATEUR}
                onChange={handleChange}
              >
                {roles?.map((item, index) => (
                  <MenuItem key={index} value={item.role}>
                    {item.role}
                  </MenuItem>
                ))}
              </TextField>
            </S.FlexBox>
            <Typography variant="body1" color="primary.main" textAlign="center">
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
              <TextField
                required
                type="text"
                placeholder="Entrez votre email..."
                sx={{
                  width: { xs: "44vw", md: "50vw" },
                  textAlign: "center",
                }}
                name="email"
              />
            </Validate>
            <Typography variant="body1" color="primary.main" textAlign="center">
              Mot de passe :
            </Typography>
            {/* <Validate
              name="password"
              regex={[
                /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                "Votre email n'est pas valide",
              ]}
              after={(result: any) => setValidationEmail(result)}
            > */}
            <TextField
              required
              type="text"
              placeholder="Entrez votre mot de passe..."
              sx={{
                width: { xs: "44vw", md: "50vw" },
                textAlign: "center",
              }}
              name="password"
            />
            {/* </Validate> */}

            <div> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>

            <S.ButtonSubmit
              type="submit"
              disabled={validationForm ? false : true}
              color="primary"
            >
              Submit
            </S.ButtonSubmit>
          </Box>
        </>
      </ValidationGroup>
    </S.MainContainer>
  );
};

export default FormInscription;
