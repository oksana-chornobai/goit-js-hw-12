import axios, { Axios } from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://pixabay.com/api/',
  params: {
    key: '51947896-8b6dd47fcc424a89819094ddf',
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true'
  }
});

export function getImagesByQuery(query){
    
    return axiosInstance.get('', {
        params: {q: query}
    }).then(response => response.data.hits)
}