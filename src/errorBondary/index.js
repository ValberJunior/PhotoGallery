import { useEffect, useState } from 'react';
import { ErrorAnimation } from '../components/index.js';
import './styles.js';
import {Wrapper} from './styles.js';



export default function ErrorBondary (props) {

    const [error , setError] = useState(false);

    useEffect( ()=>{
        if(error){
        setError(true)}
    },[error]);
    
   

   return(
   <Wrapper>
        { error ?
                <ErrorAnimation/>
        :
        props.children }

    </Wrapper>
   )
    
}
