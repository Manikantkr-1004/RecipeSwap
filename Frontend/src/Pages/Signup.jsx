import React, { useState } from 'react'
import {Flex, Image, Box, Text, FormControl, FormLabel, InputGroup, Input, Button, InputLeftElement, InputRightElement, useToast, FormHelperText} from "@chakra-ui/react"
import signup_laptop from "../Components/images/signup_laptop.jpg"
import signup_mobile from "../Components/images/signup_mobile.jpg"
import logo from "../Components/images/logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faEye, faEyeSlash, faLock, faUserCircle} from "@fortawesome/free-solid-svg-icons"
import {faFacebook, faGoogle} from "@fortawesome/free-brands-svg-icons";
import {useNavigate,Navigate} from "react-router-dom"
import 'animate.css';
import { useDispatch, useSelector } from 'react-redux'
import { USER_FAIL, USER_SIGNUP_SUCCESS } from '../Redux/actionTypes'
import { usersignup } from '../Redux/authReducer/action'
import { Helmet } from 'react-helmet'
import Cookies from "js-cookie"

export function Signup() {

    const lock = <FontAwesomeIcon size='md' icon={faLock} />
    const lock1 = <FontAwesomeIcon size='xs' icon={faLock} />
    const user = <FontAwesomeIcon size='lg' icon={faUserCircle} />
    const google = <FontAwesomeIcon size='lg' icon={faGoogle} />
    const facebook = <FontAwesomeIcon size='lg' icon={faFacebook} />
    const envelope = <FontAwesomeIcon size='md' icon={faEnvelope} />
    const eye = <FontAwesomeIcon size='sm' icon={faEye} />
    const closeye = <FontAwesomeIcon size='sm' icon={faEyeSlash} />

    const [show,setShow] = useState(false);
    const [formdata,setFormdata] = useState({username:"",email:"",password:""});
    const [err,setErr] = useState(false)
    const token = Cookies.get("login_token");
    const name = Cookies.get("login_name");
    const navigate = useNavigate();
    const toast = useToast()
    const dispatch = useDispatch();
    const loading = useSelector((store)=> store.authReducer.loading);

    const handleSubmit= (e)=>{
        e.preventDefault();

        if(!(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/.test(formdata.password))){
            setErr(true);
            return;
        }

        setErr(false)

        dispatch(usersignup(formdata)).then((res)=>{
            dispatch({type:USER_SIGNUP_SUCCESS})
            
            if(res.data.message==="The new user has been registered"){
                setFormdata({username:"",email:"",password:""})
                toast({
                    title: `${res.data.message}`,
                    position: "bottom",
                    status: 'success',
                    duration: 2000,
                    isClosable: true,
                })
                setTimeout(() => {
                    navigate("/login")
                }, 2000);
            }else if(res.data.error==="User has already registered"){
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
                <title>Signup | RecipeSwap</title>
            </Helmet>
            <Box w={{base:"100%",sm:"100%",md:"48%",lg:"48%",xl:"48%"}} height={{base:"179px",sm:"179px",md:"auto",lg:"auto",xl:"auto"}} backgroundImage={{base:signup_mobile,sm:signup_mobile,md: signup_laptop,lg: signup_laptop,xl: signup_laptop}} backgroundSize="cover" backgroundRepeat="no-repeat">
            </Box>
            <Box w={{base:"100%",sm:"100%",md:"48%",lg:"48%",xl:"48%"}} >
                <Box w={{base:"290px",sm:"330px",md:"330px",lg:"330px",xl:"330px"}} m="auto"  mt={{base:"30px",sm:"50px",md:"70px",lg:"70px",xl:"70px"}} mb="70px">
                    <Image w="50%" src={logo} alt='signup' />
                    <Text mt="25px" color="#E45700" fontSize="27px" fontWeight="bold" fontFamily="Franklin Gothic Medium">Create Account</Text>
                    <Text>Sign up to save and review your favorite recipes.</Text><br/>
                    <form onSubmit={handleSubmit} class="animate__animated animate__fadeInUp">
                        <FormControl isRequired>

                            <FormLabel>USERNAME</FormLabel>
                            <InputGroup>
                                <InputLeftElement borderRadius="5px 0px 0px 5px" color="white" bg="#E45700">{user}</InputLeftElement>
                                <Input value={formdata.username} onChange={(e)=> setFormdata({...formdata,username:e.target.value})} border="1px solid #ffc8a6" bg="#f5f5f5" _focus={{border:"1px solid #ffc8a6",boxShadow:"#ffc8a6 0px 3px 8px",bg:"#fff"}} _hover={{bg:"#fff"}} type='text' placeholder=' Enter Your Name' required/>
                            </InputGroup><br/>
                            
                            <FormLabel>EMAIL</FormLabel>
                            <InputGroup>
                                <InputLeftElement borderRadius="5px 0px 0px 5px" color="white" bg="#E45700">{envelope}</InputLeftElement>
                                <Input value={formdata.email} onChange={(e)=> setFormdata({...formdata,email:e.target.value})} border="1px solid #ffc8a6" bg="#f5f5f5" _focus={{border:"1px solid #ffc8a6",boxShadow:"#ffc8a6 0px 3px 8px",bg:"#fff"}} _hover={{bg:"#fff"}} type='email' placeholder=' Enter Your Email' required/>
                            </InputGroup><br/>

                            <FormLabel>PASSWORD</FormLabel>
                            <InputGroup>
                                <InputLeftElement borderRadius="5px 0px 0px 5px" color="white" bg="#E45700">{lock}</InputLeftElement>
                                <InputRightElement cursor="pointer" onClick={()=> setShow(!show)}>{show? eye: closeye}</InputRightElement>
                                <Input value={formdata.password} onChange={(e)=> setFormdata({...formdata,password:e.target.value})} border={err?"1px solid red":"1px solid #ffc8a6"} bg="#f5f5f5" _focus={{border:"1px solid #ffc8a6",boxShadow:"#ffc8a6 0px 3px 8px",bg:"#fff"}} _hover={{bg:"#fff"}} type={show?"text":"password"} placeholder=' Enter Your Password' required/>
                            </InputGroup>
                            <FormHelperText textAlign="justify" color={err?"red":"black"}>{lock1} Password must be 8 chracters and contains atleast One UpperCase, One LowerCase, One Number and One Special Chracter.</FormHelperText><br/>

                            {loading? <Button isLoading w="100%" color="white" bg="#E45700" _hover={{bg:"#E45700"}}></Button>: <button type='submit' class="custom-btn btn-7"><span>Create Account...</span></button>}

                            <Text textAlign="center" mt="10px">Registered User? <span onClick={()=> navigate("/login")} style={{color:"#E45700",cursor:"pointer",textDecoration:"underline"}}>Login</span></Text><br/>

                            <Flex w="100%" fontSize="13px" justifyContent="space-between" gap="18px" alignItems="center">
                                <span style={{display:"block",width:"100%", height:"1px", backgroundColor:"rgb(219, 219, 219)"}}></span>
                                <span>OR</span>
                                <span style={{display:"block",width:"100%", height:"1px", backgroundColor:"rgb(219, 219, 219)"}}></span>
                            </Flex><br/>

                            <Button leftIcon={google} bg="#4285F4" _hover={{bg:"#4285F4"}} color="white" w="100%">Sign up with Google</Button>
                            <Button leftIcon={facebook} mt="6px" w="100%" bg="#3B5998" _hover={{bg:"#3B5998"}} color="white">Sign up with Facebook</Button>
                        </FormControl>
                    </form>
                </Box>
            </Box>
        </Flex>
    )
}
