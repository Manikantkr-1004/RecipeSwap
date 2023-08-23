import React from "react";
import { Route, Routes } from "react-router-dom";
import { AdminDash } from "../Pages/AdminDash";
import { AdminRecipe } from "../Pages/AdminRecipe";
import { AdminUser } from "../Pages/AdminUser";
import { AdminHeader } from "../Components/AdminHeader";

export const AdminRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/admin" element={<AdminDash />}></Route>
        <Route path="/admin/recipes" element={<AdminRecipe />}></Route>
        <Route path="/admin/users" element={<AdminUser />}></Route>
      </Routes>
    </>
  );
};
