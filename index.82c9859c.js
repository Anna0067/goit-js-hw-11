document.addEventListener("DOMContentLoaded",(function(){const e=document.getElementById("search-form"),t=document.querySelector(".gallery"),n=document.querySelector(".load-more");let o=1;let a=!1;async function s(e){try{const a=await fetch(`https://pixabay.com/api/?key=41180039-5593941cf655dc817cda9c37b&q=${e}&image_type=photo&orientation=horizontal&safesearch=true&page=${o}&per_page=40`);if(!a.ok)throw new Error("Network response was not ok");const s=await a.json();s.hits.length>0?(1===o&&(t.innerHTML=""),s.hits.forEach((e=>{const n=function(e){const t=document.createElement("div");t.classList.add("photo-card");const n=document.createElement("img");n.src=e.webformatURL,n.alt=e.tags,n.loading="lazy",n.setAttribute("data-src",e.largeImageURL),n.classList.add("lg-zoom-thumbnail");const o=document.createElement("div");o.classList.add("info");const a=document.createElement("p");a.classList.add("info-item"),a.innerHTML=`<b>Likes:</b> ${e.likes}`;const s=document.createElement("p");s.classList.add("info-item"),s.innerHTML=`<b>Views:</b> ${e.views}`;const i=document.createElement("p");i.classList.add("info-item"),i.innerHTML=`<b>Comments:</b> ${e.comments}`;const c=document.createElement("p");return c.classList.add("info-item"),c.innerHTML=`<b>Downloads:</b> ${e.downloads}`,o.appendChild(a),o.appendChild(s),o.appendChild(i),o.appendChild(c),t.appendChild(n),t.appendChild(o),t}(e);t.appendChild(n)})),40*o<s.totalHits?n.style.display="block":(n.style.display="none",i("We're sorry, but you've reached the end of search results.")),lightGallery(t,{selector:".lg-zoom-thumbnail"}),i(`Hooray! We found ${s.totalHits} images.`)):i("Sorry, there are no images matching your search query. Please try again.")}catch(e){console.error("Error fetching images:",e)}}function i(e){Notiflix.Notify.Info(e)}e.addEventListener("submit",(function(t){t.preventDefault();const n=e.searchQuery.value.trim();""!==n&&(o=1,a=!0,s(n))})),n.addEventListener("click",(function(){const t=e.searchQuery.value.trim();o++,s(t)})),n.style.display="none",e.addEventListener("change",(function(){a&&(n.style.display="block")}))}));
//# sourceMappingURL=index.82c9859c.js.map