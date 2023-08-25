import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "../Pages/Home";
import { Login } from "../Pages/Login";
import { ForgotPass } from "../Pages/ForgotPass";
import { ResetPass } from "../Pages/ResetPass";
import { UserProfile } from "../Pages/UserProfile";
import { Signup } from "../Pages/Signup";
import { About } from "../Pages/About";
import { Admin } from "../Pages/Admin";
import { AdminDash } from "../Pages/AdminDash";
import { AdminRecipe } from "../Pages/AdminRecipe";
import { AdminUser } from "../Pages/AdminUser";
import { Recipe } from "../Pages/Recipe";
import { RecipeList } from "../Pages/RecipeList";
import { NotFound } from "../Pages/NotFound";
import { RecipeType2 } from "../Pages/RecipeType2";

export function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/reset_password/:token" element={<ResetPass />}></Route>
      <Route path="/forgot_password" element={<ForgotPass />}></Route>
      <Route path="/userprofile" element={<UserProfile />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/recipe/:id" element={<RecipeType2 />}></Route>
      <Route path="/recipelist" element={<RecipeList />}></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
}
