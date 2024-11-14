import styled from "styled-components";

export const ButtonContainer = styled.button`
    padding: 20px;
    border: 2px solid #2ecc71 ;
    background: rgb(56,56,56);
    background: radial-gradient(circle, rgba(56,56,56,1) 0%, rgba(0,0,0,1) 100%);
    color: #2ecc71 ;
    font-size: 24px;
    font-weight: 700;
    flex: 1;
    border-radius: 10px;
    scale: 1;
    transition: all 0.5s ease-out;

    &: hover{
        opacity: 0.8;
        scale: 1.1;
        transition: easy in out;
    },
`