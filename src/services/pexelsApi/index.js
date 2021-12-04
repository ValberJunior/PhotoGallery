import axios from 'axios';

export const getPhotos = async(searchTerm = 'nature') => await 
axios.get(`https://api.pexels.com/v1/search?query=${searchTerm}`, {
    headers: {
        Authorization: '563492ad6f91700001000001e33216412ede41b5a6be70607736f9ab'
    }
});

export const getNextPage = async(nextPage)=> await
axios.get(nextPage, {
    headers: {
        Authorization: '563492ad6f91700001000001e33216412ede41b5a6be70607736f9ab'
    }
});

export const getPrevPage = async(prevPage)=> await
axios.get(prevPage, {
    headers: {
        Authorization: '563492ad6f91700001000001e33216412ede41b5a6be70607736f9ab'
    }
});