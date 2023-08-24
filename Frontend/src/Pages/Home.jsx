import React from 'react'
import { Box, Image } from '@chakra-ui/react'
export function Home() {
    const backgroundStyle = {
        backgroundImage: "url('https://www.allrecipes.com/thmb/96zl9l1_7Phn8ipZUMwtd1Ze7-M=/2000x666/filters:no_upscale():max_bytes(150000):strip_icc():focal(1499x0:1501x2):format(webp)/1132731_BakedTomatoSlices3x1-e9f40308965540019cda782dcdcfd456.jpg')",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 120%',
    };

    return (
        <>
            <Box border={"1px solid black"} width={"100%"} h={"auto"}>
                <Box border={"1px solid black"} h={"70vh"} w={"99vw"} style={backgroundStyle}>


                </Box>
            </Box>
        </>
    )
}
