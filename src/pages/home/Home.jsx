import React, { useEffect, useState , useContext } from 'react'
import { Wrapper , SearchSection, Banner } from './styles';
import { Navbar, ImagesList , Footer, Pagination, LoadingAnimation  } from '../../components';

//Material UI
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import { makeStyles } from "@material-ui/core/styles";

//Context API
import { PhotoContext } from '../../context';

//PEXELS API
import { getPhotos } from '../../services';



//Theme search Material UI
const useStyles = makeStyles((theme) => ({
    root: {
      padding: "2px 4px",
      display: "flex",
      alignItems: "center",
      width: 330
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1
    },
    iconButton: {
      padding: 10,
    },
    divider: {
      height: 28,
      margin: 4
    }
  }));


export default function Home(props) {

    const { setPhotos, setPages , setData} = useContext(PhotoContext);

    const [searchTerm, setSearchTerm] = useState('');

    const [received, setReceived]=useState(false)
 

    const classes = useStyles();


    useEffect(()=>{
      const arg = localStorage.getItem('PERSIST_STATE');
      loadImages(arg);
  },[searchTerm])

   
    const loadImages = async (searchTerm)=>{
        const res = await getPhotos(searchTerm);

        setPhotos(res.data.photos);
        setPages(Math.ceil(res.data.total_results/res.data.per_page));
        setData(res.data);
        setReceived(true);
          }

    const handleSearch = ()=>{
      localStorage.setItem('PERSIST_STATE',searchTerm);
    }

    const handleInput = (event)=>{
        setSearchTerm(event.target.value);
        event.stopPropagation();
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
          setSearchTerm(searchTerm);
        }
      };


    return (
        <Wrapper>
         <header>
            <Navbar/>
         </header>

         <main>
             <Banner>
              
                <SearchSection>
                  <Paper component="form" className={classes.root}>
                          <InputBase
                              placeholder="Search Image"
                              inputProps={{ "aria-label": "Search Image" }}
                              className={classes.input}
                              onChange={handleInput}
                              onKeyPress={handleKeyPress}
                              value={searchTerm}
                              id='search'
                          />
                          <IconButton
                              type="submit"
                              aria-label="search"
                              className={classes.iconButton}
                              onClick={handleSearch}
                          >
                              <SearchIcon />
                          </IconButton>
                  </Paper>
                </SearchSection>
                  
              </Banner>

             {received?<>     
              <ImagesList/>

              <Pagination/>
             </>:<LoadingAnimation/>}

          
         </main>
         
        <Footer/>
        </Wrapper>
    )
}
