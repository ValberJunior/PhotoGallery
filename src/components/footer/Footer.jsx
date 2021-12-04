import React from 'react'
import { FooterSection, DetailsFooter, Title, Description, Logo, Copyright, Ico } from './styles'
import JsImg from '../../assets/icons/javascript.png';
import ReactImg  from '../../assets/icons/react.png';
import PexelsImg  from '../../assets/icons/pexels.png';
import Github from '../../assets/icons/github.png';
import Linkedin from '../../assets/icons/linkedin.png';
import Gmail from '../../assets/icons/gmail.png';
import Cv from '../../assets/icons/cv.png';


import CopyrightIcon from '@material-ui/icons/Copyright';

export default function Footer() {
    return (
        <FooterSection>
            <DetailsFooter>
            <div>
               <Title>
                 Applied Technologies
                </Title>

               <Ico
                src={JsImg}
                alt='Javascript logo'/>

               <Ico
                src={ReactImg}
                alt='React logo'/>

               <Description>
                 The project was developed with React Hooks, ContextApi, Axios for API Consumption, Styled Components for content styling with support for display grid and flexbox for responsiveness, in addition to the use of Material UI
               <br/>The challenge was to consume an Api Rest and create a Photo Album with pagination and Lazy effect Loading
               </Description>

            </div>

            <div>
                <Title>
                  API used in the project
                </Title>

                 <Logo>
                    PEXELS
                    <Ico 
                      src={PexelsImg}
                      alt='Pexels logo'/>
                 </Logo>

                <Description>
                  All rights to images reserved - Pexels
                </Description>
            </div>

            <div>
              <Title>
                Contact me
              </Title>
              <a href='https://www.linkedin.com/in/valber-junior-238217b4/' target="_blank"
              rel="noreferrer" >
                <Ico src={Linkedin} alt='linkedin logo'/>
              </a>

              <a href='https://github.com/ValberJunior' target="_blank"
              rel="noreferrer" >
                <Ico src={Github} alt='Github logo'/>
              </a>

              <a href='mailto:valberjr1992@gmail.com' target="_blank"
              rel="noreferrer" >
                <Ico src={Gmail} alt='Gmail logo'/>
              </a>

              <a href='https://drive.google.com/file/d/1uFJBsH6yzghj4AII7wcB9U0AFaq49RtG/view?usp=sharing' target="_blank"
              rel="noreferrer" >
                <Ico src={Cv} alt='Curriculum logo'/>
              </a>
            </div>
          </DetailsFooter>

          <Copyright>
            <CopyrightIcon/> 2021 - Developed by Valber Junior
          </Copyright>
        </FooterSection>
    )
}
