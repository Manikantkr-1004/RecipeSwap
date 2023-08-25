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
import { FormInput } from "../Components/FormInput";

const init =
  {
    "recipeName" : "",
    "username": "",
    "email" : "",
    "difficulty": "",
    "prepTime" : "",
    "cookTime" : "",
    "totalTime" : "",
    "servings" : "",
    "cuisine" : "",
    "mealType" : "",
    "occasion" : "",
    "dietaryConsiderations" : "",
    "recipeType" : "",
    "ingredients" : "",
    "instructions" : "",
    "notes" : "",
    "equipment" : "",
    "imageURL" : "",
    "nutrition": "",
    "tags" : ""
  }
const initData = [
  { title: "Recipe Name", naming: "recipeName", datatype: "text"},
  { title: "User Name", naming: "username", datatype: "text"}, 
  { title: "User Email", naming: "email", datatype: "email"}, 
  { title: "Difficulty", naming: "difficulty", datatype: "text"}, 
  { title: "Preparation Time", naming: "prepTime", datatype: "text"}, 
  { title: "Cook Time", naming: "cookTime", datatype: "text"}, 
  { title: "Total Time", naming: "totalTime", datatype: "text"}, 
  { title: "Servings", naming: "servings", datatype: "number"}, 
  { title: "Cuisine", naming: "cuisine", datatype: "text"}, 
  { title: "Meal Type", naming: "mealType", datatype: "text"}, 
  { title: "Occasion", naming: "occasion", datatype: "text"}, 
  { title: "Dietary Considerations", naming: "dietaryConsiderations", datatype: "text"}, 
  { title: "Recipe Type", naming: "recipeType", datatype: "text"}, 
  { title: "Ingredients", naming: "ingredients", datatype: "text"}, 
  { title: "instructions", naming: "instructions", datatype: "text"}, 
  { title: "Notes", naming: "notes", datatype: "text"}, 
  { title: "Equipment", naming: "equipment", datatype: "text"}, 
  { title: "Recipe Image", naming: "imageURL", datatype: "text"}, 
  { title: "Nutrition", naming: "nutrition", datatype: "text"}, 
  { title: "Tags", naming: "tags", datatype: "text"}, 
];
export function AdminRecipe() {
  const dipatch = useDispatch();
  const { recipes, isError, isLoading } = useSelector(
    (store) => store.AdminReducer
  );
  const [recipeData, setRecipeData] = useState(init);

  const [edited, setEdited] = useState("");

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
      console.log(recipeData);
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
            <Input placeholder="Search Recipe..." w={"fit-content"} />
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
                      Recipe Name
                    </Th>
                    <Th color={"brand.300"} pl={"5rem"}>
                      User Email
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
                        recipe={recipe}
                        initData={initData}
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
        <Drawer isOpen={isOpen} placement="right" onClose={onClose} size={'lg'}>
        <DrawerOverlay />
    
                   
          <DrawerContent bgColor={"brand.600"}>
            <DrawerCloseButton />
            <DrawerHeader borderBottomWidth="1px">Add New Recipe</DrawerHeader>

            <DrawerBody>
              <Stack spacing="24px">
                {initData.map((item)=> (
                  <FormInput title={item.title} naming={item.naming} datatype={item.datatype} recipeData={recipeData} setRecipeData={setRecipeData} />
                ))}
              

               
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
