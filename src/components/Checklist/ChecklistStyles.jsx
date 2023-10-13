import styled from "styled-components";
import '../../assets/fonts.css';

export const ChecklistContainer = styled.main`
    font-family: Roboto;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
`

export const ChecklistContent = styled.section`
    width: 400px;
    height: 600px;
    border: 3px solid red;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ChecklistActions = styled.div`
    width: 80%;
    height: 50px;
    border: 1px solid blue;
`