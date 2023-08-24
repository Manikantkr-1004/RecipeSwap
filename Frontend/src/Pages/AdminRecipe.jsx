import {
  Box,
  Button,
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
import React, { useEffect, useState } from "react";
import { AdminHeader } from "../Components/AdminHeader";
import { useDispatch, useSelector } from "react-redux";
import { getAllRecipes } from "../Redux/adminReducer/action";
import { DataCard } from "../Components/DataCard";

import { LoadingCom } from "../Components/LoadingCom";
import { ErrorCom } from "../Components/ErrorCom";
import { FormDrawer } from "../Components/FormDrawer";

export function AdminRecipe() {
  const dipatch = useDispatch();
  const { recipes, isError, isLoading } = useSelector(
    (store) => store.AdminReducer
  );
  const [data, setData] = useState([]);
  const [totalPage, setTotalPage] = useState("0");
  const [currpage, setCurrpage] = useState(1);

  const handleBtns = (e) => {
    setCurrpage(+e.target.id);
  };

  useEffect(() => {
    dipatch(getAllRecipes());
  }, []);
  useEffect(() => {
    if (recipes.length > 0) {
      const total = Math.ceil(recipes.length / 10);
      const arr = [];
      for (let i = 1; i <= total; i++) {
        arr.push(i);
      }
      setTotalPage(arr);
    }
  }, [recipes]);

  useEffect(() => {
    let temp = [];
    let pageEnd = currpage * 10;
    let pageStart = pageEnd - 10;
    for (let i = pageStart; i < pageEnd; i++) {
      if (recipes[i]) {
        temp.push(recipes[i]);
      }
    }
    setData(temp);
  }, [currpage, recipes]);

  const handleEdit = (e) => {};
  const handleDelete = (e) => {
    console.log(e.target.id);
  };
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
        {!isError && !isLoading && data.length > 0 && (
          <Flex>
            <h1>searching....</h1>
            <h1>sorting....</h1>
          </Flex>
        )}
        <Box>
          {isLoading && !isError && <LoadingCom />}
          {isError && !isLoading && <ErrorCom isError={isError} />}
          {!isError && !isLoading && data.length > 0 && (
            <>
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
                  {data.map((recipe, index) => {
                    return (
                      <DataCard
                        key={index}
                        zero={recipe._id}
                        first={recipe.recipeName}
                        second={recipe.email}
                        third={recipe.recipeType}
                        handleEdit={handleEdit}
                        handleDelete={handleDelete}
                      />
                    );
                  })}
                </Tbody>
              </Table>
              <Flex gap={"1rem"} mt={"4rem"} justifyContent={"center"}>
                {/* <Button
                  variant={"SimpleOrange"}
                  data-id={"prev"}
                  onClick={handleBtns}
                >
                  Prev
                </Button> */}
                {totalPage.length > 0 &&
                  totalPage.map((item, ind) => (
                    <Button
                      variant={"SimpleOrange"}
                      id={item}
                      key={ind}
                      onClick={handleBtns}
                    >
                      {item}
                    </Button>
                  ))}
                {/* <Button
                  variant={"SimpleOrange"}
                  data-id={"next"}
                  onClick={handleBtns}
                >
                  Next
                </Button> */}
              </Flex>
            </>
          )}
        </Box>
      </Stack>
    </>
  );
}
