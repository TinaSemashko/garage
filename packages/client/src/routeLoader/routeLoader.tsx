import React from "react";
// import { useTranslation } from 'react-i18next';

import { Container } from "./routeLoader.styled";

const RouteLoader: React.FC = () => {
  // const { t } = useTranslation();

  return (
    <Container>
      {/* <h3>{t('general.loading')}</h3> */}
      <h3>Loading</h3>
    </Container>
  );
};

export default RouteLoader;
