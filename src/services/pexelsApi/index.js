import axios from 'axios';

export const getPhotos = async(searchTerm = 'nature') => await 
axios.get(`https://api.pexels.com/v1/search?query=${searchTerm}`, {
    headers: {
        Authorization: "563492ad6f91700001000001f3926b2548db41d3a3baf65787f4977e"
    }
});

export const getNextPage = async(nextPage)=> await
axios.get(nextPage, {
    headers: {
        Authorization: "563492ad6f91700001000001f3926b2548db41d3a3baf65787f4977e"
    }
});

export const getPrevPage = async(prevPage)=> await
axios.get(prevPage, {
    headers: {
        Authorization: "563492ad6f91700001000001f3926b2548db41d3a3baf65787f4977e"
    }
});