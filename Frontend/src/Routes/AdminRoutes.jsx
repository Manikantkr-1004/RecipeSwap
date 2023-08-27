import React from "react";
import { Route, Routes } from "react-router-dom";
import { AdminDash } from "../Pages/AdminDash";
import { AdminRecipe } from "../Pages/AdminRecipe";
import { AdminUser } from "../Pages/AdminUser";
import { AdminHeader } from "../Components/AdminHeader";
import { SideMenu } from "../Components/SideMenu";
import { Stack } from "@chakra-ui/react";

export const AdminRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/admin" element={<>
      <SideMenu />
      <Stack w={"85%"} float={"right"} display={"inline-block"}>
      <AdminDash />
      </Stack> </>}
     ></Route>
        <Route path="/admin/recipes" element={<>
      <SideMenu />
      <Stack w={"85%"} float={"right"} display={"inline-block"}>
      <AdminRecipe />
      </Stack> </>}></Route>
        <Route path="/admin/users" element={<>
      <SideMenu />
      <Stack w={"85%"} float={"right"} display={"inline-block"}>
      <AdminUser />
      </Stack> </>}></Route>
      </Routes>
    </>
  );
};
