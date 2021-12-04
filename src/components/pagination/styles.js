import styled from 'styled-components';

export const PaginationSection = styled.section`
width: 100vw;
padding: 30px;

font-family:${({theme:{fonts}})=>fonts.fontFamily};

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;


padding-bottom: 100px;

`;

export const ButtonGroup = styled.span`

width: 300px;
display: flex;
justify-content: center;

margin-top: 30px;
`;

export const Button = styled.button`

width: 180px;

padding: 15px;

margin: 15px;

background-color: white;
color: ${({theme:{colors}})=>colors.color1};

border: 2px solid ${({theme:{colors}})=>colors.color1} ;
outline: none;

cursor: pointer;

border-radius: 10px;

transition: all 0.3 linear;

display:flex;
align-items: center;
justify-content: space-around;

&:hover{
    background-color: ${({theme:{colors}})=>colors.color1};
    color: white;
}

`;

export const Text = styled.p`

color: ${({theme:{colors}})=>colors.color2};
font-size: 18px;

`;