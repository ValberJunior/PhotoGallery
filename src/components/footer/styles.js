import styled from "styled-components";
import BackgroundDark from '../../assets/backgrounddark.jpg';



export const FooterSection = styled.footer`
width: 100%;
overflow: hidden;

background-image: url(${BackgroundDark});
background-size: cover;
background-attachment: fixed;

color: #cdcdcd;

font-family:${({theme:{fonts}})=>fonts.fontFamily};



display: flex;
flex-direction: column;
justify-content: center;
align-items: center;


padding: 50px;

margin-top: 60px;
padding-top: 70px;


`;

export const DetailsFooter = styled.div`

width: 100vw;

display: grid;
grid-template-columns: 1fr 1fr 1fr;
justify-content: center;
align-items: flex-start;

padding: 20px;
padding-top: 100px;

@media(max-width: 1200px) {
    grid-template-columns: 1fr 1fr 3fr;
}

@media(max-width: 840px) {
    grid-template-columns: 1fr;
}

`;

export const Copyright = styled.div`

width: 80vw;
border-top: 1px solid #cdcdcd;

margin-top: 200px;
padding: 25px;


font-size: 15px;


display: flex;
align-items: center;
justify-content: center;


`;

export const Ico = styled.img`

width: 50px;
height: 50px;

cursor: pointer;

margin:5px;

`;

export const Title = styled.h3`

color: #CfCFCf;
font-weight: bolder;
font-size: 16px;

padding-bottom: 20px;

`;

export const Description = styled.p`

font-size: 14px;
width: 400px;
overflow: hidden;
margin: 20px;

@media(max-width: 1200px) {
    width: 300px;
}

@media(max-width: 840px) {
    margin-bottom: 60px;
    padding: 20px;
    width: 100vw;
}

`;

export const Logo = styled.span`

display: flex;
align-items: center;
justify-content: center;

font-weight: bolder;

`;