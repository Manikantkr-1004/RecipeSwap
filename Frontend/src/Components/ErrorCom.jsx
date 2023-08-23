import { Flex, Heading, Image, Stack } from "@chakra-ui/react";
import React, { useEffect } from "react";

export const ErrorCom = ({ isError }) => {
  return (
    <Stack alignItems={"center"} gap={"2rem"}>
      <Image
        mixBlendMode={"multiply"}
        src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-1920.jpg?w=740&t=st=1692779579~exp=1692780179~hmac=0bc8683d4cc2c25c809377ab08063214b714fabd3a69d32d7016c48340cacfc3"
        w={"20%"}
      />
      <Heading
        fontWeight={"normal"}
        p={"1rem"}
        borderRadius={"1rem"}
        color={"brand.400"}
        bg={"rgb(255, 65, 65)"}
      >
        Error: &nbsp;
        {isError}
      </Heading>
    </Stack>
  );
};
