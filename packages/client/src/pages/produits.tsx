import { useEffect, useState } from "react";
import { MenuItem, TextField, Typography } from "@mui/material";
import CardProduits from "../components/cardProduits";
import useApiServce from "../hooks/service/useAPIservice";
import CloseIcon from "@mui/icons-material/Close";

import * as S from "./produits.styled";

type Produit = {
  id: number;
  title: string;
  type: string;
  id_type: number;
  annee: string;
  prix: string;
  kilometrage: string;
  marque: string;
  id_marque: number;
  modele: string;
  id_modele: number;
  puissance_fiscale: string;
  puissance_motor: string;
  boite_vitesse: string;
  image: string;
};

type ProduitsTypes = {
  id: Number;
  type: string;
};

type ProduitsModele = {
  id: Number;
  id_marque: number;
  modele: string;
};

type ProduitsMarque = {
  id: Number;
  marque: string;
};

const Produits: React.FC = () => {
  const { request, setError } = useApiServce();
  const [produitdata, setProduitdata] = useState<Produit[]>([]);
  // const [produitdataArray, setProduitdataAray] =
  //   useState<Produit[]>(produitdata);
  const [produitTypes, setProduitTypes] = useState<ProduitsTypes[]>();
  const [produitModel, setProduitModel] = useState<ProduitsModele[]>();
  const [produitMarque, setProduitMarque] = useState<ProduitsMarque[]>();
  const [selectedType, setSelectedType] = useState("");
  const [selectedModele, setSelectedModele] = useState({});
  const [selectedMarque, setSelectedMarque] = useState({});
  const [selectedMarqueId, setSelectedMarqueId] = useState(0);
  let produitdataArray = [...produitdata];

  useEffect(() => {
    const params = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      request("GET", `products`, params, setProduitdata);
    } catch (error: any) {
      setError(error.message || error);
    }
  }, []);

  useEffect(() => {
    const params = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      request("GET", `types`, params, setProduitTypes);
    } catch (error: any) {
      setError(error.message || error);
    }
  }, []);

  useEffect(() => {
    const params = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      request("GET", `modeles`, params, setProduitModel);
    } catch (error: any) {
      setError(error.message || error);
    }
  }, []);

  useEffect(() => {
    const params = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      request("GET", `marques`, params, setProduitMarque);
    } catch (error: any) {
      setError(error.message || error);
    }
  }, []);

  const removeFilter = (name: string) => {
    if (name === "type") setSelectedType("");
    else if (name === "modele") setSelectedModele("");
    else if (name === "marque") setSelectedMarque("");
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.name === "type") setSelectedType(event.target.value);
    else if (event.target.name === "modele")
      setSelectedModele(event.target.value);
    else if (event.target.name === "marque")
      setSelectedMarque(event.target.value);
  };

  // useEffect(() => {
  //   let selectedTypeId: number = 0;
  //   let selectedModeleId: number = 0;
  //   if (selectedType !== "") {
  //     selectedTypeId = produitTypes?.find((item) => item.type === selectedType)
  //       ?.id as number;
  //   } else if (selectedMarque !== "") {
  //     const selectedMId = produitMarque?.find(
  //       (item) => item.marque === selectedMarque
  //     )?.id;
  //     setSelectedMarqueId(selectedMId as number);
  //   } else if (selectedModele !== "") {
  //     selectedModeleId = produitModel?.find(
  //       (item) => item.modele === selectedModele
  //     )?.id as number;
  //   }
  //   if (selectedTypeId && selectedMarqueId && selectedModeleId)
  //     setProduitdataAray(
  //       produitdata.filter(
  //         (el) =>
  //           el.id_type === selectedTypeId &&
  //           el.id_marque === selectedMarqueId &&
  //           el.id_modele === selectedModeleId
  //       )
  //     );
  //   else {
  //     setProduitdataAray(produitdata);
  //   }
  // }, [selectedType, selectedMarque, selectedModele]);

  useEffect(() => {
    if (selectedType !== "") {
      const selectedTypeId = produitTypes?.find(
        (item) => item.type === selectedType
      )?.id;

      // setProduitdataAray(
      //   produitdata.filter((el) => el.id_type === selectedTypeId)
      // );

      produitdataArray = produitdata.filter(
        (el) => el.id_type === selectedTypeId
      );
    } else {
      // setProduitdataAray(produitdata);
      produitdataArray = { ...produitdata };
    }
  }, [selectedType]);

  useEffect(() => {
    if (selectedModele !== "") {
      const selectedModeleId = produitModel?.find(
        (item) => item.modele === selectedModele
      )?.id;

      if (selectedModeleId !== undefined) {
        // setProduitdataAray(
        //   produitdata.filter((el) => el.id_modele === selectedModeleId)
        // );
        produitdataArray = produitdata.filter(
          (el) => el.id_modele === selectedModeleId
        );
      }
    } else {
      // setProduitdataAray(produitdata);
      produitdataArray = { ...produitdata };
    }
  }, [selectedModele]);

  useEffect(() => {
    const selectedMId = produitMarque?.find(
      (item) => item.marque === selectedMarque
    )?.id;

    if (selectedMId !== undefined) {
      setSelectedMarqueId(selectedMId as number);
      // setProduitdataAray(
      //   produitdata.filter((el) => el.id_marque === selectedMarqueId)
      // );
      produitdataArray = produitdata.filter(
        (el) => el.id_marque === selectedMarqueId
      );
      console.log(produitdataArray);
    } else {
      // setProduitdataAray(produitdata);
      produitdataArray = { ...produitdata };
    }
  }, [selectedMarque]);

  return (
    <S.MainContainer>
      <Typography variant="h1" sx={{ opacity: 0.8 }}>
        Les voitures d'occasion
      </Typography>
      <S.Filter>
        <Typography variant="h6" sx={{ opacity: 0.8 }}>
          Filter:
        </Typography>
        <S.TextFieldContainer>
          <S.FlexContainer>
            <TextField
              variant="standard"
              select
              type="text"
              fullWidth
              name="type"
              value={selectedType}
              onChange={handleChange}
            >
              {produitTypes?.map((item1, index) => (
                <MenuItem key={index} value={item1.type}>
                  {item1.type}
                </MenuItem>
              ))}
            </TextField>
            <CloseIcon
              sx={{ color: "primary.main" }}
              onClick={() => removeFilter("type")}
            />
          </S.FlexContainer>
          <S.FlexContainer>
            <TextField
              variant="standard"
              select
              type="text"
              fullWidth
              name="marque"
              value={selectedMarque}
              onChange={handleChange}
            >
              {produitMarque?.map((item1, index) => (
                <MenuItem key={index} value={item1.marque}>
                  {item1.marque}
                </MenuItem>
              ))}
            </TextField>
            <CloseIcon
              sx={{ color: "primary.main" }}
              onClick={() => removeFilter("marque")}
            />
          </S.FlexContainer>
          <S.FlexContainer>
            <TextField
              variant="standard"
              select
              type="text"
              fullWidth
              name="modele"
              value={selectedModele}
              onChange={handleChange}
            >
              {produitModel
                ?.filter((el) => el.id_marque === selectedMarqueId)
                .map((item1, index) => (
                  <MenuItem key={index} value={item1.modele}>
                    {item1.modele}
                  </MenuItem>
                ))}
            </TextField>
            <CloseIcon
              sx={{ color: "primary.main" }}
              onClick={() => removeFilter("modele")}
            />
          </S.FlexContainer>
        </S.TextFieldContainer>
      </S.Filter>
      <S.GridContainer>
        {produitdataArray.slice(0, 15).map((item, index) => (
          <CardProduits key={index} element={item} />
        ))}
      </S.GridContainer>
    </S.MainContainer>
  );
};

export default Produits;
