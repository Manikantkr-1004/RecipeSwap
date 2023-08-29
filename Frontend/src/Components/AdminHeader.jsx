import {  Avatar, Button, Flex, Heading, Input, Menu, MenuButton,  MenuList, Stack, useToast,  } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useRef, useState } from "react";
import { AlertCircle, AlignJustify, BadgeHelp, ChefHat, ChevronRight, Home, MailPlus,  UserCircle2, Users } from "lucide-react";
import { styled } from "styled-components";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { logoutAdmin, updateUsersAvatar } from "../Redux/adminReducer/action";

export const AdminHeader = () => {
  const links = [
    {
      name: "Alerts",
      iconName: "AlertCircle",
      path: "/admin",
    },
    {
      name: "Email",
      iconName: "MailPlus",
      path: "/admin/recipes",
    },
  
  ];
  const iconComponents = {
    AlertCircle: AlertCircle,
    MailPlus: MailPlus,
    UserCircle2: UserCircle2,
  };

  const sideMenulinks = [
    {
      iconName: "Home",
      name: "Home",
      path: "/admin",
    },
    {
      iconName: "Users",
      name: "Users",
      path: "/admin/users",
    },
    {
      iconName: "ChefHat",
      name: "Recipes",
      path: "/admin/recipes",
    },
    {
      iconName: "BadgeHelp",
      name: "Help",
      path: "/admin/help",
    },
  ];
  const SideiconComponents = {
    Home: Home,
    ChefHat: ChefHat,
    BadgeHelp: BadgeHelp,
    Users: Users,
  };
  const [current, setCurrent] = useState("Dashboard");
  const dispatch = useDispatch();
  const [imgAvatar, setImageAvatar] = useState("");
  const name = Cookies.get("login_name");
  let avatarImg = Cookies.get("login_avatar");
  const inputRef = useRef(null);
  const toast = useToast();
  useEffect(() => {
    let path = window.location.href;
    path = path.split("/");
    path = path[path.length - 1].split("");
    path[0] = path[0].toUpperCase();
    setCurrent(path.join(""));
  }, [window.location.href]);

  const updateAvatar = ()=>{
    avatarImg = Cookies.get("login_avatar");
    if(avatarImg !== undefined){
      setImageAvatar(avatarImg);
    }else if (name !== undefined) {
      let value = name.split(" ");
      if (value[1] !== undefined) {
        setImageAvatar(
          "https://ui-avatars.com/api/?bold=true&background=ff8f49&color=fff&name=" + value[0] + "+" + value[1]
        );
      } else {
        setImageAvatar("https://ui-avatars.com/api/?bold=true&background=ff8f49&color=fff&name=" + value[0]);
      }
    }
  }
  useEffect(() => {
    updateAvatar();
  }, [avatarImg, name]);

  const handleFileChange = (event) => {
    const fileObj = event.target.files[0];
    if (!fileObj) {
      return;
    }

    let formData = new FormData()
    formData.append('file', fileObj)
    formData.append("upload_preset", "rdy1h4fu");
    formData.append("cloud_name", "dpspgsvks");

    toast({
      title: `Just a Second...Uploading...`,
      status: "info",
      isClosable: true,
    })
    fetch("https://api.cloudinary.com/v1_1/dpspgsvks/image/upload", {
      method :"post",
      body: formData
    }).then((resp)=> resp.json()).then((data)=> {
      // updateUsersAvatar(data.url);
      Cookies.set("login_avatar",  data.url);
      updateAvatar();
    }).catch((err)=> console.log(err));

    
    event.target.value = null;

  };

  const handleLogout = ()=>{
    let token = Cookies.get('login_token');
    dispatch(logoutAdmin(token));
    Cookies.remove('login_token');
    Cookies.remove("login_name");
    Cookies.remove("login_email");
    Cookies.remove("login_role");
    window.location.reload();
    // navigate("/");
  }
  return (
    <Stack
      gap={"1.7rem"}
      padding={"1rem 2rem"}
      height={"15rem"}
      borderRadius={"0 0 1rem 1rem"}
      bgColor={"brand.200"}
    >
      <SPAN>
      <Flex justifyContent={"space-between"} alignItems={'center'}>
      <span className="sideIcon" >
        <Menu>
  <MenuButton>
  <AlignJustify color="#ffffff" size={38}/>
  </MenuButton>
  <MenuList p={"0rem 1rem"}>
   <Stack
        gap={"1rem"}
        m={"2rem 0"}
        fontSize="1.1rem"
        className="animate__animated animate__slideInUp"
      >
        {sideMenulinks.map((item, ind) => {
          const SideiconComponent = SideiconComponents[item.iconName];
          return (
            <Link to={item.path} key={ind}>
              <Flex
                alignItems={"center"}
                justifyContent={"space-between"}
                mr={".6rem"}
                p={"1rem"}
                borderRadius={".5rem"}
                _hover={{
                  boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
                }}
                boxShadow={
                  "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
                }
              >
                <Flex gap={".5rem"} alignItems={"center"}>
                  <SideiconComponent size={24} />
                  {item.name}
                </Flex>
                <ChevronRight strokeWidth={1.5} />
              </Flex>
            </Link>
          );
        })}

         
      </Stack>
 
   

  </MenuList>
</Menu>
        </span>
        <Input type="search" w={"fit-content"} placeholder="Search..." />
        <Flex
          bg={"brand.400"}
          borderRadius={"1rem"}
          p={".2rem .7rem"}
          justifyContent={"space-between"}
          gap={"1rem"}
          fontSize={"1.1rem"}
        >
          {links.map((item, ind) => {
            const IconComponent = iconComponents[item.iconName];
            return (
              <Link to={item.path} key={ind}>
                <Flex
                  alignItems={"center"}
                  justifyContent={"space-between"}
                  mr={".2rem"}
                  p={".4rem"}
                  borderRadius={".5rem"}
                  _hover={{
                    boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
                  }}
                >
                  <IconComponent />
                </Flex>
              </Link>
            );
          })}
            <Flex
                  alignItems={"center"}
                  borderRadius={".5rem"}
                  _hover={{
                    boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
                  }}
                >
                   <input
        style={{display: 'none'}}
        ref={inputRef}
        type="file"
        onChange={handleFileChange}
      />
           <Button
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
                onClick={() => inputRef.current.click()}
              >
                <Avatar size={{base: "sm", sm: "sm", md: "sm", lg: "sm"}}  src={imgAvatar} />
              </Button>
              </Flex>
          <DIV>
            <button className="Btn" onClick={handleLogout}>
              <div className="sign">
                <svg viewBox="0 0 512 512">
                  <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path>
                </svg>
              </div>

              <div className="text">Logout</div>
            </button>
          </DIV>
        </Flex>
      </Flex>
      </SPAN>
      <Flex>
        <Heading>{current}</Heading>
      </Flex>
    </Stack>
  );
};
const SPAN = styled.span`
  .sideIcon{
    display: none;
  }
  @media screen  and (max-width: 769px){
    .sideIcon{
      display: inline-block;
    }
  }
`;
const DIV = styled.div`
  .Btn {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 35px;
    height: 35px;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition-duration: 0.3s;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.199);
    background-color: rgb(255, 65, 65);
  }

  /* plus sign */
  .sign {
    width: 100%;
    transition-duration: 0.3s;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .sign svg {
    width: 14px;
  }

  .sign svg path {
    fill: white;
  }
  /* text */
  .text {
    position: absolute;
    right: 0%;
    width: 0%;
    opacity: 0;
    color: white;
    font-size: 0.9em;
    font-weight: 400;
    transition-duration: 0.3s;
  }
  /* hover effect on button width */
  .Btn:hover {
    width: 125px;
    border-radius: 40px;
    transition-duration: 0.3s;
  }

  .Btn:hover .sign {
    width: 30%;
    transition-duration: 0.3s;
    padding-left: 20px;
  }
  /* hover effect button's text */
  .Btn:hover .text {
    opacity: 1;
    width: 70%;
    transition-duration: 0.3s;
    padding-right: 10px;
  }
  /* button click effect*/
  .Btn:active {
    transform: translate(2px, 2px);
  }
`;
