import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { DcScreen } from "../dc/DcScreen";
import { LoginScreen } from "../login/LoginSCreen";
import { MarvelScreen } from "../marvel/MarvelScreen";
import { SearchSceen } from "../search/SearchScreen";
import { Navbar } from "../ui/Navbar";
import { DashboardRoute } from "./DashboardRoute";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/login" element={<LoginScreen />} /> */}


        <Route path="/login" element={<PublicRoute>
          <LoginScreen />
          </PublicRoute>
          } />

        <Route path="/*" element={<PrivateRoute>
          <DashboardRoute />
          </PrivateRoute>
          } />

        {/* <Route path="/*" element={<DashboardRoute />} /> */}
      </Routes>
    </BrowserRouter>
  );
};
