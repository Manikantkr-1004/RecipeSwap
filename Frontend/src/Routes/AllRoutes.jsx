import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "../Pages/Home";
import { Login } from "../Pages/Login";
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

export function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/user/:id" element={<UserProfile />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/admin" element={<Admin />}></Route>
      <Route path="/admindashboard" element={<AdminDash />}></Route>
      <Route path="/adminrecipedit/:id" element={<AdminRecipe />}></Route>
      <Route path="/adminuseredit/:id" element={<AdminUser />}></Route>
      <Route path="/recipe/:id" element={<Recipe />}></Route>
      <Route path="/recipelist" element={<RecipeList />}></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
}
