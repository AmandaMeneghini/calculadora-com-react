import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #eee;

    display: flex;
    align-items: center;
    justify-content: center;
`

export const Content = styled.div`
    background-color: #2ecc71 ;    
    width: 300px;
    min-height: fit-content;
    border: 10px solid #2ecc71 ;
    border-radius: 10px;
    box-shadow: rgba(99, 99, 99, 0.5) 0px 5px 8px 0px;
`
export const Row = styled.div`
    display: flex;
    flex-directions: row;
    justify-content: space-between;
    align-items: center;
`


