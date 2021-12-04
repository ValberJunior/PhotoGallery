import React, { useState } from 'react'
import { Modal } from '../../components';

import { Avatar, Close, ButtonClose, Details, ImageElement, ImageSelected, Title } from './styles'
import NotImage from '../../assets/unnamed.gif';

import { Button, Icon } from '@material-ui/core';
import CloseIcon from '@mui/icons-material/Close';

import 'react-lazy-load-image-component/src/effects/blur.css';


export default function ImageCard({image}) {

    const [ open, setOpen ] = useState(false);

    //Modal
    const onHideModal = ()=>{ setOpen(false); };  

    const onShowModal = ()=>{ setOpen(true);  };

    const renderModal = (image)=>{
      return ( <Modal open={open} onClose={onHideModal}> 


             <ImageSelected src={image.src.large2x} alt="Selected Item"/>
            
            <Details>
                <Avatar style={{background: image.avg_color}} >{image.photographer.split(" ").map(string=>string[0]).join("").toUpperCase()}</Avatar>
                <Title>Photographer<br/>{image.photographer}</Title>
                <Button 
                variant="contained"
                color="primary"
                target="_blank"
                rel="noreferrer" 
                startIcon={<Icon>send</Icon>}
                href={image.url}
                size='large'>
                     Visit Pexels
                </Button>
            </Details>

            <Close>
                <ButtonClose onClick={onHideModal}>
                    <CloseIcon/>
                </ButtonClose>
            </Close>

       </Modal>
      )
    }

    return (
        <>
            <span  onClick={onShowModal}>
            <ImageElement 
            src={image.src.medium?image.src.medium:
                NotImage} alt='Images Results'
                effect="blur"
            />
            </span>

            {renderModal(image)}
           
        </>
    )
}
