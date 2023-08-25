import {
  Alert,
  AlertIcon,
  Box,
  Button,
  Flex,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Input,
  Stack,
  Table,
  Tbody,
  Th,
  Thead,
  Tr,
  useDisclosure,
  useToast,
  FormLabel,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { AdminHeader } from "../Components/AdminHeader";
import { useDispatch, useSelector } from "react-redux";
import { addRecipes, getAllRecipes } from "../Redux/adminReducer/action";
import { DataCard } from "../Components/DataCard";

import { LoadingCom } from "../Components/LoadingCom";
import { ErrorCom } from "../Components/ErrorCom";
import { FormDrawer } from "../Components/FormDrawer";
import { BottomUpButton } from "../Components/BottomUpButton";


const init =
  {
    "username" : "",
    "email" : "",
    "password": ""
  }

export function AdminRecipe() {
  const dipatch = useDispatch();
  const { recipes, isError, isLoading } = useSelector(
    (store) => store.AdminReducer
  );
  const [recipeData, setRecipeData] = useState(init);

  const [edited, setEdited] = useState("");
  const [temp, setTemp] = useState(0);
  const { isOpen, onOpen, onClose } = useDisclosure();
  
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
    let total = [];
    let pageEnd = currpage * 10;
    let pageStart = pageEnd - 10;
    for (let i = pageStart; i < pageEnd; i++) {
      if (recipes[i]) {
        total.push(recipes[i]);
      }
    }
    setData(total);
  }, [currpage, recipes]);

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

 

  const handleResult = (value) => {
    // setTemp(temp + 1);
    setEdited(value);
    setTimeout(() => {
      setEdited("");
    }, 4000);
  };


  const handleAdd = ()=>{
    onOpen();
  }

  const handleAddRecipes = ()=>{
      dipatch(addRecipes(recipeData, handleResult))
    
     setTimeout(()=>{
      onClose();
     }, 1000);
     setRecipeData(init);
  }
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
          <Flex mb={"4rem "} gap={"1rem"}>
            <BottomUpButton handleAdd={handleAdd} />
            <Input placeholder="Search User..." w={"fit-content"} />
          </Flex>
        )}
        <Box>
        {isLoading && !isError && <LoadingCom />}
          {isError && !isLoading && <ErrorCom isError={isError} />}
          {edited && (
            <Alert m={"2rem 0"} status="success" variant="top-accent">
              <AlertIcon />
              Data {edited} Successfully!
            </Alert>
          )}
           
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
                        defineParent={"recipes"}
                        handleResult={handleResult}
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
        <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
    
                   
          <DrawerContent bgColor={"brand.600"}>
            <DrawerCloseButton />
            <DrawerHeader borderBottomWidth="1px">Add New User</DrawerHeader>

            <DrawerBody>
              <Stack spacing="24px">
                <Box>
                  <FormLabel htmlFor="username">Username</FormLabel>
                  <Input
                    type="text"
                    id="username"
                    placeholder="Please enter username"
                    name="username"
                    value={recipeData.username}
                    onChange={(e) =>
                      setRecipeData({
                        ...recipeData,
                        [e.target.name]: e.target.value,
                      })
                    }
                  />
                </Box>

                <Box>
                  <FormLabel htmlFor="email">Email</FormLabel>
                  <Input
                    type="email"
                    id="email"
                    placeholder="Please enter email"
                    name="email"
                    value={recipeData.email}
                    onChange={(e) =>
                      setRecipeData({
                        ...recipeData,
                        [e.target.name]: e.target.value,
                      })
                    }
                  />
                </Box>

                <Box>
                  <FormLabel htmlFor="password">Password</FormLabel>
                  <Input
                    type="password"
                    id="password"
                    placeholder="Please enter password"
                    name="password"
                    value={recipeData.password}
                    onChange={(e) =>
                      setRecipeData({
                        ...recipeData,
                        [e.target.name]: e.target.value,
                      })
                    }
                  />
                </Box>
              </Stack>
            </DrawerBody>

            <DrawerFooter borderTopWidth="1px">
              <Button variant="SimpleWhite" mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button onClick={handleAddRecipes} variant={"SimpleOrange"}>
                Submit
              </Button>
            </DrawerFooter>
          </DrawerContent>
   
      </Drawer>
      </Stack>
    </>
  );
}
