import {
  Box,
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
  const [data, setData] = useState([]);
  const [totalPage, setTotalPage] = useState(0);
  const [currpage, setCurrpage] = useState(1);
  const callAPI = async () => {
    await dipatch(getAllUsers());
  };
  useEffect(() => {
    callAPI();
  }, []);
  useEffect(() => {
    if (users.length > 0) {
      const total = Math.ceil(users.length / 2);
      setTotalPage(total);
      let temp = [];
      for (let i = 0; i < 10; i++) {
        temp.push(users[i]);
      }
      setData(temp);
    }
  }, [users]);

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
                        first={user.username}
                        second={user.email}
                      />
                    );
                  })}
                </Tbody>
              </Table>
            </>
          )}
        </Box>
      </Box>
    </>
  );
}
