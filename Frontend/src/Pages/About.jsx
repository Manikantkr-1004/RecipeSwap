import React from 'react'
import { Navbar } from '../Components/Navbar'
import { Footer } from '../Components/Footer'
import { Box, Heading, Text, Image, Flex } from '@chakra-ui/react'
import { Helmet } from 'react-helmet';

export function About() {

    return (
        <>
            <Navbar />
            <Helmet>
                <title>About | RecipeSwap</title>
            </Helmet>

            <Box  h={"auto"} w={"100%"} >
                <Box w={"80%"} margin={"auto"} lineHeight={"30px"}>

                    <Heading mb={"2%"} as={"h1"} size={"xl"}>
                        About Us
                    </Heading>
                    <Heading mb={"2%"} as={"h2"} size={"lg"}>
                        Who We Are
                    </Heading>
                    <Text fontSize={"xl"}>
                        Home cooks are our heroes—it's as simple as that. Allrecipes is a community built by and for kitchen experts: The cooks who will dedicate the weekend to a perfect beef bourguignon but love the simplicity of a slow-cooker rendition, too. The bakers who labor over a showstopping 9-layer cake but will just as happily doctor boxed brownies for a decadent weeknight dessert. The entertainers who just want a solid snack spread, without tons of dirty dishes at the end of the night.

                    </Text>
                </Box>
                <Box w={"80%"} margin={"auto"} mt={"3%"} lineHeight={"30px"}>
                    <Text fontSize={"xl"}>
                        Most importantly, Allrecipes connects home cooks with their greatest sources of inspiration — other home cooks. We're the world's leading digital food brand, and that inspires us to do everything possible to keep our community connected. Sixty-million home cooks deserve no less.
                    </Text>
                </Box>
                <Box w={"80%"} margin={"auto"} mt={"5%"} lineHeight={"30px"}>

                    <Heading mb={"2%"} as={"h1"} size={"xl"}>
                        Our History
                    </Heading>

                    <Text fontSize={"xl"}>
                        Founded in 1997 as CookieRecipe.com, Allrecipes changed the food world by providing the tools to share recipes and cooking tips, while celebrating the expertise of home cooks online. Since then, Allrecipes has become the world's largest community-driven food brand, providing trusted resources to more than 60 million home cooks each month.
                    </Text>
                </Box>
                <Box w={"80%"} margin={"auto"} mt={"3%"} lineHeight={"30px"}>
                    <Text fontSize={"xl"}>
                        Every day, cooks from around the world publish recipes and inspire one another through recipe photos, ratings, reviews, and videos. The combination of the Allrecipes community with our team of editorial and kitchen professionals provides authority found nowhere else on the internet and has turned the brand into an indispensable resource for cooks of all skill levels.
                    </Text>
                </Box>
                <Box w={"80%"} margin={"auto"} mt={"3%"} lineHeight={"30px"}>
                    <Text fontSize={"xl"}>
                        You can connect with us and our 11M followers on social media, too. On TikTok, learn how you should store avocados or find out if air fryer coconut shrimp lives up to the hype. On Facebook, Pinterest, and Twitter, browse easy weeknight meals and scour reviews of the world's best air fryers. Find photo-worthy dinner inspiration on Instagram. And on YouTube, cook along with Chef John, who serves up creative, new recipes weekly — alongside a few good laughs thanks to his well-timed puns.
                    </Text>
                </Box>
                <Box w={"80%"} margin={"auto"} mt={"3%"} lineHeight={"30px"}>
                    <Text fontSize={"xl"}>
                        If you own an Amazon Alexa or Google Assistant device, you'll find our recipes easily discoverable via Voice search. Apple and Android users can access their favorite recipes and find dinner inspo via our Easy Recipe Ideas app.
                    </Text>
                </Box>
                <Box w={"80%"} margin={"auto"} mt={"5%"} lineHeight={"30px"}>

                    <Heading mb={"2%"} as={"h1"} size={"xl"}>
                        Recipe Swap Magazine
                    </Heading>

                    <Text fontSize={"xl"}>
                        Founded in 1997 as CookieRecipe.com, Allrecipes changed the food world by providing the tools to share recipes and cooking tips, while celebrating the expertise of home cooks online. Since then, Allrecipes has become the world's largest community-driven food brand, providing trusted resources to more than 60 million home cooks each month.
                    </Text>
                </Box>
                <Box w={"80%"} margin={"auto"} mt={"3%"} lineHeight={"30px"}>
                    <Text fontSize={"xl"}>
                        The food industry's first large-scale digital-to-print brand extension, Allrecipes magazine launched in 2013. Now published six times a year, it reaches an audience of nearly 9 million. The magazine serves up a seasonal slice of recipes and real-cook wisdom from Allrecipes.com — along with the best of what's new from the greater food and cooking community (emerging trends, entertaining ideas, new products, and more). We aim for a mix of approachable inspiration and down-to-earth service in every issue.                    </Text>
                </Box>
                <Box w={"80%"} margin={"auto"} mt={"3%"} lineHeight={"30px"}>
                    <Text fontSize={"xl"}>
                        A majority of the recipes in Allrecipes magazine start with creations shared by home cooks on Allrecipes.com. All are tested, tasted, refined, edited, and professionally photographed before they appear in the magazine. Our editors and contributors also research and write about entertaining, diverse cuisines, Allrecipes Allstars and other fascinating cooks, kitchen decor and organization, cooking gadgets and gear, culinary travel, health, special diets, nutrition, parenting, and pets. We incorporate the best advice from editors, testers, and the cooking community to make good recipes better, great recipes easier, and every day a little more delicious. Sign up for a subscription now.                    </Text>
                </Box>
                <Box w={"80%"} margin={"auto"} mt={"5%"} lineHeight={"30px"}>

                    <Heading mb={"2%"} as={"h1"} size={"xl"}>
                        Product Reviews
                    </Heading>

                    <Text fontSize={"xl"}>
                        Our product reviews are independent and based on research and product testing — if you visit links within our content, we may receive commissions from your purchases, but we never receive any compensation or consideration for the content of our recommendations. Learn more about our review process.                    </Text>
                </Box>


                <Box w={"80%"} margin={"auto"} mt={"5%"} lineHeight={"30px"}>

                    <Heading mb={"2%"} as={"h1"} size={"xl"}>
                        Meet Our Leadership Team
                    </Heading>

                    <Text as={"b"} fontSize={"xl"}>
                        1. Manikant Kumar
                    </Text>
                    <Text fontSize={"lg"}>
                        Admin, RecipeSwap.com
                    </Text>
                </Box>
                <Flex w={"80%"} margin={"auto"} mt={"3%"} justifyContent={"center"} alignItems={"center"} lineHeight={"30px"}>
                    <Image borderRadius={"50%"} src='https://ca.slack-edge.com/T05HT3HFDN2-U05J9LPHMJ9-7417ab0db4d1-512' />
                </Flex>

                <Box w={"80%"} margin={"auto"} mt={"5%"} lineHeight={"30px"}>



                    <Text as={"b"} fontSize={"xl"}>
                        2. Mohammad Hasim Shaikh
                    </Text>
                    <Text fontSize={"lg"}>
                        Admin, RecipeSwap.com
                    </Text>
                </Box>
                <Flex w={"80%"} margin={"auto"} mt={"3%"} justifyContent={"center"} alignItems={"center"} lineHeight={"30px"}>
                    <Image borderRadius={"50%"} src='https://ca.slack-edge.com/T05HT3HFDN2-U05J7G2KYGN-5b657bb06d29-512' />
                </Flex>

                <Box w={"80%"} margin={"auto"} mt={"5%"} lineHeight={"30px"}>



                    <Text as={"b"} fontSize={"xl"}>
                        2. Shivansh Soni
                    </Text>
                    <Text fontSize={"lg"}>
                        Admin, RecipeSwap.com
                    </Text>
                </Box>
                <Flex w={"80%"} margin={"auto"} mt={"3%"} justifyContent={"center"} alignItems={"center"} lineHeight={"30px"}>
                    <Image borderRadius={"50%"} src='https://ca.slack-edge.com/T05HT3HFDN2-U05HXBJ3ZGX-ca90ca59e36d-512' />
                </Flex>

                <Box w={"80%"} margin={"auto"} mt={"5%"} lineHeight={"30px"}>



                    <Text as={"b"} fontSize={"xl"}>
                        2. Devesh Suryawanshi
                    </Text>
                    <Text fontSize={"lg"}>
                        Admin, RecipeSwap.com
                    </Text>
                </Box>
                <Flex w={"80%"} margin={"auto"} mt={"3%"} justifyContent={"center"} alignItems={"center"} lineHeight={"30px"}>
                    <Image borderRadius={"50%"} src='https://avatars.githubusercontent.com/u/110163013?v=4' />
                </Flex>

                <Box w={"80%"} margin={"auto"} mt={"5%"} lineHeight={"30px"}>

                    <Heading mb={"2%"} as={"h1"} size={"xl"}>
                        Contact Us
                    </Heading>

                    <Text fontSize={"xl"}>
                        To contact Recipe Swap magazine, email feedback@armagazine.com

                        For help with your Allrecipes magazine subscription, visit our online help page, email us at alrcustserv@cdsfulfillment.com, or call 800-837-9017.

                        For digital help with our site, please visit our Help Center.
                    </Text>
                </Box>
                <Box w={"80%"} margin={"auto"} mt={"5%"} lineHeight={"30px"}>

                    <Heading mb={"2%"} as={"h1"} size={"xl"}>
                        Write For Us
                    </Heading>

                    <Text fontSize={"xl"}>
                    Recipe Swap is always on the lookout for talented new writers, recipe developers, equipment reviewers, and photographers who love cooking to join our team of contributors. We're currently accepting pitches for recipes, news and trending articles, and features (especially personal essays and food histories). Please submit pitches or inquire about potential assignments by sharing a short bio and your relevant experience in our pitch form.
                    </Text>
                </Box>
            </Box>
            <Footer />
        </>
    )
}
