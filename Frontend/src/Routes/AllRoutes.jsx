import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "../Pages/Home";
import { Login } from "../Pages/Login";
import { ForgotPass } from "../Pages/ForgotPass";
import { ResetPass } from "../Pages/ResetPass";
import { UserProfile } from "../Pages/UserProfile";
import { Signup } from "../Pages/Signup";
import { About } from "../Pages/About";
import { RecipeList } from "../Pages/RecipeList";
import { NotFound } from "../Pages/NotFound";
import { RecipeType2 } from "../Pages/RecipeType2";
import { SideMenu } from "../Components/SideMenu";
import { Stack } from "@chakra-ui/react";
import { styled } from "styled-components";
import {AdminDash} from "../Pages/AdminDash"
import {AdminRecipe} from "../Pages/AdminRecipe"
import {AdminUser} from "../Pages/AdminUser"
import {PrivateUserRoutes} from "./PrivateUserRoutes"
import {PrivateAdminRoutes} from "./PrivateAdminRoutes"

export function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/reset_password/:token" element={<ResetPass />}></Route>
      <Route path="/forgot_password" element={<ForgotPass />}></Route>
      <Route path="/userprofile" element={<PrivateUserRoutes><UserProfile /></PrivateUserRoutes>}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/about" element={<About />}></Route>
    
      <Route path="/recipe/:id" element={<RecipeType2 />}></Route>
      <Route path="/recipelist" element={<RecipeList />}></Route>
      {/* <Route path="/recipelist" element={<RecipeList />}></Route> */}
      <Route path="*" element={<NotFound />}></Route>

      <Route path="/admin" element={<PrivateAdminRoutes><SPAN>
      <SideMenu />
      <Stack className="wrapperlayout"  float={"right"} display={"inline-block"}>
      <AdminDash />
      </Stack> </SPAN></PrivateAdminRoutes>}
     ></Route>
        <Route path="/admin/recipes" element={<PrivateAdminRoutes><SPAN>
      <SideMenu />
      <Stack className="wrapperlayout" float={"right"} display={"inline-block"}>
      <AdminRecipe />
      </Stack> </SPAN></PrivateAdminRoutes>}></Route>
        <Route path="/admin/users" element={<PrivateAdminRoutes><SPAN>
      <SideMenu />
      <Stack className="wrapperlayout" float={"right"} display={"inline-block"}>
      <AdminUser />
      </Stack> </SPAN></PrivateAdminRoutes>}></Route>
    </Routes>
  );
}

const SPAN = styled.span`
 .wrapperlayout{
  width: 85%;
 }
 @media screen  and (max-width: 769px){
    .wrapperlayout{
      width: 100%;
    }
  }
`;
