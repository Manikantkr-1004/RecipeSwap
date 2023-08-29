import React from 'react'
import not_found from "../Components/images/not_found.jpg"
import {Box, Flex, Image} from "@chakra-ui/react"
import { Navbar } from '../Components/Navbar'
import { Footer } from '../Components/Footer'
import {useNavigate} from "react-router-dom"
import { Helmet } from 'react-helmet'

export function NotFound() {
    
    const navigate = useNavigate()

    return (
        <>
        <Helmet>
            <title>404 Error | RecipeSwap</title>
        </Helmet>
        <Navbar />
        
        <Flex w="100%" m="50px 0px">
            <Box w={{base:"100%",sm:"100%",md:"600px",lg:"600px",xl:"600px"}} m="auto">
                <Image filter="hue-rotate(30deg)" w="100%" src={not_found} alt='not_found' /><br/>
                <button onClick={()=> navigate("/")} className='not_found_page'>Go to HomePage</button>
            </Box>
        </Flex>

        <Footer />
        </>
    )
}
