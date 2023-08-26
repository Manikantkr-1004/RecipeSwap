import { Box, Flex, Stack } from "@chakra-ui/react";
import React from "react";
import { AdminHeader } from "../Components/AdminHeader";
import { SideMenu } from "../Components/SideMenu";
import { AdminRoutes } from "../Routes/AdminRoutes";

export function Admin() {
  return (
    <>
      <SideMenu />
      <Stack w={"85%"} float={"right"} display={"inline-block"}>
      <AdminRoutes />
      </Stack>
    </>
  );
}
