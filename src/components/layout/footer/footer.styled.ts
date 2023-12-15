import styled from "styled-components";
import { Colors, FontInfo } from "../../../assets/colorAndFontsVariables/colorsAndFonts";

export const FooterLayout = styled.div`
    height: 50px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${Colors.primary};
    color: ${Colors.white};
    margin-top: 50px;
    
    span {
        color: ${Colors.lightBlue};
        margin-left: 5px;
    }
`