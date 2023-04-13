import styled from "styled-components";
import { TextField } from "@mui/material";

export const DashboardMain = styled.main`
    width: 100vw;
    height: 100vh;
    position: relative;
    background-color: var(--blue-ice);
    box-sizing: border-box;

    @media (max-width: 500px) {
        overflow: hidden;
    }

    @media (min-width: 501px) and (max-width: 1000px) {
        overflow: hidden;
    }
`

export const BackgroundImg = styled.img`
    width: 100%;
    height: 90%;
    position: absolute;
    top: 2%;
    box-shadow: 2px 10px 20px var(--dark-blue);

    @media (max-width: 500px) {
        height: 80%;
        top: 10%;
    }

    @media (min-width: 501px) and (max-width: 1000px) {
        height: 85%;
        top: 8%;
    }
`

export const ChartContainer = styled.div`
    box-sizing: border-box;
    padding: 50px;
    background-color: var(--transparent-blue);
    width: 1500px;
    height: 60vh;
    position: absolute;
    bottom: 5%;
    right: 5%;
    box-shadow: 2px 2px 10px var(--dark-blue);
    border-radius: 15px;

    @media (max-width: 500px) {
        width: 90%;
        right: 0%;
    }

    @media (min-width: 501px) and (max-width: 1000px) {
        width: 92%;
        right: 1%;
        height: 45%;
    }
`

export const FormContainer = styled.form`
    width: 40%;
    height: 50%;
    background-color: var(--transparent-light);
    position: absolute;
    left: 35%;
    top: 20%;
    transform: translate(-70%, -30%);
    box-shadow: 2px 2px 10px var(--dark-blue);
    border-radius: 15px;
    display: flex;

    @media (max-width: 500px) {
        width: 90%;
        left: 0%;
        top: 5%;
        transform: translate(0%, 0%);
    }

    @media (min-width: 501px) and (max-width: 1000px) {
        width: 90%;
        left: 1%;
        top: 5%;
        transform: translate(0%, 0%);
    }
`

export const DataContainer = styled.div`
    flex: ${props => props.type === "text" ? 1 : 0.8};
    display: flex;
    flex-direction: column;
    padding: ${props => props.type === "text" ?
        "40px 60px 0 30px" : 0
    };
    box-shadow: 2px 2px 10px var(--dark-blue);
    border-radius:  ${props => props.type === "text" ?
        "15px 0 0 15px" : "0 15px 15px 0"
    };

    @media (max-width: 500px) {
        width: 100px;
        padding: ${props => props.type === "text" ?
            "20px 20px 0 20px" : 0
        };
    }

    @media (min-width: 501px) and (max-width: 1000px) {

    }
`

export const CoordinatesContainer = styled.div`
    width: 100%;
    display: flex;
    margin: 20px 0;

    @media (max-width: 500px) {
        margin: 10px 0;
    }

    @media (min-width: 501px) and (max-width: 1000px) {

    }
`

export const CoordinatesTextField = styled(TextField)`
    width: 120px;
    height: 80px;
    margin-right: 50px;

    @media (max-width: 500px) {
        margin: 10px;
        font-size: 16px;
        width: 45%;
        height: 60px;
        margin: 0;
    }

    @media (min-width: 501px) and (max-width: 1000px) {

    }
`

export const DatesContainer = styled.div`
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: space-between;

    @media (max-width: 500px) {

    }

    @media (min-width: 501px) and (max-width: 1000px) {

    }
`

export const Date = styled.div`
    width: max-content;

    @media (max-width: 500px) {

    }

    @media (min-width: 501px) and (max-width: 1000px) {

    }
`

export const Info = styled.p`
    font-size: 18px;
    padding: 20% 20px;
    color: var(--dark-blue);

    @media (max-width: 500px) {
        font-size: 14px;
        padding: 5% 15px;
    }

    @media (min-width: 501px) and (max-width: 1000px) {

    }
`