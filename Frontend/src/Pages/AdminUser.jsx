import {
  Alert,
  AlertIcon,
  Box,
  Button,
  Flex,
  Input,
  Table,
  Tbody,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { AdminHeader } from "../Components/AdminHeader";
import { useDispatch, useSelector } from "react-redux";
import { ErrorCom } from "../Components/ErrorCom";
import { LoadingCom } from "../Components/LoadingCom";
import { DataCard } from "../Components/DataCard";
import { getAllUsers } from "../Redux/adminReducer/action";
import { ArrowUp } from "lucide-react";

export function AdminUser() {
  const dipatch = useDispatch();

  const { users, isError, isLoading } = useSelector(
    (store) => store.AdminReducer
  );
  const [edited, setEdited] = useState(false);
  const [temp, setTemp] = useState(0);
  const [data, setData] = useState([]);
  const [totalPage, setTotalPage] = useState("0");
  const [currpage, setCurrpage] = useState(1);

  const handleBtns = (e) => {
    setCurrpage(+e.target.id);
  };
  useEffect(() => {
    // dipatch(getAllUsers());
  }, [temp]);
  useEffect(() => {
    let temp = [];
    let pageEnd = currpage * 10;
    let pageStart = pageEnd - 10;
    for (let i = pageStart; i < pageEnd; i++) {
      if (users[i]) {
        temp.push(users[i]);
      }
    }
    setData(temp);
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

  const handleEdit = () => {
    setTemp(temp + 1);
    setEdited(true);
    setTimeout(() => {
      setEdited(false);
    }, 4000);
  };

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
        {!isError && users.length > 0 && (
          <Flex mb={"4rem "} gap={"1rem"}>
            <Input placeholder="Search User..." w={"fit-content"} />
            {/* <h1>sorting....</h1> */}
          </Flex>
        )}
        <Box>
          {isLoading && !isError && <LoadingCom />}
          {isError && !isLoading && <ErrorCom isError={isError} />}
          {edited && (
            <Alert m={"2rem 0"} status="success" variant="top-accent">
              <AlertIcon />
              Data Updated Sccuessfully!
            </Alert>
          )}
          {!isError && !isLoading && data.length > 0 && (
            <>
              <Table>
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
                  {data.map((user, index) => {
                    return (
                      <DataCard
                        key={index}
                        zero={user._id}
                        first={user.username}
                        second={user.email}
                        defineParent={"users"}
                        handleEdit={handleEdit}
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
      </Box>
    </>
  );
}
