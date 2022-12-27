import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import * as routes from "../pages/routes";

import { PageNotFound } from "../components/404";
import { LoginPage } from "../pages/login";

import { withI18n } from "../shared/hoc/i18n.hoc";
import { AppHomePage } from "../pages/homepage";

function RoutesComponent(): React.ReactElement {
  return (
    <Routes>
      <Route path={routes.homePageUrl} element={<AppHomePage />} />
      <Route path={routes.errorUrl} element={<PageNotFound />} />
      <Route path={routes.loginUrl} element={<LoginPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export const AppRoutes = withI18n(RoutesComponent);
