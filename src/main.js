import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


import { getImagesByQuery } from "./js/pixabay-api";
import { createGallery, hideLoadMoreButton, showLoadMoreButton } from "./js/render-functions";
import { showLoader } from "./js/render-functions";
import { hideLoader } from "./js/render-functions";
import { clearGallery } from "./js/render-functions";
import { createMoreGallery } from "./js/render-functions";


const form = document.querySelector('.form')
const searchText = document.querySelector('[name="search-text"]')
const buttonLoadMore = document.querySelector('.button-js')
const per_page = 15;

let totalHitsValue = ''
let page = 1;
let searchTextValue = '';
function smoothScroll() {
  const elements = document.querySelectorAll('.elem-js');
  const lastElement = elements[elements.length - 1];
  if (!lastElement) return;
  const height = lastElement.getBoundingClientRect().height;
  window.scrollBy({
    top: height,
    behavior: 'smooth'
  });
}

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    searchTextValue = searchText.value.trim()
    
    console.log(searchText.value)
 if(searchText.value.trim() === ''){
          iziToast.error({
                message: 'enter text, please!',
            })  
          return
        }
    clearGallery()
    showLoader()
    page = 1;
    async function getImagesFunction(searchTextValue, page) {
      try {
        const {hits, totalHits} = await getImagesByQuery(searchTextValue, page)
        const totalPages = Math.ceil(totalHits / per_page)
        if (hits.length === 0){
            iziToast.error({
                message: 'Sorry, there are no images matching your search query. Please try again!',
            }) 
            hideLoadMoreButton()
            return
        } else if (page >= totalPages){
          iziToast.show({
          message: 'Were sorry, but youve reached the end of search results.'
          })
          hideLoadMoreButton()
          createGallery(hits)
          return
          }
        createGallery(hits)
        showLoadMoreButton()
        }
      catch(err){
      iziToast.error({
        message: 'Please try again later'
      })
      console.error(err)
    }
      finally{
      hideLoader()
    }
}
getImagesFunction(searchTextValue, page);

});

  
buttonLoadMore.addEventListener('click', async ()=>{

  hideLoadMoreButton()
  showLoader()
  try{
    const {hits, totalHits} = await getImagesByQuery(searchTextValue, ++page)
    const totalPages = Math.ceil(totalHits / per_page) 
    if (page >= totalPages){
    iziToast.show({
      message: 'Were sorry, but youve reached the end of search results.'
    })
    hideLoadMoreButton()
    createMoreGallery(hits)
    smoothScroll()
    return
  }
  createMoreGallery(hits)
    smoothScroll()
    showLoadMoreButton()
  }
  
  catch (error){
  console.error(error)
}
finally{
hideLoader()

}
})