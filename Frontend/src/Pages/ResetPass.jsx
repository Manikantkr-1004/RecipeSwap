import React, { useState } from 'react'
import {Flex, Image, Box, Text, FormControl, FormLabel, InputGroup, Input, Button, InputLeftElement, InputRightElement, useToast, FormHelperText} from "@chakra-ui/react"
import reset_pass from "../Components/images/reset_pass.jpg"
import logo from "../Components/images/logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash, faLock} from "@fortawesome/free-solid-svg-icons"
import {useNavigate, useParams} from "react-router-dom"
import 'animate.css';
import { useDispatch, useSelector } from 'react-redux'
import { USER_FAIL, USER_RESET_SUCCESS } from '../Redux/actionTypes'
import { usereset } from '../Redux/authReducer/action'
import Cookies from "js-cookie"
import { Helmet } from 'react-helmet';

export function ResetPass() {

    const lock = <FontAwesomeIcon size='md' icon={faLock} />
    const lock1 = <FontAwesomeIcon size='xs' icon={faLock} />
    const eye = <FontAwesomeIcon size='sm' icon={faEye} />
    const closeye = <FontAwesomeIcon size='sm' icon={faEyeSlash} />

    const [show,setShow] = useState(false);
    const {token} = useParams()
    const [formdata,setFormdata] = useState({password:"",conpass:""});
    const [err,setErr] = useState(false);
    const navigate = useNavigate();
    const toast = useToast()
    const dispatch = useDispatch();
    const loading = useSelector((store)=> store.authReducer.loading);

    const handleSubmit= (e)=>{
        e.preventDefault();

        if(!(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/.test(formdata.password))){
            setErr(true);
            return;
        }else if(formdata.password!== formdata.conpass){
            setErr(false);
            toast({
                title: `Your Confirm Password is not matching with Password!!`,
                position: "bottom",
                status: 'error',
                duration: 3000,
                isClosable: true,
            });
            setFormdata({...formdata,conpass:""})
            return;
        }
        setErr(false);

        let newpass = {
            password: formdata.password
        };

        dispatch(usereset(token,newpass)).then((res)=>{
            dispatch({type:USER_RESET_SUCCESS})
            
            if(res.data.message==="Password has been changed"){
                setFormdata({password:"",conpass:""})
                toast({
                    title: `${res.data.message}`,
                    position: "bottom",
                    status: 'success',
                    duration: 2000,
                    isClosable: true,
                })
                Cookies.remove("login_token")
                Cookies.remove("login_name")
                Cookies.remove("login_email")
                Cookies.remove("login_role")
                setTimeout(() => {
                    navigate("/login")
                }, 2000);
            }else if(res.data.error==="Token is expired!"){
                setFormdata({password:"",conpass:""})
                toast({
                    title: `Link has been expired, Forget Again!!`,
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

    return (
        <Flex justifyContent="space-between" w="100%" direction={{base:"column",sm:"column",md:"row",lg:"row",xl:"row"}}>
            <Helmet>
                <title>Reset Password | RecipeSwap</title>
            </Helmet>
            <Box w={{base:"100%",sm:"100%",md:"48%",lg:"48%",xl:"48%"}} height={{base:"179px",sm:"179px",md:"auto",lg:"auto",xl:"auto"}} filter="hue-rotate(170deg)" backgroundImage={reset_pass} backgroundSize="cover" backgroundRepeat="no-repeat" boxShadow="-50px 0 30px -5px white inset">
            </Box>
            <Box w={{base:"100%",sm:"100%",md:"48%",lg:"48%",xl:"48%"}} >
                <Box w={{base:"290px",sm:"330px",md:"330px",lg:"330px",xl:"330px"}} m="auto"  mt={{base:"30px",sm:"50px",md:"70px",lg:"70px",xl:"70px"}} mb={{base:"30px",sm:"30px",md:"70px",lg:"70px",xl:"70px"}}>
                    <Image w="50%" src={logo} alt='signup' />
                    <Text mt="25px" color="#E45700" fontWeight="bold" fontSize="27px" fontFamily="Franklin Gothic Medium">Reset Password</Text>
                    <Text>Write Your New Strong Password to Update Your Password.</Text><br/>
                    <form onSubmit={handleSubmit} class="animate__animated animate__slideInUp" style={{boxShadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px",border:"2px dashed #E45700",padding:"20px", borderRadius:"15px"}}>
                        <FormControl isRequired>

                            <FormLabel>PASSWORD</FormLabel>
                            <InputGroup>
                                <InputLeftElement borderRadius="5px 0px 0px 5px" color="white" bg="#E45700">{lock}</InputLeftElement>
                                <Input value={formdata.password} onChange={(e)=> setFormdata({...formdata,password:e.target.value})} border={err?"1px solid red":"1px solid #ffc8a6"} bg="#f5f5f5" _focus={{border:"1px solid #ffc8a6",boxShadow:"#ffc8a6 0px 3px 8px",bg:"#fff"}} _hover={{bg:"#fff"}} type="password" placeholder=' Enter Password' required/>
                            </InputGroup><br/>

                            <FormLabel>CONFIRM PASSWORD</FormLabel>
                            <InputGroup>
                                <InputLeftElement borderRadius="5px 0px 0px 5px" color="white" bg="#E45700">{lock}</InputLeftElement>
                                <InputRightElement cursor="pointer" onClick={()=> setShow(!show)}>{show? eye: closeye}</InputRightElement>
                                <Input value={formdata.conpass} onChange={(e)=> setFormdata({...formdata,conpass:e.target.value})} border={err?"1px solid red":"1px solid #ffc8a6"} bg="#f5f5f5" _focus={{border:"1px solid #ffc8a6",boxShadow:"#ffc8a6 0px 3px 8px",bg:"#fff"}} _hover={{bg:"#fff"}} type={show?"text":"password"} placeholder=' Enter Same Password' required/>
                            </InputGroup>
                            <FormHelperText color={err?"red":"black"} textAlign="justify">{lock1} Password must be 8 chracters and contains atleast One UpperCase, One LowerCase, One Number and One Special Chracter.</FormHelperText><br/>

                            {loading? <Button isLoading w="100%" color="white" bg="#E45700" _hover={{bg:"#E45700"}}></Button>: <button type='submit' className="custom-btn btn-7"><span>Reset Password...</span></button>}
                        </FormControl>
                    </form>
                </Box>
            </Box>
        </Flex>
    )
}
