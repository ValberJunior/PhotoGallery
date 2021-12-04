import React, { useContext } from 'react'
import ImageCard from '../imageCard/ImageCard'
import { GridImages } from './styles'

//Context API
import { PhotoContext } from '../../context';
import { ErrorAnimation } from '..';


export default function ImagesList(props) {

    const { photos, pages } = useContext(PhotoContext);

    return (
        <>
        {pages>=1?<GridImages>
            {photos.map((item)=>{
            return <span key={item.id}><ImageCard image={item}/></span>})}
        </GridImages>:

        <ErrorAnimation/>}
        </>
    )
}
