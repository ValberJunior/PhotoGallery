import { useState } from 'react';
import Lottie from 'react-lottie';
import './styles.js';
import { TextResult, Wrapper } from './styles.js';
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
                 height={500}
                 width={300}
                isStopped={animation.isStopped}
                isPaused={animation.isPaused}/>
              
                
                <TextResult>There is no result for your search, Please search again ... </TextResult>
            </Wrapper>
   )
    
}
