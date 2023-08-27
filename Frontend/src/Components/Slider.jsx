import React from "react";
import styled from "styled-components";

export const Slider = () => {
  return (
    <>
      <WRAPPER>

      </WRAPPER>
    </>
  );
};

const WRAPPER = styled.div`
width: 100%;
height: 300px;
background-image: url("https://www.allrecipes.com/thmb/Jpjl4XklbmOex37pzQh9QtX5Sag=/1900x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/2400-125434-GrilledCheeseoftheGods-mfs-3x2-067-1-2000-ca3e7983b80f4d0f991baa438f12a15d.jpg");
background-size: 100%;
animation: changeImage 20s linear infinite;

@keyframes changeImage {
    0%{
        background-image: url("https://www.allrecipes.com/thmb/Jpjl4XklbmOex37pzQh9QtX5Sag=/1900x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/2400-125434-GrilledCheeseoftheGods-mfs-3x2-067-1-2000-ca3e7983b80f4d0f991baa438f12a15d.jpg");
    }
    10%{
        background-image: url("https://www.allrecipes.com/thmb/awCoY5qMuVg-nlxyJyZ2kbX4M40=/1900x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/197357_original_Spicy-Rapid-Roast-Chicken-2000-9a73d1b4e1ba4d08ad9c4a74dbc3101b.jpg");
    }
    20%{
        background-image: url("https://www.allrecipes.com/thmb/St7QERiXs_UUjUENJKGLzArRJuI=/1900x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/2400-86353-SimplePastaSalad-ddmfs-2X1-0511-1-1-2000-83b596666fab41829e702eaacbe1000e.jpg");
    }
    20%{
        background-image: url("https://www.allrecipes.com/thmb/Pl8VT6c9SNRanYMY557u4bWog7E=/1900x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/237576-slow-cooker-chili-MFS-55-2400x600-1-2000-5d4082054ee24412b3edba4c13f063b8.jpg");
    }
    40%{
        background-image: url("https://www.allrecipes.com/thmb/Y6KMit6JIVfl8xE8ihvrKHj9YN8=/1900x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/1026419_Wedding-Gift-Spaghetti-Sauce-2000-aa58f288e10244c5b4fee5f34b06728c.jpg");
    }
    50%{
        background-image: url("https://www.allrecipes.com/thmb/KyCB6ir8n8H4p8o7jllLr_Y5dQU=/1900x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/fruit-102087806-cf4121f035a9465aae80fc8c1e4cd299.jpg");
    }
    60%{
        background-image: url("https://www.allrecipes.com/thmb/3avjwK_Xia_1DO8ZcsG_30p14_s=/1900x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/2400-107344-sweet-baby-carrots-ddmfs-0188-3x4-1-2000-2e0bdece28ea4b748cc342004ed250eb.jpg");
    }
    70%{
        background-image: url("https://www.allrecipes.com/thmb/gFQzFOo5BLYSvNrRjCY7NmXuOWM=/1900x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/filipino-feast-armag-CD_33452-2400x600-1-2000-e9953407d7694dd79add0fc6efa1fd03.jpg");
    }
    80%{
        background-image: url("https://www.allrecipes.com/thmb/JklljbegOrS-RAwAGePt2ueyXF4=/1900x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/2400-236881-SlowCookerStuffedPeppers-ddmfs-2X1-0584-2000-157150f5bc344274bae7e332377a6413.jpg");
    }
    90%{
        background-image: url("https://www.allrecipes.com/thmb/J7RG8u1RYtk3fdMTmLNEDFycOww=/1900x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/2400-274966-sheet-pan-parmesan-chicken-and-veggies-ddmfs-2x1-0152-2000-d01f04d882cf4ec0b4aea4af01eb20c3.jpg");
    }
    100%{
        background-image: url("https://www.allrecipes.com/thmb/p5ypo2B9PnG34Zm-fOvYaPJfvTo=/1900x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/2400-AR-14452-GreenSalad-0028-2x1-1-2000-c0687125d0ff4990b7c4922daf147aea.jpg");
    }
}

@media (max-width: 1250px) {
    height: 250px;
}

@media (max-width: 994px) {
    height: 200px;
}

@media (max-width: 800px) {
    height: 150px;
}

@media (max-width: 597px) {
    height: 100px;
}

@media (max-width: 410px) {
    height: 80px;
}

@media (max-width: 320px) {
    height: 70px;
}
`;
