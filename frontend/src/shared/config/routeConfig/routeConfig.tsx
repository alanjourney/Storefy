import { Navigate, RouteObject } from "react-router-dom";
import Registration from "../../../components/registration";

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
    element: <Registration />,
  },
  [AppRoutes.DEFAULT]: {
    path: RoutePath[AppRoutes.DEFAULT],
    element: <Navigate to="/" replace />,
  },
};
