import styled from "styled-components";
import { Colors, FontInfo } from "../../../assets/colorAndFontsVariables/colorsAndFonts";

export const DivForMain = styled.div`
        max-width: 1200px;
    margin: 0 auto;

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

    h1 {
        font-size: ${FontInfo.font30};
        margin-bottom: 20px;
        margin-top: 40px;
        color: ${Colors.primary};
    }

    @media (max-width: 1217px) {
        .carousel-root  {
            margin: 0 auto;
            width: 710px;
        }

        h1 {
            font-size: ${FontInfo.font30};
        }
    }

    @media (max-width: 710px) {
        .carousel-root  {
            margin: 0 auto;
            width: 375px;
        }

        h1 {
                font-size: ${FontInfo.font24};
            }
        }

`

export const Featured = styled.div`
    max-width: 1200px;
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    
`