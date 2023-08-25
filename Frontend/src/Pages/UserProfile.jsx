import React, { useEffect, useState } from 'react'
import avatar from "../Components/images/user_avatar.png"
import user_back from "../Components/images/user_background.jpg"
import {Flex, Image,Box, Text, Button} from "@chakra-ui/react"
import { Navbar } from '../Components/Navbar'
import { Footer } from '../Components/Footer'
import Cookies from "js-cookie"
import { useDispatch } from 'react-redux'
import { userdataget } from '../Redux/userReducer/action'
import { VALID_USERDATA_GET_SUCCESS, VALID_USER_FAIL } from '../Redux/actionTypes'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOut } from '@fortawesome/free-solid-svg-icons'

export function UserProfile() {
    
    const log = <FontAwesomeIcon size="md" icon={faSignOut} />
    const [userdata,setUserData] = useState({});
    const token = Cookies.get("login_token")
    const dispatch = useDispatch();
    const number1 = Math.floor(Math.random() * 90) + 10;
    const number2 = Math.floor(Math.random() * 90) + 10;

    useEffect(()=>{
        dispatch(userdataget(token))
        .then((res)=>{
            dispatch({type:VALID_USERDATA_GET_SUCCESS,payload:res.data.users});
            setUserData(res.data.users)
        }).catch((err)=>{
            dispatch({type:VALID_USER_FAIL})
        })
    },[]);
    

    return (
        <>
        <Navbar />

        <Flex display="block" w="100%" backgroundImage={`url(${user_back})`} backgroundSize="cover" backgroundRepeat="no-repeat">
            <br/><br/>
            <Image m="auto" w="12%" src={avatar} alt="user" />

            <Box w="700px" m="auto" pb="70px">
                <Text fontWeight="bold">Followers: <span style={{color:"#E45700"}}>{number1}K</span></Text>
                <Text m="5px 0px" fontWeight="bold">Following: <span style={{color:"#E45700"}}>{number2}K</span></Text>

                <Flex w="100%" justifyContent="space-between" alignItems="center" gap="10px" border="1px dashed black" borderBottom="none" borderRadius="15px" padding="10px">
                    <Box>
                        <Text fontFamily="arial black">Name</Text>
                        <Text>{userdata.username}</Text>
                    </Box>
                    <Box>
                        <Text fontFamily="arial black">Email</Text>
                        <Text>{userdata.email}</Text>
                    </Box>
                </Flex>
                <Flex w="100%" justifyContent="space-between" alignItems="center" gap="10px" border="1px dashed black" borderTop="none" borderRadius="15px" padding="10px">
                    <Box>
                        <Text fontFamily="arial black">Password</Text>
                        <Text>************</Text>
                    </Box>
                    <button className='change_password'>
                        Change Password
                    </button>
                </Flex>
                <button className='logout'>{log} Logout</button>
            </Box>
        </Flex>

        <Footer />
        </>
    )
}
