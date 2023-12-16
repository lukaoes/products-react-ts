import styled from "styled-components";
import { Colors, FontInfo } from "../../../assets/colorAndFontsVariables/colorsAndFonts";

export const CateLayout = styled.div`
    max-width: 1200px;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin: 0 auto;
    justify-content: center;

    
`

export const CateSection = styled.div`

    a {
        display: inline-block;
        border-radius: 8px;
        padding: 15px;
        text-decoration: none;
        background-color: ${Colors.secondary};
        font-size: ${FontInfo.font20};
        color: ${Colors.white};
        cursor: pointer;
        transition: all 0.3s ease-in-out;

        &:hover {
        background-color: ${Colors.primary};
        }
    }
`