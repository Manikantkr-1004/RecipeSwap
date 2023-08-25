import { Button } from '@chakra-ui/button'
import React from 'react'
import { styled } from 'styled-components'

export const BottomUpButton = ({handleAdd}) => {
  return (
    <SPAN>
    <Button variant={"SimpleWhite"} onClick={handleAdd} className="addnew">
    Add New
</Button>
</SPAN>
  )
}
const SPAN = styled.span`
    .addnew {
 padding: 10px 15px;
 border: unset;
 border-radius: 15px;
 color: #000000;
 z-index: 1;
 background: #f5f5f5;
 position: relative;
 font-weight: 1000;
 font-size: 17px;
 transition: all 250ms;
 overflow: hidden;
}

.addnew::before {
 content: "";
 position: absolute;
 top: 0;
 left: 0;
 height: 100%;
 width: 0;
 border-radius: 15px;
 background-color: #ff8f49;
 z-index: -1;
 transition: all 250ms
}



.addnew:hover::before {
 width: 100%;
}
`