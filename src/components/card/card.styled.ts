import styled from "styled-components";
import { Colors, FontInfo } from "../../assets/colorAndFontsVariables/colorsAndFonts";

export const CardLayout = styled.div`
    width: 200px;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    border: 1px solid ${Colors.primary};
    border-radius: 8px;
    margin-top: 15px;

    h2 {
        font-size: ${FontInfo.font24};
        height: 55px;
    }
    img {
        width: 198px;
        height: 200px;
        border-top-right-radius: 8px ;
        border-top-left-radius: 8px ;
        object-fit: cover;
        margin-bottom: 15px;
    }



    div {
        display: flex;
        flex-direction: column;
        gap: 10px;
        text-align: center;
        margin-bottom: 10px;
        padding: 15px;
    }

    p {
        font-size: ${FontInfo.font16};
        font-weight: ${FontInfo.weight400};
        height: 150px;
    }

    a {
        font-size: ${FontInfo.font20};
        text-decoration: none;
        color: ${Colors.gray};
        transition: all 0.3s ease-in-out;
        font-weight: ${FontInfo.weight700};
        margin-top: 10px;

        &:hover {
            color: ${Colors.primary};
        }
    }
`