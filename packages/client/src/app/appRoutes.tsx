// Core
import React, { lazy } from "react";
import { Routes as Router, Route } from "react-router";

// Styled
import { Routes } from "../app/routes";

// Pages
import withSuspense from "../hoc/withSuspense";
import NotFound from "../pages/notFound";

const Home = lazy(() => import("../pages/home"));
const Contact = lazy(() => import("../pages/contact"));
const Admin = lazy(() => import("../pages/admin"));
const Auth = lazy(() => import("../pages/auth"));
const Produits = lazy(() => import("../pages/produits"));

export const AppRoutes: React.FunctionComponent = () => (
  <Router>
    <Route path={Routes.home} element={withSuspense(Home)} />
    <Route path={Routes.contact} element={withSuspense(Contact)} />
    <Route path={Routes.admin} element={withSuspense(Admin)} />
    <Route path={Routes.auth} element={withSuspense(Auth)} />
    <Route path={Routes.login} element={withSuspense(Auth)} />
    <Route path={Routes.produits} element={withSuspense(Produits)} />

    <Route path="*" element={<NotFound />} />
  </Router>
);
