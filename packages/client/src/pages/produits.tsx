import { useEffect, useState } from "react";
import { MenuItem, TextField, Typography } from "@mui/material";
import CardProduits from "../components/cardProduits";
import useApiServce from "../hooks/service/useAPIservice";
import CloseIcon from "@mui/icons-material/Close";
import TouchAppIcon from "@mui/icons-material/TouchApp";

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
  const [produitTypes, setProduitTypes] = useState<ProduitsTypes[]>();
  const [produitModel, setProduitModel] = useState<ProduitsModele[]>();
  const [produitMarque, setProduitMarque] = useState<ProduitsMarque[]>();
  const [selectedType, setSelectedType] = useState("");
  const [selectedModele, setSelectedModele] = useState({});
  const [selectedMarque, setSelectedMarque] = useState({});
  const [selectedMarqueId, setSelectedMarqueId] = useState(-1);
  const [selectedModeleId, setSelectedModeleId] = useState(-1);
  const [selectedTypeId, setSelectedTypeId] = useState(-1);
  const [selectedPrixDe, setSelectedPrixDe] = useState("");
  const [selectedPrixA, setSelectedPrixA] = useState("");
  const [filtrePrix, setFiltrePrix] = useState(false);
  const [selectedKmDe, setSelectedKmDe] = useState("");
  const [selectedKmA, setSelectedKmA] = useState("");
  const [filtreKm, setFiltreKm] = useState(false);
  const [selectedAn, setSelectedAn] = useState("");
  const [filtreAn, setFiltreAn] = useState(false);

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

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.name === "type") setSelectedType(event.target.value);
    else if (event.target.name === "marque")
      setSelectedMarque(event.target.value);
    else if (event.target.name === "modele")
      setSelectedModele(event.target.value);
    else if (event.target.name === "selectedPrixDe")
      setSelectedPrixDe(event.target.value);
    else if (event.target.name === "selectedPrixA")
      setSelectedPrixA(event.target.value);
    else if (event.target.name === "selectedKmDe")
      setSelectedKmDe(event.target.value);
    else if (event.target.name === "selectedKmA")
      setSelectedKmA(event.target.value);
    else if (event.target.name === "selectedAn")
      setSelectedAn(event.target.value);
  };

  useEffect(() => {
    if (selectedType !== "") {
      const selectedTId = produitTypes?.find(
        (item) => item.type === selectedType
      )?.id;
      if (selectedTId !== undefined) {
        setSelectedTypeId(selectedTId as number);
      }
    }
  }, [selectedType]);

  useEffect(() => {
    const selectedMId = produitMarque?.find(
      (item) => item.marque === selectedMarque
    )?.id;
    if (selectedMId !== undefined) {
      setSelectedMarqueId(selectedMId as number);
    }
  }, [selectedMarque]);

  useEffect(() => {
    if (selectedModele !== "") {
      const selectedModId = produitModel?.find(
        (item) => item.modele === selectedModele
      )?.id;
      if (selectedModId !== undefined) {
        setSelectedModeleId(selectedModId as number);
      }
    }
  }, [selectedModele]);

  const addFilter = (name: string) => {
    if ((name = "filtrePrix")) setFiltrePrix(true);
    if ((name = "Kilometrage")) setFiltreKm(true);
    if ((name = "Annee")) setFiltreAn(true);
  };

  const removeFilter = (name: string) => {
    if (name === "type") {
      setSelectedType("");
      setSelectedTypeId(-1);
    }
    if (name === "modele") {
      setSelectedModele("");
      setSelectedModeleId(-1);
    }
    if (name === "marque") {
      setSelectedMarque("");
      setSelectedMarqueId(-1);
    }
    if ((name = "filtrePrix")) {
      setSelectedPrixDe("");
      setSelectedPrixA("");
      setFiltrePrix(false);
    }
    if ((name = "Kilometrage")) {
      setSelectedKmDe("");
      setSelectedKmA("");
      setFiltreKm(false);
    }
    if ((name = "filtreAnnee")) {
      setSelectedAn("");
      setFiltreAn(false);
    }
  };

  const setHidden = (item: Produit) => {
    return (
      (selectedTypeId !== -1 && item.id_type !== selectedTypeId) ||
      (selectedMarqueId !== -1 && item.id_marque !== selectedMarqueId) ||
      (selectedModeleId !== -1 && item.id_modele !== selectedModeleId) ||
      (filtrePrix &&
        (parseInt(item.prix) < parseInt(selectedPrixDe) ||
          parseInt(item.prix) > parseInt(selectedPrixA))) ||
      (filtreKm &&
        (parseInt(item.kilometrage) < parseInt(selectedKmDe) ||
          parseInt(item.kilometrage) > parseInt(selectedKmA))) ||
      (filtreAn && item.annee != selectedAn)
    );
  };

  return (
    <S.MainContainer>
      <Typography
        variant="h1"
        sx={{ gridColumn: { xs: "1", md: "1 / span 2" } }}
      >
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
              sx={{ color: "primary.main", cursor: "pointer" }}
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
              sx={{ color: "primary.main", cursor: "pointer" }}
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
              sx={{ color: "primary.main", cursor: "pointer" }}
              onClick={() => removeFilter("modele")}
            />
          </S.FlexContainer>
        </S.TextFieldContainer>
        <S.FlexContainer>
          <Typography variant="h6">Prix de </Typography>
          <TextField
            variant="standard"
            type="text"
            name="selectedPrixDe"
            value={selectedPrixDe}
            onChange={handleChange}
            sx={{
              width: { md: "10vw" },
              cursor: "pointer",
              "& .css-1x51dt5-MuiInputBase-input-MuiInput-input": {
                textAlign: "center",
              },
            }}
          />
          <br />
        </S.FlexContainer>
        <S.FlexContainer>
          <Typography variant="h6">à </Typography>
          <TextField
            variant="standard"
            type="text"
            name="selectedPrixA"
            value={selectedPrixA}
            onChange={handleChange}
            sx={{
              width: { md: "10vw" },
              cursor: "pointer",
              "& .css-1x51dt5-MuiInputBase-input-MuiInput-input": {
                textAlign: "center",
              },
            }}
          />
          <TouchAppIcon
            name="filtrePrix"
            sx={{ color: "primary.main", cursor: "pointer" }}
            onClick={() => addFilter("filtrePrix")}
          />
          <CloseIcon
            sx={{ color: "primary.main", cursor: "pointer" }}
            onClick={() => removeFilter("filtrePrix")}
          />
        </S.FlexContainer>
        <S.FlexContainer>
          <Typography variant="h6">Kilomentrage de </Typography>
          <TextField
            variant="standard"
            type="text"
            name="selectedKmDe"
            value={selectedKmDe}
            onChange={handleChange}
            sx={{
              width: { md: "10vw" },
              cursor: "pointer",
              "& .css-1x51dt5-MuiInputBase-input-MuiInput-input": {
                textAlign: "center",
              },
            }}
          />
          <br />
        </S.FlexContainer>
        <S.FlexContainer>
          <Typography variant="h6">à </Typography>
          <TextField
            variant="standard"
            type="text"
            name="selectedKmA"
            value={selectedKmA}
            onChange={handleChange}
            sx={{
              width: { md: "10vw" },
              cursor: "pointer",
              "& .css-1x51dt5-MuiInputBase-input-MuiInput-input": {
                textAlign: "center",
              },
            }}
          />
          <TouchAppIcon
            name="Kilometrage"
            sx={{ color: "primary.main", cursor: "pointer" }}
            onClick={() => addFilter("Kilometrage")}
          />
          <CloseIcon
            sx={{ color: "primary.main", cursor: "pointer" }}
            onClick={() => removeFilter("Kilometrage")}
          />
        </S.FlexContainer>
        <S.FlexContainer>
          <Typography variant="h6">Année </Typography>
          <TextField
            variant="standard"
            type="text"
            name="selectedAn"
            value={selectedAn}
            onChange={handleChange}
            sx={{
              width: { md: "10vw" },
              cursor: "pointer",
              "& .css-1x51dt5-MuiInputBase-input-MuiInput-input": {
                textAlign: "center",
              },
            }}
          />
          <TouchAppIcon
            sx={{ color: "primary.main", cursor: "pointer" }}
            onClick={() => addFilter("filtreAnnee")}
          />
          <CloseIcon
            sx={{ color: "primary.main", cursor: "pointer" }}
            onClick={() => removeFilter("filtreAnnee")}
          />
        </S.FlexContainer>
      </S.Filter>

      <S.GridContainer>
        {produitdata.slice(0, 15).map((item, index) => (
          <CardProduits key={index} element={item} hidden={setHidden(item)} />
        ))}
      </S.GridContainer>
    </S.MainContainer>
  );
};

export default Produits;
