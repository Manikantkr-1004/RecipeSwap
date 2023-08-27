import React, { useEffect, useState } from 'react'
import avatar from "../Components/images/user_avatar.png"
import user_back from "../Components/images/user_background.jpg"
import {Flex, Image,Box, Text, Button, useToast, FormControl, FormLabel, Input, SimpleGrid} from "@chakra-ui/react"
import { Navbar } from '../Components/Navbar'
import { Footer } from '../Components/Footer'
import Cookies from "js-cookie"
import {useNavigate} from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { userdataget, userecipeadd, userecipedel, userecipeget, userlogout } from '../Redux/userReducer/action'
import { USER_FAIL, VALID_USERDATA_GET_SUCCESS, VALID_USERECIPE_GET_SUCCESS, VALID_USERRECIPE_ADD_SUCCESS, VALID_USER_DELETE_SUCCESS, VALID_USER_FAIL, VALID_USER_LOGOUT_SUCCESS } from '../Redux/actionTypes'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBlender, faBowlRice, faDeleteLeft, faEye, faSignOut, faStar } from '@fortawesome/free-solid-svg-icons'
import {Accordion,AccordionItem,AccordionButton,AccordionPanel,AccordionIcon} from '@chakra-ui/react'

export function UserProfile() {
    
    const log = <FontAwesomeIcon size="md" icon={faSignOut} />
    const star = <FontAwesomeIcon size="md" flip icon={faStar} />
    const add = <FontAwesomeIcon size="md" shake icon={faBowlRice} />
    const added = <FontAwesomeIcon size="md" beatFade icon={faBlender} />
    const view = <FontAwesomeIcon size="md" icon={faEye} />
    const del =  <FontAwesomeIcon size="md" icon={faDeleteLeft} />

    const navigate = useNavigate()
    const toast = useToast()
    const token = Cookies.get("login_token");
    const [count,setCount] = useState(0)
    const name = Cookies.get("login_name")
    const email = Cookies.get("login_email")
    const dispatch = useDispatch();
    const loading = useSelector((store)=> store.userReducer.loading)
    const logout_loading = useSelector((store)=> store.userReducer.logout_loading)
    const recipe_loading = useSelector((store)=> store.userReducer.recipe_loading)
    const userdata = useSelector((store)=> store.userReducer.userdata)
    const recipedata = useSelector((store)=> store.userReducer.recipedata)

    const [formdata,setFormdata] = useState({
        email:email,username:name,recipeName:"",difficulty:"",prepTime:"",cookTime:"",totalTime:"",servings:"",cuisine:"",
        ingredients:[],
        nutrition:{calories:"",totalFat:"",totalCarbohydrates:"",protein:"",sugars:""},
        occasion:"",mealType:"",recipeType:"",
        instructions:[],
        imageURL:"",tags:["food","india_ka_swad","Spicy_food"],comments:[]
    })

    useEffect(()=>{
        dispatch(userdataget(token))
        .then((res)=>{
            console.log(res,"userdata");
            dispatch({type:VALID_USERDATA_GET_SUCCESS,payload:res.data.users});
        }).catch((err)=>{
            dispatch({type:VALID_USER_FAIL})
        })

        dispatch(userecipeget(token))
        .then((res)=>{
            console.log(res,"userecipedata");
            dispatch({type:VALID_USERECIPE_GET_SUCCESS,payload:res.data.recipes});
        }).catch((err)=>{
            dispatch({type:VALID_USER_FAIL})
        })

        document.body.style.backgroundImage = `url(${user_back})`
        document.body.style.backgroundSize = "cover"
        document.body.style.backgroundRepeat = "no-repeat"
    },[count]);

    const handleSubmit = (e)=>{
        e.preventDefault();

        dispatch(userecipeadd(token,formdata)).then((res)=>{
            dispatch({type:VALID_USERRECIPE_ADD_SUCCESS});
            if(res.data.message==="recipe added"){
                toast({
                    title: `Recipe Added Successfully!!`,
                    position: "bottom",
                    status: 'success',
                    duration: 2000,
                    isClosable: true,
                })
                setCount((prev)=> prev+1)
                setFormdata({
                    email:email,username:name,recipeName:"",difficulty:"",prepTime:"",cookTime:"",totalTime:"",servings:"",cuisine:"",
                    ingredients:["","","","",""],
                    nutrition:{calories:"",totalFat:"",totalCarbohydrates:"",protein:"",sugars:""},
                    occasion:"",mealType:"",recipeType:"",
                    instructions:["","","","",""],
                    imageURL:"",tags:["food","india_ka_swad","Spicy_food"],comments:[]
                })
            }else{
                toast({
                    title: `Something Went Wrong, Try again!!`,
                    position: "bottom",
                    status: 'error',
                    duration: 2000,
                    isClosable: true,
                })
            }
        }).catch((err)=>{
            dispatch({type:VALID_USER_FAIL})
            toast({
                title: `Something Went Wrong, Try again!!`,
                position: "bottom",
                status: 'error',
                duration: 2000,
                isClosable: true,
            })
        })
        console.log(formdata);
    }

    const handleDel= (id,token)=>{

        dispatch(userecipedel(id,token))
        .then((res)=>{
            console.log(res,"deleted");
            dispatch({type:VALID_USER_DELETE_SUCCESS});
            if(res.data.message==="recipe has been deleted"){
                toast({
                    title: `Recipe is deleted!!`,
                    position: "bottom",
                    status: 'success',
                    duration: 2000,
                    isClosable: true,
                })
            }
            setCount((prev)=> prev+1)
        }).catch((err)=>{
            dispatch({type:VALID_USER_FAIL})
            toast({
                title: `Something Went Wrong, Try again!!`,
                position: "bottom",
                status: 'error',
                duration: 2000,
                isClosable: true,
            })
        })
    }



    const handleLogout= ()=>{
        dispatch(userlogout(token)).then((res)=>{
            dispatch({type:VALID_USER_LOGOUT_SUCCESS})
            if(res.data.message==="User has been logged out"){
                toast({
                    title: `Logged Out Successfully!!`,
                    position: "bottom",
                    status: 'success',
                    duration: 2000,
                    isClosable: true,
                })
                Cookies.remove("login_token")
                Cookies.remove("login_email")
                Cookies.remove("login_name")
                Cookies.remove("login_role")
                window.location.reload();
            }else{
                toast({
                    title: `Something Went Wrong, Try again!!`,
                    position: "bottom",
                    status: 'error',
                    duration: 3000,
                    isClosable: true,
                })
            }
        }).catch((err)=>{
            dispatch({type:USER_FAIL})
            toast({
                title: `Something Went Wrong, Try again!!`,
                position: "bottom",
                status: 'error',
                duration: 3000,
                isClosable: true,
            })
        })
    }
    

    return (
        <>
        <Navbar />

        <Flex display="block" w="100%">
            <br/><br/>
            {loading?   <><br/><br/><br/><br/>
                        <div class="loading-wave">
                            <div class="loading-bar"></div>
                            <div class="loading-bar"></div>
                            <div class="loading-bar"></div>
                            <div class="loading-bar"></div>
                        </div><br/><br/><br/><br/><br/><br/><br/><br/>
                                </> : 
            <>
            <Image m="auto" w={{base:"140px",sm:"150px",md:"160px",lg:"160px",xl:"160px"}} size="fixed" src={avatar} alt="user" />

            <Box w={{base:"98%",sm:"98%",md:"700px",lg:"700px",xl:"700px"}} m="auto" pb={{base:"90px",sm:"90px",md:"60px",lg:"30px",xl:"30px"}}>
                <Text fontWeight="bold">Followers: <span style={{color:"#E45700"}}>{userdata.followers?.length}</span></Text>
                <Text m="5px 0px" fontWeight="bold">Following: <span style={{color:"#E45700"}}>{userdata.following?.length}</span></Text>

                <Flex w="100%" justifyContent="space-between" alignItems="center" gap="10px" >
                    <Box w="48%" border="1px dashed black" borderRadius="15px" padding="10px">
                        <Text fontFamily="arial black">Name</Text>
                        <Text>{userdata.username}</Text>
                    </Box>
                    <Box w="48%" border="1px dashed black" borderRadius="15px" padding="10px">
                        <Text fontFamily="arial black">Email</Text>
                        <Text>{userdata.email}</Text>
                    </Box>
                </Flex>
                <Flex w="100%" mt="10px" justifyContent="space-between" alignItems="center" gap="10px" border="1px dashed black" borderRadius="15px" padding="10px">
                    <Box>
                        <Text fontFamily="arial black">Password</Text>
                        <Text>************</Text>
                    </Box>
                    <button onClick={()=> navigate("/forgot_password")} className='change_password'>
                        Change Password
                    </button>
                </Flex>


                <Accordion allowToggle mt="10px">
                    <AccordionItem mb="10px">
                        <h2>
                        <AccordionButton border="1px solid #b8b8b8" bg="#e2e2e2" borderRadius="10px">
                            <Box as="span" flex='1' textAlign='left' fontWeight="semibold">
                            {add} Add Your Own Recipe
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>

                        <Text textAlign="center" fontWeight="semibold" color="red">All fields with * are required.</Text><br/>

                        <form onSubmit={handleSubmit}>
                            <FormControl isRequired>

                                <FormLabel>Recipe Name</FormLabel>
                                <Input type="text" value={formdata.recipeName} onChange={(e)=> setFormdata({...formdata,recipeName:e.target.value})} placeholder='Your Recipe Name' required/><br/><br/>

                                <FormLabel>Recipe Image URL</FormLabel>
                                <Input type="text" value={formdata.imageURL} onChange={(e)=> setFormdata({...formdata,imageURL:e.target.value})} placeholder='Your Image URL' required/><br/><br/>

                                <SimpleGrid w="100%" gap="10px" columns={{base:1,sm:2,md:2,lg:2,xl:2}}>
                                    <Box>
                                    <FormLabel>Preparation Time</FormLabel>
                                    <Input type="text" value={formdata.prepTime} onChange={(e)=> setFormdata({...formdata,prepTime:e.target.value})} placeholder='20 minutes / 1 hour etc.' required/><br/>
                                    </Box>

                                    <Box>
                                    <FormLabel>Cook Time</FormLabel>
                                    <Input type="text" value={formdata.cookTime} onChange={(e)=> setFormdata({...formdata,cookTime:e.target.value})} placeholder='20 minutes / 1 hour etc.' required/><br/>
                                    </Box>
                                
                                    <Box>
                                    <FormLabel>Total Time</FormLabel>
                                    <Input type="text" value={formdata.totalTime} onChange={(e)=> setFormdata({...formdata,totalTime:e.target.value})} placeholder='20 minutes / 1 hour etc.' required/><br/>
                                    </Box>

                                    <Box>
                                    <FormLabel>For How many peoples?</FormLabel>
                                    <Input type="number" value={formdata.servings} onChange={(e)=> setFormdata({...formdata,servings:e.target.value})} placeholder='4 / 8 / 10' required/><br/>
                                    </Box>
                                </SimpleGrid><br/>

                                <FormLabel>Difficulty Levels</FormLabel>
                                <Input type="text" value={formdata.difficulty} onChange={(e)=> setFormdata({...formdata,difficulty:e.target.value})} placeholder="Easy / Medium / Hard" /><br/><br/>

                                <SimpleGrid w="100%" gap="10px" columns={{base:2,sm:2,md:2,lg:2,xl:2}}>
                                    <Box>
                                    <FormLabel>Cuisine</FormLabel>
                                    <Input type="text" value={formdata.cuisine} onChange={(e)=> setFormdata({...formdata,cuisine:e.target.value})} placeholder='Indian / Italian / American like this' required/><br/>
                                    </Box>

                                    <Box>
                                    <FormLabel>Occasion</FormLabel>
                                    <Input type="text" value={formdata.occasion} onChange={(e)=> setFormdata({...formdata,occasion:e.target.value})} placeholder='Dinner / Lunch / Breakfast / Party' required/><br/>
                                    </Box>
                                
                                    <Box>
                                    <FormLabel>MealType</FormLabel>
                                    <Input type="text" value={formdata.mealType} onChange={(e)=> setFormdata({...formdata,mealType:e.target.value})} placeholder='Soup / Starter / MainCourse / Dessert like this' required/><br/>
                                    </Box>

                                    <Box>
                                    <FormLabel>RecipeType</FormLabel>
                                    <Input type="text" value={formdata.recipeType} onChange={(e)=> setFormdata({...formdata,recipeType:e.target.value})} placeholder='Veg / NonVeg' required/><br/>
                                    </Box>
                                </SimpleGrid><br/>

                                <FormLabel>Write All Ingredients in 5 Box.</FormLabel>
                                <Input type="text" value={formdata.ingredients[0]} onChange={(e)=> setFormdata({...formdata,ingredients:[e.target.value,formdata.ingredients[1],formdata.ingredients[2],formdata.ingredients[3],formdata.ingredients[4]]})} required/>
                                <Input type="text" value={formdata.ingredients[1]} onChange={(e)=> setFormdata({...formdata,ingredients:[formdata.ingredients[0],e.target.value,formdata.ingredients[2],formdata.ingredients[3],formdata.ingredients[4]]})} required/>
                                <Input type="text" value={formdata.ingredients[2]} onChange={(e)=> setFormdata({...formdata,ingredients:[formdata.ingredients[0],formdata.ingredients[1],e.target.value,formdata.ingredients[3],formdata.ingredients[4]]})} required/>
                                <Input type="text" value={formdata.ingredients[3]} onChange={(e)=> setFormdata({...formdata,ingredients:[formdata.ingredients[0],formdata.ingredients[1],formdata.ingredients[2],e.target.value,formdata.ingredients[4]]})} required/>
                                <Input type="text" value={formdata.ingredients[4]} onChange={(e)=> setFormdata({...formdata,ingredients:[formdata.ingredients[0],formdata.ingredients[1],formdata.ingredients[2],formdata.ingredients[3],e.target.value]})} required/><br/><br/>

                                <FormLabel>Write All Steps to Make Recipe in 5 Box.</FormLabel>
                                <Input type="text" value={formdata.instructions[0]} onChange={(e)=> setFormdata({...formdata,instructions:[e.target.value,formdata.instructions[1],formdata.instructions[2],formdata.instructions[3],formdata.instructions[4]]})} placeholder='Step 1' required/>
                                <Input type="text" value={formdata.instructions[1]} onChange={(e)=> setFormdata({...formdata,instructions:[formdata.instructions[0],e.target.value,formdata.instructions[2],formdata.instructions[3],formdata.instructions[4]]})} placeholder='Step 2' required/>
                                <Input type="text" value={formdata.instructions[2]} onChange={(e)=> setFormdata({...formdata,instructions:[formdata.instructions[0],formdata.instructions[1],e.target.value,formdata.instructions[3],formdata.instructions[4]]})} placeholder='Step 3' required/>
                                <Input type="text" value={formdata.instructions[3]} onChange={(e)=> setFormdata({...formdata,instructions:[formdata.instructions[0],formdata.instructions[1],formdata.instructions[2],e.target.value,formdata.instructions[4]]})} placeholder='Step 4' required/>
                                <Input type="text" value={formdata.instructions[4]} onChange={(e)=> setFormdata({...formdata,instructions:[formdata.instructions[0],formdata.instructions[1],formdata.instructions[2],formdata.instructions[3],e.target.value]})} placeholder='Step 5' required/><br/><br/>

                                <SimpleGrid w="100%" gap="10px" columns={{base:2,sm:2,md:5,lg:5,xl:5}}>
                                    <Box>
                                        <FormLabel>Calories</FormLabel>
                                        <Input value={formdata.nutrition.calories} onChange={(e)=> setFormdata({...formdata,nutrition:{...formdata.nutrition,calories:e.target.value}})} type='text' placeholder='200 / 300' required/>
                                    </Box>

                                    <Box>
                                        <FormLabel>Fat</FormLabel>
                                        <Input value={formdata.nutrition.totalFat} onChange={(e)=> setFormdata({...formdata,nutrition:{...formdata.nutrition,totalFat:e.target.value}})} type='text' placeholder='15g / 20g' required/>
                                    </Box>

                                    <Box>
                                        <FormLabel>Carbs</FormLabel>
                                        <Input value={formdata.nutrition.totalCarbohydrates} onChange={(e)=> setFormdata({...formdata,nutrition:{...formdata.nutrition,totalCarbohydrates:e.target.value}})} type='text' placeholder='50g / 60g' required/>
                                    </Box>

                                    <Box>
                                        <FormLabel>Protien</FormLabel>
                                        <Input value={formdata.nutrition.protein} onChange={(e)=> setFormdata({...formdata,nutrition:{...formdata.nutrition,protein:e.target.value}})} type='text' placeholder='20g / 30g' required/>
                                    </Box>

                                    <Box>
                                        <FormLabel>Sugar</FormLabel>
                                        <Input value={formdata.nutrition.sugars} onChange={(e)=> setFormdata({...formdata,nutrition:{...formdata.nutrition,sugars:e.target.value}})} type='text' placeholder='5g / 8g' required/>
                                    </Box>
                                </SimpleGrid><br/>

                                {recipe_loading? <Button w="100%" bg="#E45700" color="#fff" _hover={{bg:"#E45700"}} isLoading></Button> : <Button w="100%" bg="#E45700" color="#fff" borderRight="2px solid black" borderBottom="2px solid black" _hover={{bg:"#E45700",border:"none"}} type='submit'>Add Recipe</Button>}
                            </FormControl>
                        </form>

                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem mb="10px">
                        <h2>
                        <AccordionButton border="1px solid #b8b8b8" bg="#e2e2e2" borderRadius="10px">
                            <Box as="span" flex='1' textAlign='left' fontWeight="semibold">
                            {star} Your Reviewed Recipe
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <h2>
                        <AccordionButton border="1px solid #b8b8b8" bg="#e2e2e2" borderRadius="10px">
                            <Box as="span" flex='1' textAlign='left' fontWeight="semibold">
                            {added} Your Added Recipe
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} >
                        {recipedata.length===0? <Text fontWeight="semibold" color="blue">You have not added any recipes yet, Please Add🙂🙂</Text> : 
                        recipedata.map((item)=>(
                            <Box w="100%" borderRadius="5px" padding="10px" bg="#ffddc8" mb="6px">
                                <Flex w="100%" justifyContent="space-between" gap="4px" alignItems="center" direction={{base:"column",sm:"row",md:"row",lg:"row",xl:"row"}}>
                                    <Flex w={{base:"96%",sm:"40%",md:"40%",lg:"40%",xl:"40%"}} justifyContent="space-between" gap="10px">
                                        <Image w="40px" src={item.imageURL} alt={item.recipeName} />
                                        <Text fontWeight="bold" color="#E45700">{item.recipeName}</Text>
                                    </Flex>
                                    <Flex w={{base:"96%",sm:"40%",md:"40%",lg:"40%",xl:"40%"}} justifyContent="space-between" gap="10px">
                                        <button onClick={()=> navigate(`/recipe/${item._id}`)} class="bookmarkBtn">
                                            <span class="IconContainer"> 
                                                {view}
                                            </span>
                                            <p class="text">View</p>
                                        </button>

                                        <button onClick={()=> handleDel(item._id,token)} class="bookmarkBtn">
                                            <span class="IconContainer"> 
                                                {del}
                                            </span>
                                            <p class="text">Delete</p>
                                        </button>
                                    </Flex>
                                </Flex>
                            </Box>
                        ))}
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>


                {logout_loading? <Button mt="10px" w="100%" bg="#E45700" _hover={{bg:"#E45700"}} isLoading></Button> : <button onClick={handleLogout} className='logout'>{log} Logout</button>}
            </Box>
            </>}
        </Flex>

        <Footer />
        </>
    )
}
