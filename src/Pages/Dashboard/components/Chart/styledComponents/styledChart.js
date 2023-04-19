import styled from "styled-components";


export const ChartContainer = styled.div`
    box-sizing: border-box;
    padding: 20px 30px;
    background-color: var(--transparent-blue);
    width: max-content;
    height: max-content;
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
    }
`

export const ChartInfo = styled.div`
    margin-bottom: 20px;
`

export const ChartTitle = styled.h3`
    margin-bottom: 5px;
`

export const ChartParagraph = styled.p`
    margin-left: 10px;
`