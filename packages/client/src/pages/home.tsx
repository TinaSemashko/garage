import { Button, Typography } from "@mui/material";
import Video from "../images/Unveiling Concept 20-23 sporty, electric and city car.mp4";
import logo from "../images/logo.png";
import img from "../images/repar.png";

import * as S from "./home.styled";

const Home: React.FC = () => {
  return (
    <S.MainContainer>
      <S.VideoAccueil src={Video} autoPlay loop muted />
      <S.TextContainer>
        <Typography
          variant="h1"
          sx={{ textAlign: "center", color: "primary.main" }}
        >
          Qui somme nous ?
        </Typography>
        <Typography variant="h4" lineHeight="1.5">
          Vincent Parrot, fort de ses 15 années d'expérience dans la réparation
          automobile, a ouvert son propre garage à Toulouse en 2021. Depuis 2
          ans, il propose une large gamme de services: réparation de la
          carrosserie et de la mécanique des voitures ainsi que leur entretien
          régulier pour garantir leur performance et leur sécurité. De plus, le
          Garage V. Parrot met en vente des véhicules d'occasion afin
          d'accroître son chiffre d'affaires. Vincent Parrot considère son
          atelier comme un véritable lieu de confiance pour ses clients et leurs
          voitures doivent, selon lui, à tout prix être entre de bonnes mains.
          Bien qu'il fournisse grâce à ses employés un service de qualité et
          personnalisé à chaque client, Vincent Parrot reconnaît qu'il doit être
          visible sur internet s'il veut se faire définitivement une place parmi
          la concurrence. Il a donc contacté l’agence de création de sites web
          dont vous faites partie pour un premier devis, qu'il a accepté. Vous
          aurez alors pour mission de créer une application web vitrine pour le
          Garage V. Parrot, en mettant en avant la qualité des services délivrés
          par cette récente entreprise.
        </Typography>
      </S.TextContainer>

      <Typography
        variant="h1"
        sx={{ textAlign: "center", color: "primary.main" }}
      >
        Votre partenaire fiable pour l'entretien automobile
      </Typography>
      <br />
      <br />
      <Typography
        variant="h4"
        sx={{
          textAlign: "justify",
          color: "primary.main",
          marginRight: "5%",
          marginLeft: "5%",
        }}
      >
        Chez Garage V. Parrot, nous sommes fiers de fournir les meilleurs
        services de réparation et d'entretien automobile. Avec des décennies
        d'expérience, notre équipe de mécaniciens chevronnés s'est engagée à
        offrir à nos clients un service exceptionnel et des solutions adaptées à
        leurs besoins. Nous mettons l'accent sur la qualité, la fiabilité et la
        satisfaction du client.
      </Typography>
      <br />
      <br />
      <Typography
        variant="h2"
        sx={{
          textAlign: "center",
          backgroundColor: "colorDisabled.main",
        }}
      >
        Nos services comprennent:
      </Typography>
      <S.AtelieContainer>
        <Typography
          variant="h5"
          sx={{
            textAlign: "justify",
            backgroundColor: "colorDisabled.main",
            width: "60vw",
          }}
        >
          <ul>
            <li> Changement d'huile et de filtre</li>
            <li> Remplacement des plaquettes de frein et des disques </li>
            <li> Ajustement et remplacement des tambours de frein </li>
            <li> Réparation et remplacement de la suspension </li>
            <li> Diagnostic et réparation du moteur </li>
            <li> Réparation et remplacement de l'embrayage </li>
            <li> Remplacement de la courroie de distribution</li>
            <li> Diagnostic et réparation du système d'allumage </li>
            <li> Diagnostic et réparation du système de refroidissement </li>
            <li> Réparation et remplacement des vitres et des rétroviseurs </li>
            <li> Réglage et remplacement des phares et des feux arrière </li>
            <li> Réparation et remplacement des éléments de carrosserie </li>
            <li> Diagnostic et réparation du système électrique du véhicule</li>
            <li> Installation et entretien d'équipements supplémentaires</li>
            <li> Réparation et entretien des climatiseurs</li>
          </ul>
        </Typography>
        <S.ImgContainer>
          <S.Img src={img} alt="reparation" />
        </S.ImgContainer>
      </S.AtelieContainer>
      <br />
      <br />
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          color: "primary.main",
          marginRight: "5%",
          marginLeft: "5%",
        }}
      >
        Notre engagement envers l'excellence et notre souci du détail font de
        nous le choix idéal pour tous vos besoins en matière d'entretien
        automobile. Faites confiance à Garage V. Parrot pour vous fournir le
        meilleur service possible. N'hésitez pas à nous contacter pour toute
        demande ou pour prendre rendez-vous.
      </Typography>

      <br />
      <br />
      <S.LogoContainer>
        <img src={logo} width="200vw" />
      </S.LogoContainer>
      <br />
      <br />
    </S.MainContainer>
  );
};

export default Home;
