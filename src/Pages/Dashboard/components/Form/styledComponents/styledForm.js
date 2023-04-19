import styled from "styled-components";
import { TextField } from "@mui/material";


export const FormContainer = styled.form`
    width: 40%;
    height: max-content;
    background-color: var(--transparent-light);
    position: absolute;
    left: 5%;
    top: 5%;
    box-shadow: 2px 2px 10px var(--dark-blue);
    border-radius: 15px;
    padding: 10px 20px;

    display: flex;
    flex-direction: column;

    @media (max-width: 500px) {
        width: 90%;
        left: 0%;
        top: 5%;
        transform: translate(0%, 0%);
        background-color: var(--light);
    }

    @media (min-width: 501px) and (max-width: 1000px) {
        width: 90%;
        left: 1%;
        top: 5%;
        transform: translate(0%, 0%);
        background-color: var(--light);
    }
`

export const DataContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 40px 30px;
    box-shadow: 2px 2px 10px var(--dark-blue);
    border-radius: 15px;

    @media (max-width: 500px) {
        padding: 10px;
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
        height: 50px;
        margin: 0;
        padding: 0;
    }

    @media (min-width: 501px) and (max-width: 1000px) {
        height: 50px;
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