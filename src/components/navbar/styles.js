import styled from "styled-components";

export const NavbarSection = styled.nav`
width: 100vw;
height: 60px;
padding: 20px;

color: #fff;
background: #0F0F10;

display: flex;
align-items: center;
justify-content: flex-start;

position: fixed;
top: 0;
z-index: 1;


`
;

export const Logo = styled.img`
width: 60px;
padding: 10px;
cursor: pointer;

`; 

export const TitleLogo = styled.h1`

font-family:${({theme:{fonts}})=>fonts.title};
color: white;
font-size: 30px;

`;