import { Box } from "@chakra-ui/react";
import React from "react";
import { AdminHeader } from "../Components/AdminHeader";

export function AdminDash() {
  return (
    <>
      <AdminHeader />
      <Box
        bg={"brand.600"}
        borderRadius={"1rem"}
        p={"3rem"}
        w={"95%"}
        margin={"auto"}
        mt={"-5rem"}
        className="animate__animated animate__slideInUp"
      >
        <h1>Admin Home</h1>
      </Box>
    </>
  );
}
