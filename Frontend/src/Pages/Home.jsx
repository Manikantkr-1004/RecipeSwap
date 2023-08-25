import React from 'react'
import { Navbar } from '../Components/Navbar';
import { Footer } from '../Components/Footer';
import { Box, Image, Flex, Heading, Text, Grid, GridItem } from '@chakra-ui/react'
export function Home() {
    const backgroundStyle = {
        backgroundImage: "url('https://www.allrecipes.com/thmb/96zl9l1_7Phn8ipZUMwtd1Ze7-M=/2000x666/filters:no_upscale():max_bytes(150000):strip_icc():focal(1499x0:1501x2):format(webp)/1132731_BakedTomatoSlices3x1-e9f40308965540019cda782dcdcfd456.jpg')",
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 90%',
    };
    const backgroundStyle2 = {
        backgroundImage: "url('https://www.allrecipes.com/thmb/GkiJjzbFwrDAGNpdan7hW8j7zVs=/2000x666/filters:no_upscale():max_bytes(150000):strip_icc():focal(574x0:576x2):format(webp)/allstar_home_august31-48d13a90f2ba4c28a060d5fda89bd044.jpg')",
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 90%',
    };

    return (
        <>
            <Navbar />

            <Grid  _hover={{ cursor: "pointer" }} pt={"1%"} pb={"1%"} bg={"#114388"} color={"white"} h={"auto"} templateColumns={{base:'repeat(1, 1fr)',md:'repeat(2, 1fr)'}} gap={6}>
                <GridItem  w='100%'>
                    <Flex  _hover={{ textDecoration:'underline' }} alignItems={"center"} justifyContent={"center"} gap={"2"}>
                        <Text fontSize={"22px"} as={"b"}>India's  </Text>
                        <Text fontSize={"22px"} as={"b"} color='#f2d657'> #1 Trusted Recipe Resource </Text>
                        <Text fontSize={"22px"} as={"b"}> since 1997</Text>
                    </Flex>
                </GridItem>
                <GridItem  w='100%'>
                    <Flex alignItems={"center"} justifyContent={"center"} gap={"5"}>
                    <Flex justifyContent={"center"} alignItems={"center"} gap={"2"}>
                    <Box bgColor={"#2ec5b6"} h={"12px"} w={"12px"} borderRadius={"50%"} border={"1px solid white"}></Box>
                       <Text fontSize={"22px"} as={"b"}>113K  </Text>
                       <Text _hover={{ textDecoration:'underline' }} fontSize={"20px"} >Original Recipes  </Text>
                       </Flex>
                       <Flex justifyContent={"center"} alignItems={"center"} gap={"2"}>
                       <Box bgColor={"#f15025"} h={"12px"} w={"12px"} borderRadius={"50%"} border={"1px solid white"}></Box>
                       <Text fontSize={"22px"} as={"b"}>6.9M+  </Text>
                       <Text _hover={{ textDecoration:'underline' }} fontSize={"20px"} >Rating & Reviews  </Text>
                       </Flex>
                       
                       <Flex justifyContent={"center"} alignItems={"center"} gap={"2"}>
                        <Box bgColor={"#e7ab46"} h={"12px"} w={"12px"} borderRadius={"50%"} border={"1px solid white"}></Box>
                       <Text fontSize={"22px"} as={"b"}>60M  </Text>
                       <Text _hover={{ textDecoration:'underline' }} fontSize={"20px"} >Home Cooks   </Text>
                       </Flex>
                    </Flex>
                </GridItem>

            </Grid>
            <Box mt={"1%"} pt={"2%"} pb={"2%"} textAlign={"center"} w={"100%"} h={"auto"} >

                <Flex w={"100%"} h={"80%"} >
                    <Flex h={"100%"} margin={"auto"} w={"80%"}>
                        <Box mr={"5%"} textAlign={"left"} h={"100%"} w={"60%"}>
                            <Image mb={"2%"} _hover={{ cursor: "pointer" }} width={"100%"} h={"100%"} src='https://www.allrecipes.com/thmb/57nQ0DwByvRw-CYcZbZsGkzN8OA=/771x514/filters:no_upscale():max_bytes(150000):strip_icc():focal(929x470:931x472):format(webp)/ChefJohnsTacoStuffedZucchiniBoats4x3-6b9f773827f747d092f438faf9da0ed5.jpg' />
                            <Text color={"#5c5c5c"} fontSize={"15px"} as={"b"} _hover={{ cursor: "pointer" }} >ONE-POT MEAL RECIPES</Text>
                            <Heading mt={"2%"} size="lg" _hover={{ textDecoration: "underline", textDecorationColor: "#e45a05", cursor: "pointer" }} >18 Easy One-Pot Meals </Heading>
                            <Text>These quick and easy weeknight dinners are all ready in less than an hour.</Text>
                        </Box>
                        <Box p={"2%"} bgColor={"#f5f6ea"} h={"100%"} width={"40%"}>
                            <Heading _hover={{ textDecoration: "underline", cursor: "pointer" }} fontSize={"25px"}>News & Trending </Heading>
                            <Flex _hover={{ cursor: "pointer" }} mt={"4%"} h={"100px"} w={"100%"}>
                                <Box w={"30%"}>
                                    <Image src='https://www.allrecipes.com/thmb/u14iWqi4X0yaOftsEvr9iltYrvo=/144x95/filters:no_upscale():max_bytes(150000):strip_icc():focal(1999x0:2001x2):format(webp)/ar-starbucks-logo-burst-adobe-4x3-390ef4c7a91e469a8bb9ade3384b70e5.jpg' />
                                </Box>
                                <Box w={"70%"} ml={"3%"} textAlign={"left"}>
                                    <Text as={"b"} _hover={{ textDecoration: "underline", textDecorationColor: "#e45a05", cursor: "pointer" }} >
                                        Startbucks Says It's Not PSL<br /> Season Yet and Introduces 3<br /> Brand New Summer Drinks...
                                    </Text>
                                </Box>
                            </Flex>
                            <Flex _hover={{ cursor: "pointer" }} mt={"4%"} h={"100px"} w={"100%"}>
                                <Box w={"30%"} >
                                    <Image src='https://www.allrecipes.com/thmb/BPAyTYImZp1XyCoxpB9_ZMFrqdk=/144x95/filters:no_upscale():max_bytes(150000):strip_icc():focal(2175x1251:2177x1253):format(webp)/AR-wendys-sign-4x3-373b5dc0b4d541238b0e94f1d47990e5.jpg' />
                                </Box>
                                <Box w={"70%"} ml={"3%"} textAlign={"left"}>
                                    <Text as={"b"} _hover={{ textDecoration: "underline", textDecorationColor: "#e45a05", cursor: "pointer" }} >
                                        Look Out McDonald's, Wendy's <bt />Might Be Coming for the <br />McMuffin
                                    </Text>
                                </Box>
                            </Flex>
                            <Flex _hover={{ cursor: "pointer" }} mt={"4%"} h={"100px"} w={"100%"}>
                                <Box w={"30%"}>
                                    <Image src='https://www.allrecipes.com/thmb/ld0pCP9tAK9dbmPxW--zVaomnoA=/144x95/filters:no_upscale():max_bytes(150000):strip_icc():focal(1999x0:2001x2):format(webp)/ar-tomatoes-RS0820WEB003_Greg-Dupree-4x3-74fe63c8ab764a82a5bc29ce1d951bd5.jpg' />
                                </Box>
                                <Box w={"70%"} ml={"3%"} textAlign={"left"}>
                                    <Text as={"b"} _hover={{ textDecoration: "underline", textDecorationColor: "#e45a05", cursor: "pointer" }} >
                                        The Secret Trick to Make Your <br />Tomatoes Taste So Much <br />Better
                                    </Text>
                                </Box>
                            </Flex>
                            <Flex _hover={{ cursor: "pointer" }} mt={"4%"} h={"100px"} w={"100%"}>
                                <Box w={"30%"}>
                                    <Image src='https://www.allrecipes.com/thmb/DvTtt8I4UQUOKSovAem1wSUsoX0=/144x95/filters:no_upscale():max_bytes(150000):strip_icc():focal(2999x0:3001x2):format(webp)/ar-yeti-cooler-107-degrees-tout-ef7f730e44f049c3803cac4e7508fda2.jpg' />
                                </Box>
                                <Box w={"70%"} ml={"3%"} textAlign={"left"}>
                                    <Text as={"b"} _hover={{ textDecoration: "underline", textDecorationColor: "#e45a05", cursor: "pointer" }} >
                                        This Cooler Spent a Day in 107-<br /> Degree Heat, and Everything<br /> Inside Stayed Ice-Cold
                                    </Text>
                                </Box>
                            </Flex>

                        </Box>

                    </Flex>
                </Flex>
            </Box>













            <Box mt={"5%"} w={"100%"} h={"auto"}>

                <Flex _hover={{ cursor: "pointer" }} style={backgroundStyle} h={"550px"} width={"100%"} >
                    <Flex justifyContent={"center"} alignItems={"center"} width={{ base: "100%", md: "50%" }}>
                        <Box p={"2%"} pt={"3%"} textAlign={"Center"} width={"40%"} h={"auto"} bgColor={"white"}>
                            <Heading as='b' size='lg' _hover={{ textDecoration: "underline", textDecorationColor: "#e45a05" }}>
                                Tomato Recipes
                            </Heading>
                            <Text fontSize='lg'>Make the most of tomato season with these 5-star recipes</Text>
                        </Box>
                    </Flex>
                    <Flex width={{ base: "0%", md: "50%" }}></Flex>
                </Flex>
            </Box>

            <Box pt={"2%"} pb={"2%"} bgColor={"#f5f6ea"} textAlign={"center"} w={"100%"} h={"auto"} >
                <Heading pb={"2%"} _hover={{ textDecoration: "underline", textDecorationColor: "#e45a05", cursor: "pointer" }} >101 Zucchini Recipes </Heading>

                <Flex w={"100%"} h={"80%"} >
                    <Flex h={"100%"} margin={"auto"} w={"80%"}>
                        <Box h={"100%"} width={"40%"}>
                            <Flex _hover={{ cursor: "pointer" }} mt={"4%"} h={"100px"} w={"100%"}>
                                <Box w={"30%"}>
                                    <Image src='https://www.allrecipes.com/thmb/8a2lvwZKYvqpsSniNiYx8rqPCGs=/144x95/filters:no_upscale():max_bytes(150000):strip_icc():focal(999x0:1001x2):format(webp)/222763-balsamic-grilled-zucchini-3x4-530-copy-e51adadb2d9d4aef884572345b8644c4.jpg' />
                                </Box>
                                <Box w={"70%"} ml={"3%"} textAlign={"left"}>
                                    <Text _hover={{ textDecoration: "underline", textDecorationColor: "#e45a05", cursor: "pointer" }} >
                                        <Text as={"b"}>17 Easy Zucchini Season </Text><br />
                                        <Text as={"b"}>Recipes</Text>
                                    </Text>
                                </Box>
                            </Flex>
                            <Flex _hover={{ cursor: "pointer" }} mt={"4%"} h={"100px"} w={"100%"}>
                                <Box w={"30%"}>
                                    <Image src='https://www.allrecipes.com/thmb/kaKhLVJ_mZRF9w0n561hGYdJ25w=/144x95/filters:no_upscale():max_bytes(150000):strip_icc():focal(479x0:481x2):format(webp)/3491215-zucchini-parmesan-cheese-fritters-photo-by-veggiecravings-0612f3dc76474ce4933db65b9fdb4221.jpg' />
                                </Box>
                                <Box w={"70%"} ml={"3%"} textAlign={"left"}>
                                    <Text _hover={{ textDecoration: "underline", textDecorationColor: "#e45a05", cursor: "pointer" }} >
                                        <Text as={"b"}>15+ Cheesy Recipes to Make the</Text><br />
                                        <Text as={"b"}> Most of Your Summer Zucchini </Text>
                                    </Text>
                                </Box>
                            </Flex>
                            <Flex _hover={{ cursor: "pointer" }} mt={"4%"} h={"100px"} w={"100%"}>
                                <Box w={"30%"}>
                                    <Image src='https://www.allrecipes.com/thmb/pxyukIOHLVovL4pYw4zooH6zswQ=/144x95/filters:no_upscale():max_bytes(150000):strip_icc():focal(479x0:481x2):format(webp)/zucchini-bread-spices-72009-579bb9803df78c3276657e4f.jpg' />
                                </Box>
                                <Box w={"70%"} ml={"3%"} textAlign={"left"}>
                                    <Text _hover={{ textDecoration: "underline", textDecorationColor: "#e45a05", cursor: "pointer" }} >
                                        <Text as={"b"}>Zucchini Bread Recipes </Text><br />
                                    </Text>
                                </Box>
                            </Flex>
                            <Flex _hover={{ cursor: "pointer" }} mt={"4%"} h={"100px"} w={"100%"}>
                                <Box w={"30%"}>
                                    <Image src='https://www.allrecipes.com/thmb/M2l6lsw2nE_jK2V2sIJIbPqOqn4=/144x95/filters:no_upscale():max_bytes(150000):strip_icc():focal(621x0:623x2):format(webp)/2300069-8dfe3150eed04b82a6635787d9b35520.jpg' />
                                </Box>
                                <Box w={"70%"} ml={"3%"} textAlign={"left"}>
                                    <Text _hover={{ textDecoration: "underline", textDecorationColor: "#e45a05", cursor: "pointer" }} >

                                        <Text as={"b"}>20 Sneaky Ways to Turn Zucchini</Text><br />
                                        <Text as={"b"}>Into Tempting Desserts</Text>
                                    </Text>
                                </Box>
                            </Flex>

                        </Box>
                        <Box textAlign={"left"} h={"100%"} w={"60%"}>
                            <Image _hover={{ cursor: "pointer" }} width={"100%"} h={"100%"} src='https://www.allrecipes.com/thmb/57nQ0DwByvRw-CYcZbZsGkzN8OA=/771x514/filters:no_upscale():max_bytes(150000):strip_icc():focal(929x470:931x472):format(webp)/ChefJohnsTacoStuffedZucchiniBoats4x3-6b9f773827f747d092f438faf9da0ed5.jpg' />
                            <Heading mt={"2%"} size="lg" _hover={{ textDecoration: "underline", textDecorationColor: "#e45a05", cursor: "pointer" }} >Our Best Zucchini Boat Recipes </Heading>
                        </Box>
                    </Flex>
                </Flex>
            </Box>

            <Box mt={"5%"} w={"100%"} h={"auto"}>

                <Flex _hover={{ cursor: "pointer" }} style={backgroundStyle2} h={"550px"} width={"100%"} >
                    <Flex justifyContent={"center"} alignItems={"center"} width={{ base: "100%", md: "50%" }}>
                        <Box p={"2%"} pt={"3%"} textAlign={"Center"} width={"50%"} h={"auto"} bgColor={"white"}>
                            <Heading size='lg' _hover={{ textDecoration: "underline", textDecorationColor: "#e45a05" }}>
                                Featured Allstar: <br />
                                Sophie Sadler
                            </Heading>
                            <Text fontSize='lg'>This Allrecipe Allstar believes there's no better way to get to know a different culture than by cooking those foods at home</Text>
                        </Box>
                    </Flex>
                    <Flex width={{ base: "0%", md: "50%" }}></Flex>
                </Flex>
            </Box>
            <Footer />
        </>
    )
}
