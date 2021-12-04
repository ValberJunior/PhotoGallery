import styled from 'styled-components';

export const Overlay = styled.div`
position: fixed;
top: 0;
right: 0;
left: 0;
bottom: 0;

display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 100%;


background: rgba(78, 89, 131, 0.5);
backdrop-filter: blur(5px);

z-index: 9999;


`;
Overlay.displayName='Overlay';

export const Dialog = styled.div`

display: flex;
justify-content: space-between;
max-height: calc(100% - 144px);
width: 80vw;
overflow: hidden;
padding: 24px;
background-color: #FFF;

box-shadow: 0px 0px 32px rgba(78, 89, 131, 0.2);
border-radius: 8px;

box-sizing: border-box;

@media(max-width: 767px) {
    width: 95vw;
    flex-direction: column-reverse;
    justify-content: space-evenly;
    align-items: center;
 }
 
`;
Dialog.displayName='Dialog';
