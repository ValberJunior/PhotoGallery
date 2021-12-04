import styled from "styled-components";

export const ImageElement = styled.img`

width: 96%;
height: 400px;
cursor: pointer;

borderwidth:0;
border-radius:5px;

margin: 5px 0px;

transitions: all 0.3 linear;

&:hover{
    opacity: 0.9;
}

@media(min-width: 1200px) {
        height: 600px;
    }
`;

export const ImageSelected = styled.img`

max-width: 80vw;
max-height: 70vh; 

min-width: 50vw;

@media(max-width: 767px) {
max-width: 80vw;
max-height: 35vh; 

min-width: 50vw;

order:1;
}

`;

export const Details = styled.section`

align-self: center;

font-family:${({theme:{fonts}})=>fonts.fontFamily};

display: flex;
align-items: center;
justify-content: center;
flex-direction: column;

padding: 20px;

text-align: center;

@media(max-width: 767px) {

    padding: 20px 15px;
 }

`;

export const Title = styled.h3`
font-size: 22px;
font-weight: bolder;
color: dark-gray;

margin-bottom: 40px;

@media(max-width: 767px) {

    font-size: 16px;
    margin-bottom: 20px;
 }
 
`;

export const Avatar = styled.div`

width: 70px;
height: 70px;

margin-bottom: 40px;

color: white;

display: flex;
align-items: center;
justify-content: center;

cursor: pointer;

border-radius: 50px;

transition: all 0.3 linear;

&:hover{
    opacity: 0.7;
}

@media(max-width: 767px) {
    width: 60px;
    height: 60px;
    margin-bottom: 15px;
 }

`;

export const Close = styled.span`

background: transparent;
display: flex;
justify-content: flex-start;
align-items: flex-start;

justify-self: flex-start;


@media(max-width: 767px) {
    justify-content: flex-end ;
    align-self: flex-end;
    padding-top: 15px;    
    order:1;
}


`;

export const ButtonClose = styled.button`
cursor: pointer;

outline: none;
border: none;
background: transparent;

border-radius: 50px;

padding: 10px;



@media(max-width: 767px) {
 padding: 7px;
}


`;