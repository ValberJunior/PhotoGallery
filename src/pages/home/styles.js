import styled from "styled-components";
import BannerImg from '../../assets/banner.gif';



export const Wrapper = styled.div`

width: 100vw;
height: 100vh;

background-color: #fff;

text-align: center;

`;


export const Banner = styled.section`
width: 100vw;
height: 500px;

background-image: url(${BannerImg});
background-size: cover;
background-attachment: fixed;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;


margin-top:60px;

position: relative;

@media(max-width: 767px) {
    background-size: auto;
    background-attachment: fixed;
 }


padding: 20px;

`;


export const SearchSection = styled.section`
width: 100%;
display: flex;
justify-content: center;
align-items: center;

z-idex: 0;
position: relative;
`;
