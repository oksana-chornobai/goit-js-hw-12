import{a as M,S as b,i}from"./assets/vendor-BK_rxH-O.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function r(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(t){if(t.ep)return;t.ep=!0;const s=r(t);fetch(t.href,s)}})();const x=M.create({baseURL:"https://pixabay.com/api/",params:{key:"51947896-8b6dd47fcc424a89819094ddf",image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:15}});async function w(e,a){try{const r=await x.get("",{params:{q:e,page:a}});return{hits:r.data.hits,totalHits:r.data.totalHits}}catch(r){console.error("помилка!",r)}}let l;function h(e){const a=document.querySelector(".gallery"),r=e.map(({webformatURL:o,largeImageURL:t,tags:s,likes:n,views:d,downloads:m,comments:p})=>`
    <a href="${t}" class="gallery_item elem-js">
      <img src="${o}" alt="${s}" loading="lazy" />

<ul class="stats-container">
  <li class="stat-item">
    <span>Likes</span>
    <span>${n}</span>
  </li>
  <li class="stat-item">
    <span>Views</span>
    <span>${d}</span>
  </li>
  <li class="stat-item">
    <span>Comments</span>
    <span>${p}</span>
  </li>
  <li class="stat-item">
    <span>Downloads</span>
    <span>${m}</span>
  </li>
</ul>
    </a>
  `).join("");a.innerHTML=r,l?l.refresh():l=new b(".gallery a")}function j(){const e=document.querySelector(".gallery");e.innerHTML=""}function v(){const e=document.querySelector(".loader");e?e.classList.remove("is-not-active"):console.warn("Loader element not found")}function S(){const e=document.querySelector(".loader");e?e.classList.add("is-not-active"):console.warn("Loader element not found in hideLoader")}function q(){document.querySelector(".button-js").classList.remove("is-not-active")}function c(){document.querySelector(".button-js").classList.add("is-not-active")}function g(e){const a=document.querySelector(".gallery"),r=e.map(({webformatURL:o,largeImageURL:t,tags:s,likes:n,views:d,downloads:m,comments:p})=>`
    <a href="${t}" class="gallery_item">
      <img src="${o}" alt="${s}" loading="lazy" />

<ul class="stats-container">
  <li class="stat-item">
    <span>Likes</span>
    <span>${n}</span>
  </li>
  <li class="stat-item">
    <span>Views</span>
    <span>${d}</span>
  </li>
  <li class="stat-item">
    <span>Comments</span>
    <span>${p}</span>
  </li>
  <li class="stat-item">
    <span>Downloads</span>
    <span>${m}</span>
  </li>
</ul>
    </a>
  `).join("");a.insertAdjacentHTML("beforeend",r),l?l.refresh():l=new b(".gallery a")}const P=document.querySelector(".form"),f=document.querySelector('[name="search-text"]'),H=document.querySelector(".button-js"),$=15;let u=1,y="";function L(){const e=document.querySelectorAll(".elem-js"),a=e[e.length-1];if(!a)return;const r=a.getBoundingClientRect().height;window.scrollBy({top:r,behavior:"smooth"})}P.addEventListener("submit",e=>{if(e.preventDefault(),y=f.value.trim(),console.log(f.value),f.value.trim()===""){i.error({message:"enter text, please!"});return}j(),v(),u=1;async function a(r,o){try{const{hits:t,totalHits:s}=await w(r,o),n=Math.ceil(s/$);if(t.length===0){i.error({message:"Sorry, there are no images matching your search query. Please try again!"}),c();return}else if(o>=n){i.show({message:"Were sorry, but youve reached the end of search results."}),c(),h(t);return}h(t),q()}catch(t){i.error({message:"Please try again later"}),console.error(t)}finally{S()}}a(y,u)});H.addEventListener("click",async()=>{c(),v();try{const{hits:e,totalHits:a}=await w(y,++u),r=Math.ceil(a/$);if(u>=r){i.show({message:"Were sorry, but youve reached the end of search results."}),c(),g(e),L();return}g(e),L(),q()}catch(e){console.error(e)}finally{S()}});
//# sourceMappingURL=index.js.map
