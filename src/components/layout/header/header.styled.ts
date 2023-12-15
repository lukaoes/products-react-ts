import styled from "styled-components";
import { Colors, FontInfo } from "../../../assets/colorAndFontsVariables/colorsAndFonts";

export const Div = styled.div`
    width: 1438px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
`

export const DarkHeader = styled.div`
    display: flex;
    height: 58px;
    padding: 9px 24px 3px 24px;
    justify-content: center;
    align-items: center;
    background-color: ${Colors.primary};

    div {
        display: flex;
        gap: 10px;
        padding: 10px;
    }

    h6 {
        color: ${Colors.white};
        font-size: ${FontInfo.font14};
        font-weight: ${FontInfo.weight700};
    }

    @media (max-width: 1034px) {
        display: none;
    }
`

export const WhiteHeader = styled.div`
    
`
