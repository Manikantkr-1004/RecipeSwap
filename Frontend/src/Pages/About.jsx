import React from 'react'
import { Navbar } from '../Components/Navbar'
import { Footer } from '../Components/Footer'
import { Box, Heading, Text } from '@chakra-ui/react'

export function About() {
    

    return (
        <>
            <Navbar/>

            <Box h={"auto"} w={"100%"} border={"1px solid black"} >
                <Box w={"80%"} margin={"auto"} border={"1px solid black"} lineHeight={"20px"}>
                       
                       <Heading mb={"2%"} as={"h1"} size={"xl"}>
                        About Us
                       </Heading>
                       <Heading mb={"2%"} as={"h2"} size={"lg"}>
                        Who We Are
                       </Heading>
                       <Text noOfLines={"10"} fontSize={"xl"}>
                       Home cooks are our heroes—it's as simple as that. Allrecipes is a community built by and for kitchen experts: The cooks who will dedicate the weekend to a perfect beef bourguignon but love the simplicity of a slow-cooker rendition, too. The bakers who labor over a showstopping 9-layer cake but will just as happily doctor boxed brownies for a decadent weeknight dessert. The entertainers who just want a solid snack spread, without tons of dirty dishes at the end of the night.
                       </Text>

                </Box>


            </Box>
            <Footer/>
        </>
    )
}
