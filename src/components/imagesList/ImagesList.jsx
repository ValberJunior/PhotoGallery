import React, { useContext } from 'react'
import ImageCard from '../imageCard/ImageCard'
import { GridImages } from './styles'

//Context API
import { PhotoContext } from '../../context';


export default function ImagesList(props) {

    const { photos } = useContext(PhotoContext);

    return (
        <GridImages>
            {photos.map((item)=>{
            return <span key={item.id}><ImageCard image={item}/></span>})}
        </GridImages>
    )
}
