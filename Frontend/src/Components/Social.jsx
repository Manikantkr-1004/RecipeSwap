import React from "react";
import styled from "styled-components";
import { BiLogoFacebook } from "react-icons/bi";
import { BsTwitter } from "react-icons/bs";
import { FaPinterestP } from "react-icons/fa";
import { IoMailSharp } from "react-icons/io5";

export const Social = () => {
  return (
    <WRAPPER>
      <div className="container">
        <BiLogoFacebook className="fb"/>
      </div>
      <div className="container">
        <BsTwitter className="twi" />
      </div>
      <div className="container">
        <FaPinterestP className="Pin" />
      </div>
      <div className="container">
        <IoMailSharp className="mail"/>
      </div>
    </WRAPPER>
  );
};

const WRAPPER = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 180px;
height: 50px;

.fb{
    font-size: 18px;
    color: 	#0c63d5;
}

.twi{
    font-size: 18px;
    color: #00ACEE;
}

.Pin{
    font-size: 18px;
    color: #E60023;
}

.mail{
    font-size: 18px;
    color: gray;
}

.container{
    padding: 10px;
    border: solid gray 1px;
    border-radius: 50%;
}
`;
