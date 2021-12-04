import React , {useState, createContext} from 'react';

export const PhotoContext = createContext();

export function PhotoProvider(props){
    const [photos, setPhotos] = useState([]);
    const [pages,setPages] = useState(0);
    const [data,setData] = useState({});

    

    return(<PhotoContext.Provider
            value={{photos, setPhotos, pages, setPages, data, setData}}>
                {props.children}
            </PhotoContext.Provider>)
}