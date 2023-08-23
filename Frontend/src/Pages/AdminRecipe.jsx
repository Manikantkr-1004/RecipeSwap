import {
  Box,
  Flex,
  Image,
  Stack,
  Table,
  Tbody,
  Th,
  Thead,
  Tr,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { AdminHeader } from "../Components/AdminHeader";
import { useDispatch, useSelector } from "react-redux";
import { getAllRecipes } from "../Redux/adminReducer/action";
import { DataCard } from "../Components/DataCard";

import { LoadingCom } from "../Components/LoadingCom";
import { ErrorCom } from "../Components/ErrorCom";

export function AdminRecipe() {
  const dipatch = useDispatch();

  const { recipes, isError, isLoading } = useSelector(
    (store) => store.AdminReducer
  );
  useEffect(() => {
    dipatch(getAllRecipes());
  }, []);

  return (
    <>
      <AdminHeader />
      <Stack
        bg={"brand.600"}
        borderRadius={"1rem"}
        p={"3rem"}
        w={"95%"}
        margin={"auto"}
        mt={"-5rem"}
        className="animate__animated animate__slideInUp"
      >
        {!isError && recipes.length > 0 && (
          <Flex>
            <h1>searching....</h1>
            <h1>sorting....</h1>
          </Flex>
        )}
        <Box>
          {isLoading && !isError && <LoadingCom />}
          {isError && !isLoading && <ErrorCom isError={isError} />}
          {!isError && recipes.length > 0 && (
            <Table>
              <Thead bg={"brand.200"}>
                <Tr>
                  <Th color={"brand.300"} pl={"5rem"}>
                    Name
                  </Th>
                  <Th color={"brand.300"} pl={"5rem"}>
                    Email
                  </Th>
                  <Th color={"brand.300"} pl={"2rem"}>
                    Type
                  </Th>
                  <Th color={"brand.300"}>Edit</Th>
                  <Th color={"brand.300"}>Delete</Th>
                </Tr>
              </Thead>
              <Tbody>
                {recipes.map((recipe, index) => {
                  return (
                    <DataCard
                      key={index}
                      first={recipe.recipeName}
                      second={recipe.email}
                      third={recipe.recipeType}
                    />
                  );
                })}
              </Tbody>
            </Table>
          )}
        </Box>
      </Stack>
    </>
  );
}
