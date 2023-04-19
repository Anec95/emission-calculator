import styled from "styled-components";

export const DashboardMain = styled.main`
    width: 100vw;
    height: 100vh;
    position: relative;
    background-color: var(--blue-ice);
    box-sizing: border-box;

    @media (max-width: 500px) {
        overflow-x: hidden;
    }

    @media (min-width: 501px) and (max-width: 1000px) {
        overflow-x: hidden;
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