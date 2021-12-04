import styled from 'styled-components';


export const TextResult = styled.p`

color: black
font-size: 50px;
font-weight: bold;
margin-top:20px;

font-family:${({theme:{fonts}})=>fonts.fontFamily};

padding: 20px;

`;


export const Back = styled.button`

padding: 10px 30px;
color: white;
background-color: #080139;
border: none;
outline: none;
cursor: pointer;

margin-top: 20px;

font-size: 20px;
font-weight: bold;

border-radius: 10px;

transition: all 0.3s linear;

&:hover {
    background-color: #cdcdcd;
    color: #080139;
    padding: 10px 50px;
    }

`;

export const Wrapper = styled.div`
width: 100vw;
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

`;