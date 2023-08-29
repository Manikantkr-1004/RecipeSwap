import React from 'react';
import {
  Box,
  Image,
  Container,
  Stack,
  SimpleGrid,
  Text,
  Link,
  VisuallyHidden,
  chakra,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';
import logo from "./images/logo.png"
import downloadone from "./images/appstore.png"
import downloadtwo from "./images/goggle.png"
import { useNavigate } from 'react-router-dom';
const ListHeader = ({ children }) => {
  
  return (
    <Text fontWeight={"bold"} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};

const SocialButton = ({ children, label, href }) => {
  
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export function Footer() {
  const navigate = useNavigate()
  return (
    <>
    <svg width="100%" height="100%" id="svg" viewBox="0 0 1400 280" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150"><path d="M 0,400 C 0,400 0,200 0,200 C 64.80133185349611,200.4821309655938 129.60266370699222,200.96426193118756 176,218 C 222.39733629300778,235.03573806881244 250.39067702552722,268.62508324084354 306,272 C 361.6093229744728,275.37491675915646 444.8346281908989,248.53540510543843 505,243 C 565.1653718091011,237.46459489456157 602.2708102108768,253.2332963374029 643,253 C 683.7291897891232,252.7667036625971 728.0821309655939,236.53140954495007 785,209 C 841.9178690344061,181.46859045504993 911.4006659267479,142.6410654827969 967,157 C 1022.5993340732521,171.3589345172031 1064.315205327414,238.90432852386238 1111,235 C 1157.684794672586,231.09567147613762 1209.3385127635959,155.74162042175362 1265,138 C 1320.6614872364041,120.25837957824639 1380.3307436182022,160.1291897891232 1440,200 C 1440,200 1440,400 1440,400 Z" stroke="none" stroke-width="0" fill="#f2f2f2" fill-opacity="1" class="transition-all duration-300 ease-in-out delay-150 path-0"></path></svg>
    <Box 

    
      bg={useColorModeValue('#F2F2F2')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
          <Stack align={'flex-start'}>
            <ListHeader><Image onClick={()=> navigate("/")} _hover={{cursor:"pointer"}} w={"60%"} src={logo}/></ListHeader>
            <Link onClick={()=> navigate("/about")}>About Us</Link>
            <Link href={'#'}>Blog</Link>
            <Link href={'#'}>Careers</Link>
            <Link href={'#'}>Contact Us</Link>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader fontWeight="bold">Support</ListHeader>
            <Link href={'#'}>Help Center</Link>
            <Link href={'#'}>Safety Center</Link>
            <Link href={'#'}>Community Guidelines</Link>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>Legal</ListHeader>
            <Link href={'#'}>Cookies Policy</Link>
            <Link href={'#'}>Privacy Policy</Link>
            <Link href={'#'}>Terms of Service</Link>
            <Link href={'#'}>Law Enforcement</Link>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>Install App</ListHeader>
            <Image _hover={{cursor:"pointer"}} src={downloadone}></Image>
            <Image _hover={{cursor:"pointer"}} src={downloadtwo}></Image>
          </Stack>
        </SimpleGrid>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.700')}>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ md: 'space-between' }}
          align={{ md: 'center' }}>
          <Text>© 2022 Recipe Swap. All rights reserved</Text>
          <Stack direction={'row'} spacing={6}>
            <SocialButton label={'Twitter'} href={'#'}>
              <FaTwitter />
            </SocialButton>
            <SocialButton label={'YouTube'} href={'#'}>
              <FaYoutube />
            </SocialButton>
            <SocialButton label={'Instagram'} href={'#'}>
              <FaInstagram />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
    </>
  );
}