import styled from "styled-components";


export const GridImages = styled.section`

width: 100vw;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
justify-content: center;
align-items: center;

padding:50px 0px;

@media(max-width: 767px) {
    grid-template-columns: 1fr 1fr;
}

@media(max-width: 450px) {
    grid-template-columns: 1fr;
}

`;