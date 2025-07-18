import { Navigate, RouteObject } from "react-router-dom";
import { AuthPage } from "pages/AuthPage";

export enum AppRoutes {
  REGISTRATION = "registration",
  DEFAULT = "default",
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.REGISTRATION]: "/",
  [AppRoutes.DEFAULT]: "*",
};

export const routeConfig: Record<AppRoutes, RouteObject> = {
  [AppRoutes.REGISTRATION]: {
    path: RoutePath[AppRoutes.REGISTRATION],
    element: <AuthPage />,
  },
  [AppRoutes.DEFAULT]: {
    path: RoutePath[AppRoutes.DEFAULT],
    element: <Navigate to="/" replace />,
  },
};
