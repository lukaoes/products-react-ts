import styled from "styled-components";
import { Colors, FontInfo } from "../../../assets/colorAndFontsVariables/colorsAndFonts";

export const TransactionLayout = styled.div`
    width: 1200px;
    display: flex;
    flex-direction: column;
    margin: 0 auto;

    .margin0auto {
        margin: 0 auto;
    }
    }
    .row {
        display: flex;
        margin: 0 auto;
        h1 {
            border: 1px solid ${Colors.lightBlue};
            font-size: ${FontInfo.font20};
            color: ${Colors.white};
            padding: 15px;
            background-color: ${Colors.primary};
            display: inline-block;
        }

        p{
            border-bottom: 1px solid ${Colors.primary};
        }


        p:first-child{
            width: 45px;
            padding: 15px;
            text-align: center;
        }

        p:nth-child(2){
            width: 143.42px;
            padding: 15px;
            text-align: center;
        }
        p:nth-child(3){
            width: 167.98px;
            padding: 15px;
            text-align: center;
        }

        p:nth-child(4){
            width: 153.03px;
            padding: 15px;
            text-align: center;
        }
        p:nth-child(5){
            width: 173.11px;
            padding: 15px;
            text-align: center;
        }
        p:nth-child(6){
            width: 236.7px;
            padding: 15px;
            text-align: center;
        }
    }
`