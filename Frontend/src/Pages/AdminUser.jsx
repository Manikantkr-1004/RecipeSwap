import {
  Alert,
  AlertIcon,
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  FormLabel,
  Input,
  Select,
  Stack,
  Table,
  Tbody,
  Text,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { AdminHeader } from "../Components/AdminHeader";
import { useDispatch, useSelector } from "react-redux";
import { ErrorCom } from "../Components/ErrorCom";
import { LoadingCom } from "../Components/LoadingCom";
import { DataCard } from "../Components/DataCard";
import { addUers, getAllUsers, getTokenCookie } from "../Redux/adminReducer/action";
import { BottomUpButton } from "../Components/BottomUpButton";
import { DebounceInput } from "react-debounce-input";
import { styled } from "styled-components";
import Cookies from "js-cookie";
import { Helmet } from "react-helmet";


const init =
  {
    "username" : "",
    "email" : "",
    "password": "",
    
  }

export function AdminUser() {
  const dipatch = useDispatch();

  const { users, isError, isLoading } = useSelector(
    (store) => store.AdminReducer
  );

  const [userData, setUserData] = useState(init);

  const [edited, setEdited] = useState("");
  const [state, setState] = useState({
    value: "",
    key : "username"
  });
  const { isOpen, onOpen, onClose } = useDisclosure();
  
  const [data, setData] = useState([]);
  const [totalPage, setTotalPage] = useState("0");
  const [currpage, setCurrpage] = useState(1);

  const handleBtns = (e) => {
    setCurrpage(+e.target.id);
  };

  useEffect(()=>{
    const token = Cookies.get('login_token');
    getTokenCookie(token);
  }, []);
  useEffect(() => {
    dipatch(getAllUsers(state));
   
  }, [state.value]);
  useEffect(() => {
    let total = [];
    let pageEnd = currpage * 10;
    let pageStart = pageEnd - 10;
    for (let i = pageStart; i < pageEnd; i++) {
      if (users[i]) {
        total.push(users[i]);
      }
    }
   
    setData(total);
  }, [users, currpage]);

  useEffect(() => {

    if (users.length > 0) {
      const total = Math.ceil(users.length / 10);
      const arr = [];
      for (let i = 1; i <= total; i++) {
        arr.push(i);
      }
      setTotalPage(arr);
    }
  }, [users]);

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

 useEffect(()=>{
  if(data.length === 0){
    dipatch(getAllUsers(""));
  }
 }, [data]);
  const handleUser = ()=>{
      dipatch(addUers(userData, handleResult))
     
     setTimeout(()=>{
      
      onClose();
     }, 1000);
     setUserData(init);
  }
  return (
    <>
    <Helmet>
      <title>AdminUser | RecipeSwap</title>
    </Helmet>
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
        <SPAN>
          <Flex mb={"4rem "} gap={"1.5rem"} className="filters">
            <BottomUpButton handleAdd={handleAdd} />
            <Select w={"fit-content"} onChange={(e) => setState({...state,key: e.target.value})}>
              <option value="username">Search By</option>
              <option value="username">Username</option>
              <option value="email">Email</option>
            </Select>
            
              <DebounceInput minLength={2}
            debounceTimeout={500}
            placeholder={"Search User..."}
            className="inputBox"
            onChange={event => setState({...state,
              value: event.target.value})} />
       
            {/* <h1>sorting....</h1> */}
          </Flex>
          </SPAN>
      
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
            <div style={{ overflow: "auto"}}>
              <Table size="md" >
                <Thead bg={"brand.200"}>
                  <Tr>
                    <Th color={"brand.300"}>
                      {/* <Flex alignItems={"center"} gap=".5rem"> */}
                      <Text>UserName</Text>
                      {/* <ArrowUp size={20} strokeWidth={1.5} /> */}
                      {/* </Flex> */}
                    </Th>
                    <Th color={"brand.300"} pl={"4rem"}>
                      <Text>Email</Text>
                    </Th>
                    <Th color={"brand.300"}></Th>
                    <Th color={"brand.300"}>Edit</Th>
                    <Th color={"brand.300"}>Delete</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {data.length > 0 && data.map((user, index) => {
                    return (
                      <DataCard
                        key={index}
                        zero={user._id}
                        first={user.username}
                        second={user.email}
                        defineParent={"users"}
                        user={user}
                        handleResult={handleResult}
                        
                      />
                    );
                  })}
                </Tbody>
              </Table>
              </div>
              <Flex gap={"1rem"} mt={"4rem"} justifyContent={"center"}>
                {/* <Button
                  variant={"SimpleOrange"}
                  data-id={"prev"}
                  onClick={handleBtns}
                >
                  Prev
                </Button> */}
                {totalPage.length > 0 &&
                  totalPage.map((item, index) => (
                    <Button
                      key={index}
                      variant={"SimpleOrange"}
                      id={item}
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
        <Drawer isOpen={isOpen} placement="right" onClose={onClose} size={"lg"}>
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

                <Box>
                  <FormLabel htmlFor="password">Password</FormLabel>
                  <Input
                    type="password"
                    id="password"
                    placeholder="Please enter password"
                    name="password"
                    value={userData.password}
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
              <Button onClick={handleUser} variant={"SimpleOrange"}>
                Submit
              </Button>
            </DrawerFooter>
          </DrawerContent>
   
      </Drawer>
      </Box>
    </>
  );
}

const SPAN = styled.span`
 
 .inputBox{
  background-color: white;
  border: 2px solid #C8C8C8;
  border-radius: 5px;
  padding: 7px 10px;

 }
 .inputBox:focus{
  border: none;
  outline: 2px solid #ff8f49;
 }

 @media screen and (max-width: 426px) {
  .filters{
    flex-direction: column;
  }
 }
`