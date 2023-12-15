import styled from "styled-components";
import { Colors, FontInfo } from "../../../assets/colorAndFontsVariables/colorsAndFonts";

export const Div = styled.div`
    width: 1438px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    padding: 9px 24px 3px 24px;

`

export const DarkHeader = styled.div`
    display: flex;
    height: 58px;
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

    @media (max-width: 1046px) {
        display: none;
    }
`

export const WhiteHeader = styled.div`
    display: flex;
    padding-bottom: 8px;
    padding: 12px 38px;
    gap: 40px;
    background-color: ${Colors.white};

    h1 {
        color: ${Colors.primary};
        font-size: ${FontInfo.font24};
        font-weight: ${FontInfo.weight700};
        padding: 13px 42px 13px 0px;
        margin-right: 40px;
        cursor: pointer;
        transition: all 0.3s ease-in-out;

        &:hover {
            color: ${Colors.gray};
        }
    }

    nav {
        display: flex;
        gap: 15px;
        justify-content: center;
        align-items: center;

        @media (max-width: 932px) {
            display: none;
    }
        
        a {
            text-decoration: none;
            color: ${Colors.gray};
            font-size: ${FontInfo.font14};
            font-weight: ${FontInfo.weight700};
            transition: all 0.3s ease-in-out;

            &:hover {
                color: ${Colors.primary};
            }
        }
    }

    h4 {
        color: ${Colors.lightBlue};
        font-weight: ${FontInfo.weight700};
        font-size: ${FontInfo.font14};
    }
`

export const NavDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    @media (max-width: 1034px) {
        display: flex;
        justify-content: flex-end;
    }

`
export const LoginDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    .activeContent {
        display: none;
    }
    div img {
        padding: 15px;
    }
`
export const UserMobile = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
     @media (max-width: 650px) {
        display: none;
    }
`

export const MobileDel = styled.div`

    @media (max-width: 932px) {
        display: none;
    }
`
export const BurgerMenu = styled.div`
    @media (max-width: 932px) {
        display: inline-block;
        display: flex;
        flex-direction: column;
        gap: 5px;
        transition: all 0.3s ease-in-out;
        position: relative;
        height: 16px;
        width: 16px;
        
        &:hover .d2 {
            display: none;
        }

        &:hover .d1 {
            transform: rotate(45deg);
            position: absolute;
            top: 7px;

        }

        &:hover .d3 {
            transform: rotate(128deg);
            position: absolute;
            top: 7px;
        }

        .actived2 {
            display: none;
        }
        .actived1 {
            transform: rotate(45deg);
            position: absolute;
            top: 7px;
        }
        .actived3 {
            transform: rotate(128deg);
            position: absolute;
            top: 7px;
        }
        div {
            background-color: ${Colors.lightBlue};
            width: 16px;
            height: 2px;
        }

    }
`

export const BurgerMenuContent = styled.div`
    width: 100%;
    height: 332px;
    position: absolute;
    z-index: 2;
    top: 86px;
    left: 0px;
    background-color: ${Colors.white};
    display: flex;
    justify-content: center;
    align-items: center;

    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 30px;

        a {
            text-decoration: none;
            color: ${Colors.gray};
            font-size: ${FontInfo.font30};
            font-weight: ${FontInfo.weight400};
            transition: all 0.3s ease-in-out;

            &:hover {
                color: ${Colors.primary};
            }
        }
    }
`