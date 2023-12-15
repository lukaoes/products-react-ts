import styled from "styled-components";
import { Colors, FontInfo } from "../../assets/colorAndFontsVariables/colorsAndFonts";

export const SingleProdLayout = styled.div`
    width: 900px;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
`

export const LeftDiv = styled.div`
    width: 375px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .control-arrow, .control-next {
        display: none;
    }
    .carousel .carousel-status {
        display: none;
    }

    .carousel .thumbs {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .carousel.carousel-slider .control-arrow  {
       background-color: ${Colors.primary}; 
       opacity: 0.1;
       border-radius: 5px;
    }

    a {
        margin-bottom: 20px;
        text-decoration: none;
        color: ${Colors.primary}; 
        font-size: ${FontInfo.font19};
    }
`

export const RightDiv = styled.div`
    width: 405px;
    

    div h1 {
        font-size: ${FontInfo.font30};
        margin-bottom: 25px;
    }

    div h3 {
        margin-bottom: 25px;

        span {
            color: ${Colors.lightBlue}
        }
    }
    div div{
        display: flex;

        h4{
            font-size: ${FontInfo.font24};


            span {
                font-size: ${FontInfo.font16};
            }
        }        

    }

    div div div{
        width: 110px;
        height: 46px;
        background-color: ${Colors.earth};
        border-radius: 10px;
        padding: 10px;
        margin-right: 15px;
        h3 {
            font-size: ${FontInfo.font30};
            color: ${Colors.primary};
            
        }
    }

    p {
        margin-top: 25px;
        font-size: ${FontInfo.font16};
        color: ${Colors.secondary};
        width: 393px;
    }

    h2 {
        margin-top: 40px;
        color: ${Colors.secondary};
        font-size: ${FontInfo.font16};
        font-weight: ${FontInfo.weight600};
    }

    h5 {
        margin-top: 35px;
        color: ${Colors.orange};
        font-size: ${FontInfo.font14};
        font-weight: ${FontInfo.weight400};
    }
`
