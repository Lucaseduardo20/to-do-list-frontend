import styled from "styled-components";
import '../../assets/fonts.css';

export const ToDoContainer = styled.main`
    font-family: Roboto;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
`

export const ToDoContent = styled.section`
    width: 400px;
    height: 600px;
    border: 3px solid red;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`

export const ToDoActions = styled.div`
    width: 80%;
    height: 50px;
    border: 1px solid blue;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const TaskList = styled.div`
    width: 95%;
    height: 70%;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ModalButtons = styled.div `
    width: 40%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    >button{
        width: 30%;
        height: 70%;
        cursor: pointer;
        border: none;
        transition: .5s;
        border-radius: 10px;    
        color: white;
    }
    button:hover {
        font-size: 15px;
        color: black;
    }
`