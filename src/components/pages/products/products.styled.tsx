import styled from "styled-components";
import { Colors, FontInfo } from "../../../assets/colorAndFontsVariables/colorsAndFonts";

export const ProductsLayout = styled.div`
    max-width: 1200px;
    margin: 0 auto;

    h1 {
        font-size: ${FontInfo.font30};
        margin-bottom: 20px;
        margin-top: 40px;
        border-bottom: 3px solid ${Colors.primary};
        color: ${Colors.primary};
        width: 200px;
    }
    
    h2 {
        font-size: ${FontInfo.font24}
    }
    
    div {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
    }

`