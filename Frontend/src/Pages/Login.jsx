import React, { useEffect, useState } from 'react'
import {Flex, Image, Box, Text, FormControl, FormLabel, InputGroup, Input, Button, InputLeftElement, InputRightElement, useToast} from "@chakra-ui/react"
import login from "../Components/images/login_laptop.jpg"
import login1 from "../Components/images/login_mobile.jpg"
import logo from "../Components/images/logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faEye, faEyeSlash, faLock} from "@fortawesome/free-solid-svg-icons"
import {faFacebook, faGoogle} from "@fortawesome/free-brands-svg-icons";
import {useLocation, useNavigate,Navigate} from "react-router-dom"
import 'animate.css';
import { useDispatch, useSelector } from 'react-redux'
import { USER_FAIL, USER_LOGIN_SUCCESS } from '../Redux/actionTypes'
import Cookies from "js-cookie"
import { userlogin } from '../Redux/authReducer/action'
import { Helmet } from 'react-helmet'

export function Login() {

    const lock = <FontAwesomeIcon size='md' icon={faLock} />
    const google = <FontAwesomeIcon size='lg' icon={faGoogle} />
    const facebook = <FontAwesomeIcon size='lg' icon={faFacebook} />
    const envelope = <FontAwesomeIcon size='md' icon={faEnvelope} />
    const eye = <FontAwesomeIcon size='sm' icon={faEye} />
    const closeye = <FontAwesomeIcon size='sm' icon={faEyeSlash} />

    const [show,setShow] = useState(false);
    const [formdata,setFormdata] = useState({email:"",password:""});
    const navigate = useNavigate();
    const toast = useToast();
    const token = Cookies.get("login_token");
    const name = Cookies.get("login_name");
    const dispatch = useDispatch();
    const loading = useSelector((store)=> store.authReducer.loading);
    const location = useLocation()

    useEffect(()=>{
        document.body.style.background = "#fff"
    },[])

    const handleSubmit= (e)=>{
        e.preventDefault();

        dispatch(userlogin(formdata)).then((res)=>{
            dispatch({type:USER_LOGIN_SUCCESS})
            
            if(res.data.message==="Login successful!"){
                console.log(res);
                setFormdata({email:"",password:""})
                Cookies.set("login_token",`${res.data.token}`,{expires:7})
                Cookies.set("login_name",`${res.data.user.username}`,{expires:7})
                Cookies.set("login_email",`${res.data.user.email}`,{expires:7})
                formdata.password==="admin"?Cookies.set("login_role","admin",{expires:7}):Cookies.set("login_role","user",{expires:7});
                toast({
                    title: `Welcome ${res.data.user.username}`,
                    position: "bottom",
                    status: 'success',
                    duration: 2000,
                    isClosable: true,
                })
                setTimeout(() => {
                    if(location.state===null){
                        navigate("/")
                    }else{
                        navigate(`${location.state}`, {replace:true})
                    }
                }, 2000);
            }else if(res.data.error==="Invalid Password!"){
                toast({
                    title: `${res.data.error}`,
                    position: "bottom",
                    status: 'error',
                    duration: 3000,
                    isClosable: true,
                })
            }else if(res.data.error==="User Not Found!"){
                toast({
                    title: `${res.data.error}`,
                    position: "bottom",
                    status: 'error',
                    duration: 3000,
                    isClosable: true,
                })
            }else{
                toast({
                    title: `Something Went Wrong, Try again!!`,
                    status: 'error',
                    position: "bottom",
                    duration: 3000,
                    isClosable: true,
                })
            }
            
        }).catch((err)=>{
            dispatch({type:USER_FAIL})
            toast({
                title: `Something Went Wrong, Try again!!`,
                status: 'error',
                position: "bottom",
                duration: 3000,
                isClosable: true,
              })
        })
    }

    if(token && name){
        return <Navigate to="/" />
    }

    return (
        <Flex justifyContent="space-between" w="100%" direction={{base:"column",sm:"column",md:"row",lg:"row",xl:"row"}}>
            <Helmet>
                <title>Login | RecipeSwap</title>
            </Helmet>
            <Box w={{base:"100%",sm:"100%",md:"48%",lg:"48%",xl:"48%"}} height={{base:"179px",sm:"179px",md:"auto",lg:"auto",xl:"auto"}} backgroundImage={{base:login1,sm:login1,md: login,lg: login,xl: login}} backgroundSize="cover" backgroundRepeat="no-repeat">
            </Box>
            <Box w={{base:"100%",sm:"100%",md:"48%",lg:"48%",xl:"48%"}} >
                <Box w={{base:"290px",sm:"330px",md:"330px",lg:"330px",xl:"330px"}} m="auto"  mt={{base:"30px",sm:"50px",md:"70px",lg:"70px",xl:"70px"}} mb="70px">
                    <Image w="50%" src={logo} alt='signup' />
                    <Text mt="25px" color="#E45700" fontWeight="bold" fontSize="27px" fontFamily="Franklin Gothic Medium">Log in</Text>
                    <Text>Log in to save and review your favorite recipes.</Text><br/>
                    <form onSubmit={handleSubmit} class="animate__animated animate__fadeInUp">
                        <FormControl isRequired>
                            
                            <FormLabel>EMAIL</FormLabel>
                            <InputGroup>
                                <InputLeftElement borderRadius="5px 0px 0px 5px" color="white" bg="#E45700">{envelope}</InputLeftElement>
                                <Input value={formdata.email} onChange={(e)=> setFormdata({...formdata,email:e.target.value})} border="1px solid #ffc8a6" bg="#f5f5f5" _focus={{border:"1px solid #ffc8a6",boxShadow:"#ffc8a6 0px 3px 8px",bg:"#fff"}} _hover={{bg:"#fff"}} type='email' placeholder=' Enter Your Email' required/>
                            </InputGroup><br/>

                            <FormLabel>PASSWORD</FormLabel>
                            <InputGroup>
                                <InputLeftElement borderRadius="5px 0px 0px 5px" color="white" bg="#E45700">{lock}</InputLeftElement>
                                <InputRightElement cursor="pointer" onClick={()=> setShow(!show)}>{show? eye: closeye}</InputRightElement>
                                <Input value={formdata.password} onChange={(e)=> setFormdata({...formdata,password:e.target.value})} border="1px solid #ffc8a6" bg="#f5f5f5" _focus={{border:"1px solid #ffc8a6",boxShadow:"#ffc8a6 0px 3px 8px",bg:"#fff"}} _hover={{bg:"#fff"}} type={show?"text":"password"} placeholder=' Enter Your Password' required/>
                            </InputGroup>
                            <Text m="5px 0px 15px 0px" textAlign="right" fontSize="14px" fontWeight="semibold" _hover={{cursor:"pointer",textDecoration:"underline"}} color="#E45700" onClick={()=> navigate("/forgot_password")}>Forgot Password?</Text>

                            {loading? <Button isLoading w="100%" color="white" bg="#E45700" _hover={{bg:"#E45700"}}></Button>: <button type='submit' class="custom-btn btn-7"><span>Log in...</span></button>}

                            <Text textAlign="center" mt="10px">New User? <span onClick={()=> navigate("/signup")} style={{color:"#E45700",cursor:"pointer",textDecoration:"underline"}}>Create Account</span></Text><br/>

                            <Flex w="100%" fontSize="13px" justifyContent="space-between" gap="18px" alignItems="center">
                                <span style={{display:"block",width:"100%", height:"1px", backgroundColor:"rgb(219, 219, 219)"}}></span>
                                <span>OR</span>
                                <span style={{display:"block",width:"100%", height:"1px", backgroundColor:"rgb(219, 219, 219)"}}></span>
                            </Flex><br/>

                            <Button leftIcon={google} bg="#4285F4" _hover={{bg:"#4285F4"}} color="white" w="100%">Log in with Google</Button>
                            <Button leftIcon={facebook} mt="6px" w="100%" bg="#3B5998" _hover={{bg:"#3B5998"}} color="white">Log in with Facebook</Button>
                        </FormControl>
                    </form>
                </Box>
            </Box>
        </Flex>
    )
}
