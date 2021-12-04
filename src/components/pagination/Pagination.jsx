import { useContext, useEffect, useState } from 'react';

import { Button, ButtonGroup, PaginationSection, Text } from './styles';

import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';



//API
import { getPrevPage , getNextPage } from '../../services';

//Context API
import { PhotoContext } from '../../context';



export default function PaginationRounded(props) {

  const { setPhotos, pages, data, setData} = useContext(PhotoContext);
  const [ nextPage, setNextPage] = useState('');
  const [ prevPage, setPrevPage] = useState('');

  useEffect(()=>{
    setNextPage(data.next_page);
  },[data])

  //Request to API

  const next = async(arg)=>{
    const res = await getNextPage(arg);
    setNextPage(res.data.next_page);
    setPrevPage(res.data.prev_page)
    console.log(res.data);
    setPhotos(res.data.photos)
    setData(res.data)
  }

  const prev = async(arg)=>{
    const res = await getPrevPage(arg);
    setPrevPage(res.data.prev_page);
    console.log(res.data);
    setPhotos(res.data.photos)
    setData(res.data)
  }



      //Pagination

      // //Next
      const next_Page = ()=>{ next(nextPage); window.scrollTo(0,500)};
      
      // //Prev
       const prev_Page = ()=>{prev(prevPage); window.scrollTo(0,500)};



  return (
    <PaginationSection>
          <Text>
            Page {data.page} of {pages}
          </Text>
          <ButtonGroup>
            {data.page===1?null:<Button onClick={prev_Page} disabled={data.page===1?true:false}><ArrowBackIcon/> PREV</Button>}
            {data.page===pages?null:<Button onClick={next_Page} disabled={data.page===pages?true:false}> NEXT <ArrowForwardIcon/> </Button>}
          </ButtonGroup>

    </PaginationSection>
  );
}


