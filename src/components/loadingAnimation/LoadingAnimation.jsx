import { useState } from 'react';
import Lottie from 'react-lottie';
import './styles.js';
import animationData from '../../assets/loading.json';



export default function LoadingAnimation (props) {

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

            <>
                <Lottie 
                 options={defaultOptions}
                 height={400}
                 width={400}
                isStopped={animation.isStopped}
                isPaused={animation.isPaused}/>
            </>
   )
    
}
