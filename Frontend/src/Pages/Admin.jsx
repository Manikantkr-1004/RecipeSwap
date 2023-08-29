import { Box, Flex, Stack } from "@chakra-ui/react";
import React from "react";
import { AdminHeader } from "../Components/AdminHeader";
import { SideMenu } from "../Components/SideMenu";
import { AdminRoutes } from "../Routes/AdminRoutes";
import { Helmet } from 'react-helmet';

export function Admin() {
  return (
    <>
    <Helmet>
      <title>Admin | RecipeSwap</title>
    </Helmet>
      <SideMenu />
      <Stack w={"85%"} float={"right"} display={"inline-block"}>
      <AdminRoutes />
      </Stack>
    </>
  );
}
