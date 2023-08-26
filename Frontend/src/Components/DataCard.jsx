import { Box, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverHeader, PopoverTrigger, Td, Tr } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  FormLabel,
  Select,
  InputRightAddon,
  useDisclosure,
  Input,
  InputGroup,
  InputLeftAddon,
  Stack,
  Textarea,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
} from "@chakra-ui/react";
import { styled } from "styled-components";
import { useDispatch } from "react-redux";
import { deleteRecipes, deleteUsers, updateUsers } from "../Redux/adminReducer/action";
import { FormInput } from "./FormInput";

export const DataCard = ({
  zero,
  first,
  second,
  third,
  defineParent,
  handleResult,
  recipe,
  user,
  initData
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isOpenAlert,
    onOpen: onOpenAlert,
    onClose: onCloseAlert,
  } = useDisclosure();
  const cancelRef = React.useRef();
  const dispatch = useDispatch();


  const [hoverState, setHoverState] = useState(false);
  const [userData, setUserData] = useState({});
  const [recipeData, setRecipeData] = useState({});

  useEffect(()=>{
   if(defineParent === "recipes"){
    setRecipeData({
      "recipeName" : recipe.recipeName,
      "username": recipe.username,
      "email" : recipe.email,
      "difficulty": recipe.difficulty,
      "prepTime" : recipe.prepTime,
      "cookTime" : recipe.cookTime,
      "totalTime" : recipe.totalTime,
      "servings" : recipe.servings,
      "cuisine" : recipe.cuisine,
      "mealType" : recipe.mealType,
      "occasion" : recipe.occasion,
      "dietaryConsiderations" : recipe.dietaryConsiderations,
      "recipeType" : recipe.recipeType,
      "ingredients" : recipe.ingredients,
      "instructions" : recipe.instructions,
      "notes" : recipe.notes,
      "equipment" : recipe.equipment,
      "imageURL" : recipe.imageURL,
      "nutrition": recipe.nutrition,
      "tags" : recipe.tags
  })
   }

   if(defineParent === "users"){
    setUserData({
      username: first,
      email: second
    })
   }
  }, []);
  const updateUsertoEdit = ()=>{
    if(defineParent === "users"){
      setUserData({
        username: first,
        email: second
      })
     }
     if(defineParent === "recipes"){
      setRecipeData({
        "recipeName" : recipe.recipeName,
        "username": recipe.username,
        "email" : recipe.email,
        "difficulty": recipe.difficulty,
        "prepTime" : recipe.prepTime,
        "cookTime" : recipe.cookTime,
        "totalTime" : recipe.totalTime,
        "servings" : recipe.servings,
        "cuisine" : recipe.cuisine,
        "mealType" : recipe.mealType,
        "occasion" : recipe.occasion,
        "dietaryConsiderations" : recipe.dietaryConsiderations,
        "recipeType" : recipe.recipeType,
        "ingredients" : recipe.ingredients,
        "instructions" : recipe.instructions,
        "notes" : recipe.notes,
        "equipment" : recipe.equipment,
        "imageURL" : recipe.imageURL,
        "nutrition": recipe.nutrition,
        "tags" : recipe.tags
    })
     }
  }
  const handleUpdate = () => {
    if(defineParent === "users"){
      dispatch(updateUsers({ ...userData, _id: zero }, handleResult));
    }else if(defineParent === "recipes"){

    }
  };
  const handleDelete = ()=>{
    if(defineParent === "users"){
      dispatch(deleteUsers({_id: zero}, handleResult))
    }else if(defineParent === "recipes"){
      dispatch(deleteRecipes({_id: zero}, handleResult));
    }
  }
  const Hoveredrow = ()=>{
    
    setHoverState(!hoverState)
  }
  return (
    <>
     <Popover>
  <PopoverTrigger>
  <Tr m={".5rem .8rem"} cursor={"pointer"} onClick={Hoveredrow}>
        <Td>{first}</Td>
        <Td>{second}</Td>
        <Td maxW={"15rem"}>{third}</Td>
        <Td>
          <DIV>
            <button
              className="edit_Btn Btn"
              id={zero}
              onClick={() => {
                updateUsertoEdit();
                onOpen();
              }}
            >
              <p id={zero}>Edit</p>
              <svg className="svg" viewBox="0 0 512 512">
                <path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"></path>
              </svg>
            </button>
          </DIV>
        </Td>
        <Td>
          <DIV>
            <button
              className="del_Btn Btn"
              onClick={() => {
                onOpenAlert();
              }}
              id={zero}
            >
              <p id={zero}>Delete</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-trash-2 svg del_svg"
              >
                <path d="M3 6h18" />
                <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                <line x1="10" x2="10" y1="11" y2="17" />
                <line x1="14" x2="14" y1="11" y2="17" />
              </svg>
            </button>
          </DIV>
        </Td>
      </Tr>
  </PopoverTrigger>
  <PopoverContent>
    <PopoverArrow />
    <PopoverCloseButton />
    <PopoverHeader>{first}</PopoverHeader>
    <PopoverBody w={"100%"}>{defineParent === "users" && <><Box>Username : {first}</Box><Box>Email: {second}</Box> <Box>following: {user.following.length}</Box><Box>followers: {user.followers.length}</Box></>  }
    {defineParent === "recipes" && <Stack spacing="24px"><Box>Recipe Name : {first}</Box><Box>User Email: {second}</Box> <Box>Difficulty: {recipe.difficulty}</Box></Stack>  }
    </PopoverBody>
  </PopoverContent>
</Popover>
     
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size={"lg"}>
        <DrawerOverlay />
        {defineParent === "users" && (
          <DrawerContent bgColor={"brand.600"}>
            <DrawerCloseButton />
            <DrawerHeader borderBottomWidth="1px">Edit User</DrawerHeader>

            <DrawerBody>
              <Stack spacing="24px">
                <Box>
                  <FormLabel htmlFor="username">Username</FormLabel>
                  <Input
                    type="text"
                    id="username"
                    placeholder="Please enter username"
                    name="username"
                    value={userData.username}
                    onChange={(e) =>
                      setUserData({
                        ...userData,
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
                    value={userData.email}
                    onChange={(e) =>
                      setUserData({
                        ...userData,
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
              <Button onClick={handleUpdate} variant={"SimpleOrange"}>
                Submit
              </Button>
            </DrawerFooter>
          </DrawerContent>
        )}
        {defineParent === "recipes" && (
          <DrawerContent bgColor={"brand.600"}>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">Edit Recipe</DrawerHeader>

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
            <Button onClick={handleUpdate} variant={"SimpleOrange"}>
              Submit
            </Button>
          </DrawerFooter>
        </DrawerContent>
 
        )}
      </Drawer>
      <AlertDialog
        isOpen={isOpenAlert}
        leastDestructiveRef={cancelRef}
        onClose={onCloseAlert}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Delete {first}
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure? You can't undo this action afterwards.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button
                variant={"SimpleWhite"}
                ref={cancelRef}
                onClick={onCloseAlert}
              >
                Cancel
              </Button>
              <Button colorScheme="red" onClick={()=> {
                handleDelete();
                onCloseAlert();
              }} ml={3}>
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>

    
    </>
  );
};

const DIV = styled.span`
  .edit_Btn {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: 38px;
    border: none;
    padding: 0px 10px;
    background-color: rgb(80, 189, 101);
    color: white;
    font-weight: 400;
    cursor: pointer;
    border-radius: 10px;

    transition-duration: 0.3s;
  }

  .Btn > p {
    visibility: hidden;
  }
  .del_Btn {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    height: 38px;
    border: none;
    padding: 0px 10px;
    background-color: rgb(255, 65, 65);
    color: white;
    font-weight: 400;
    cursor: pointer;
    border-radius: 10px;
  }
  .svg {
    width: 15px;
    position: absolute;
    right: 0;
    margin-right: 17px;
    fill: white;

    /* transition-duration: 0.3s; */
  }
  .del_svg {
    margin-right: 28px;
  }
  /* .Btn:hover {
    color: transparent;
  } */

  .Btn:hover svg {
    /* right: 43%;
    margin: 0;
    padding: 0;
    border: none;
    transition-duration: 0.3s; */
    visibility: hidden;
  }
  .Btn:hover p {
    visibility: visible;
  }

  .Btn:active {
    transform: translate(3px, 3px);
    transition-duration: 0.3s;
    box-shadow: 2px 2px 0px rgb(109, 109, 109);
  }
`;
