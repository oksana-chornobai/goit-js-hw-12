import{a as f,S as p,i}from"./assets/vendor-DTWVMNYS.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const y=f.create({baseURL:"https://pixabay.com/api/",params:{key:"51947896-8b6dd47fcc424a89819094ddf",image_type:"photo",orientation:"horizontal",safesearch:"true"}});function g(t){return y.get("",{params:{q:t}}).then(a=>a.data.hits)}let l;function h(t){const a=document.querySelector(".gallery"),o=t.map(({webformatURL:n,largeImageURL:e,tags:r,likes:s,views:u,downloads:d,comments:m})=>`
    <a href="${e}" class="gallery_item">
      <img src="${n}" alt="${r}" loading="lazy" />

<ul class="stats-container">
  <li class="stat-item">
    <span>Likes</span>
    <span>${s}</span>
  </li>
  <li class="stat-item">
    <span>Views</span>
    <span>${u}</span>
  </li>
  <li class="stat-item">
    <span>Comments</span>
    <span>${m}</span>
  </li>
  <li class="stat-item">
    <span>Downloads</span>
    <span>${d}</span>
  </li>
</ul>
    </a>
  `).join("");a.innerHTML=o,l?l.refresh():l=new p(".gallery a")}function L(){const t=document.querySelector(".gallery");t.innerHTML=""}function v(){const t=document.querySelector(".loader");t?t.classList.remove("is-not-active"):console.warn("Loader element not found")}function S(){const t=document.querySelector(".loader");t?t.classList.add("is-not-active"):console.warn("Loader element not found in hideLoader")}const b=document.querySelector(".form"),c=document.querySelector('[name="search-text"]');b.addEventListener("submit",t=>{if(t.preventDefault(),console.log(c.value),c.value.trim()===""){i.error({message:"enter text, please!"});return}L(),v(),g(c.value.trim()).then(a=>{a.length===0&&i.error({message:"Sorry, there are no images matching your search query. Please try again!"}),h(a)}).catch(a=>{i.error({message:"Please try again later"})}).finally(()=>{S()})});
//# sourceMappingURL=index.js.map
