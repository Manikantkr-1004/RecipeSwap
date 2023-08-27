import {
  Avatar,
  Box,
  Button,
  Center,
  Flex,
  Image,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Stack,
  useColorModeValue,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { getAllRecipes, getCategory } from "../Redux/receipeReducer/action";
import { DebounceInput } from "react-debounce-input";
import logo from "./images/logo.png";
import Cookies from "js-cookie";
import { USER_FAIL, VALID_USER_LOGOUT_SUCCESS } from "../Redux/actionTypes";
import { userlogout } from "../Redux/userReducer/action";
import { AlignJustify } from "lucide-react";

export const Header = () => {
  const { isOpen, onToggle } = useDisclosure();
  const [state, setState] = useState("");
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const [prevScrollpos, setPrevScrollpos] = useState(window.pageYOffset);
  const [navbarTop, setNavbarTop] = useState(0);

  const token = Cookies.get("login_token");
  const name = Cookies.get("login_name");
  const emailUser = Cookies.get("login_email");
  const [imgAvatar, setImageAvatar] = useState("");
  const toast = useToast();
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");
  useEffect(() => {
      if (state !== "") {
      dispatch(getAllRecipes(state));
      navigation("/recipelist");
    }
  }, [state]);

  useEffect(() => {
    const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            setNavbarTop(0);
        } else {
            setNavbarTop(-110);
        }
        setPrevScrollpos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
}, [prevScrollpos]);
  useEffect(() => {
    if (name !== undefined) {
      let value = name.split(" ");
      if (value[1] !== undefined) {
        setImageAvatar(
          "https://ui-avatars.com/api/?bold=true&background=ff8f49&color=fff&name=" + value[0] + "+" + value[1]
        );
      } else {
        setImageAvatar("https://ui-avatars.com/api/?bold=true&background=ff8f49&color=fff&name=" + value[0]);
      }
    }
  }, []);
  const handleCategory = (value)=>{
 
    dispatch(getCategory(value));
  }
  const handleLogout = () => {
    dispatch(userlogout(token))
      .then((res) => {
        dispatch({ type: VALID_USER_LOGOUT_SUCCESS });
        if (res.data.message === "User has been logged out") {
          toast({
            title: `Logged Out Successfully!!`,
            position: "bottom",
            status: "success",
            duration: 2000,
            isClosable: true,
          });
          Cookies.remove("login_token");
          Cookies.remove("login_email");
          Cookies.remove("login_name");
          Cookies.remove("login_role");
          window.location.reload();
        } else {
          toast({
            title: `Something Went Wrong, Try again!!`,
            position: "bottom",
            status: "error",
            duration: 3000,
            isClosable: true,
          });
        }
      })
      .catch((err) => {
        dispatch({ type: USER_FAIL });
        toast({
          title: `Something Went Wrong, Try again!!`,
          position: "bottom",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      });
  };
  return (
    <SPAN>
    <Flex  style={{ top: `${navbarTop}px` }}
                position={"fixed"}
                top={"0"}
                transition={"top 0.3s"}
                zIndex={"5"} w={"100%"} bg="brand.400" boxShadow={"rgba(0, 0, 0, 0.16) 0px 1px 4px"} 
                gap={".5rem"} justifyContent={"space-around"}>
      <Box>
        <Link to={"/"}>
          <Image mt={"-.4rem"} p={".5rem 0rem"} className="logo_img" src={logo} alt="logo" />
        </Link>
      </Box>

      <DIV>
        <DebounceInput
          minLength={2}
          debounceTimeout={500}
          placeholder={"Feeling Hungry, Search...."}
          className="inputBox"
          onChange={(event) => setState(event.target.value)}
        />
      </DIV>

      <Flex gap={"1rem"} alignItems={"center"} className="navlinks">
        {NAV_ITEMS.map((navItem) => (
          <Box key={navItem.label}>
            <Popover trigger={"hover"} placement={"bottom-start"}>
              <PopoverTrigger>
                <Link to={navItem.to} onClick={() => handleCategory(navItem.label)}>
                  <Box
                    as="a"
                    fontSize={{ md: "9px", lg: "12px", xl: "16px" }}
                    fontWeight={900}
                    color={linkColor}
                    _hover={{
                      textDecoration: "none",
                      color: linkHoverColor,
                    }}
                  >
                    {navItem.label}
                  </Box>
                </Link>
              </PopoverTrigger>
            </Popover>
          </Box>
        ))}
      </Flex>
      <Flex>
        {token ? (
          <Flex spacing={7}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <Avatar  src={imgAvatar} />
              </MenuButton>
              <MenuList alignItems={"center"}>
                <br />
                <Center>
                  <Avatar size={"xl"} src={imgAvatar} />
                </Center>
                <br />
                <Center>
                  <p>{name}</p>
                </Center>
                <br />
                <MenuDivider />
                <Stack>
                {NAV_ITEMS.map((navItem) => (
    <MenuItem>  <Link to={navItem.to}  onClick={() => handleCategory(navItem.label)}>{navItem.label}</Link> </MenuItem>
  ))}
                </Stack>
               
  <MenuDivider />
                <MenuItem>{emailUser}</MenuItem>
                <Link to={"/userprofile"}>
                  <MenuItem>Account Settings</MenuItem>
                </Link>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        ) : (
          <Flex
            gap={"1rem"}
            alignItems={"center"}
            className="outerauth"
          >
            <Link to="/login">
            <Button
              color={"black"}
              as={"a"}
              fontSize={"md"}
              fontWeight={400}
              variant={"link"}
              href={"#"}
            >
              Sign In
            </Button>
            </Link>
            <Link to={"/signup"}>
              <Button
                as={"a"}
                fontSize={"sm"}
                fontWeight={500}
                color={"white"}
                bg={"#e45a05"}
              >
                Sign Up
              </Button>
            </Link>
          </Flex>
        )}
      </Flex>
     {!token && <Flex className="sidemenu">
      <Menu>
  <MenuButton>
  <AlignJustify size={30} />
  </MenuButton>
  <MenuList>
  {NAV_ITEMS.map((navItem) => (
    <Link to={navItem.to}  onClick={() => handleCategory(navItem.label)}><MenuItem key={navItem.label}>{navItem.label}</MenuItem></Link>
  ))}

  <br />
  <Link to={"/signup"}><MenuItem className="authbtn">{"Sign Up"}</MenuItem></Link>
  <Link to={"/login"} ><MenuItem className="authbtn" bg={"#e45a05"}>{"Sign In"}</MenuItem></Link>
  </MenuList>
    </Menu>
    </Flex>}
    </Flex>
    </SPAN>
  );
};

const NAV_ITEMS = [
  {
    label: "Dessert",
    to: "/recipelist",
    children: [
      {
        label: "Explore Design Work",
        subLabel: "Trending Design to inspire you",
      },
      {
        label: "New & Noteworthy",
        subLabel: "Up-and-coming Designers",
      },
    ],
  },
  {
    label: "Asian",
    children: [
      {
        label: "Job Board",
        subLabel: "Find your dream design job",
      },
      {
        label: "Freelance Projects",
        subLabel: "An exclusive list for contract work",
      },
    ],
  },

  {
    label: "Italian",
    children: [
      {
        label: "Job Board",
        subLabel: "Find your dream design job",
      },
      {
        label: "Freelance Projects",
        subLabel: "An exclusive list for contract work",
      },
    ],
  },
  {
    label: "Appetizer",
    children: [
      {
        label: "Job Board",
        subLabel: "Find your dream design job",
      },
      {
        label: "Freelance Projects",
        subLabel: "An exclusive list for contract work",
      },
    ],
  },

  {
    label: "About Us",
    to: "/about",
  },
];
const DIV = styled.div`
  /* border: 1px solid red; */
  display: flex;
  align-items: center;

  .inputBox {
    width: 100%;
    background-color: white;
    border: 2px solid #c8c8c8;
    border-radius: 5px;
    padding: 7px 10px;
    z-index: 6;
  }
  .inputBox:focus {
    border: none;
    outline: 2px solid #ff8f49;
  }
`;
const SPAN = styled.div`
    .sidemenu{
        display: none;
    }
    .logo_img{
        width: 14rem;
    }
    @media screen and (max-width: 769px) and (min-width: 426px) {
        .logo_img{
        width: 10rem;
        }
        .navlinks{
            display: none;
        }
        .sidemenu{
            display: flex;
        }
        .authbtn{
            display: none;
        }
    }
    @media screen and (max-width: 425px) {
        .logo_img{
        width: 10rem;
        }
        .navlinks, .outerauth{
            display: none;
        }
        .sidemenu{
            display: flex;
        }
       
        .authbtn{
            display: block;
        }
    }
`