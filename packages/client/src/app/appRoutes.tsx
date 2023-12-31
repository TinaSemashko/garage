import React, { lazy } from "react";
import { Routes as Router, Route } from "react-router";
import { Routes } from "../app/routes";
import withSuspense from "../hoc/withSuspense";
import NotFound from "../pages/notFound";

const Home = lazy(() => import("../pages/home"));
const Contact = lazy(() => import("../pages/contact"));
const Admin = lazy(() => import("../pages/admin"));
const Auth = lazy(() => import("../pages/auth"));
const Produits = lazy(() => import("../pages/produits"));
const CardProduit = lazy(() => import("../pages/cardProduit"));

export const AppRoutes: React.FunctionComponent = () => (
  <Router>
    <Route path={Routes.home} element={withSuspense(Home)} />
    <Route path={Routes.contact} element={withSuspense(Contact)} />
    <Route path={Routes.admin} element={withSuspense(Admin)} />
    <Route path={Routes.auth} element={withSuspense(Auth)} />
    <Route path={Routes.login} element={withSuspense(Auth)} />
    <Route path={Routes.produits} element={withSuspense(Produits)} />
    <Route path={Routes.cardproduit} element={withSuspense(CardProduit)} />

    <Route path="*" element={<NotFound />} />
  </Router>
);
