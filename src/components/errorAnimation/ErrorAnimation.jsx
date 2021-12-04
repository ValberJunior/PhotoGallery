import { useState } from 'react';
import Lottie from 'react-lottie';
import './styles.js';
import { Back, Wrapper } from './styles.js';
import animationData from '../../assets/ErrorAnimation.json';



export default function ErrorAnimation (props) {

    const [animation] = useState({isStopped: false, isPaused: false});

    
    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
    }

   return(

            <Wrapper>
                
                <Lottie 
                 options={defaultOptions}
                 height={450}
                 width={450}
                isStopped={animation.isStopped}
                isPaused={animation.isPaused}/>
              
                
                <Back>Voltar</Back>
            </Wrapper>
   )
    
}
