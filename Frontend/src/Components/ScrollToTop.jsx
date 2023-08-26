import React, { useEffect, useState } from 'react'
import {Flex} from "@chakra-ui/react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons'

export function ScrollToTop() {
    
    const up = <FontAwesomeIcon size='md' bounce icon={faAngleDoubleUp} />
    const [showbutton , setShowButton] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
    
      const handleScroll = () => {
        if (window.scrollY > 100) {
          setShowButton(true);
        } else {
          setShowButton(false);
        }
      };

      const ScrollHandle = ()=>{
        window.scrollTo({top:0})
      }

    return (
        <>
        {showbutton && <Flex w="40px" h="40px" borderRadius="50%" border="2px solid #E45A04" cursor="pointer"
        position="fixed" right="15px" bottom="15px" color="#fff" fontWeight="bold"
        justifyContent="center" alignItems="center"
        onClick={ScrollHandle}
        bg="#E45A04" boxShadow= "rgba(14, 14, 14, 0.527) 0px 1px 2px 0px, rgba(15, 15, 15, 0.459) 0px 2px 6px 2px">
            {up}
        </Flex>}
        </>
    )
}
