document.addEventListener("DOMContentLoaded",(function(){var e=document.getElementById("search-form"),t=document.querySelector(".gallery"),n=document.querySelector(".load-more"),a=1;function c(e){fetch("https://pixabay.com/api/?key=".concat("41180039-5593941cf655dc817cda9c37b","&q=").concat(e,"&image_type=photo&orientation=horizontal&safesearch=true&page=").concat(a,"&per_page=").concat(40)).then((function(e){return e.json()})).then((function(e){e.hits.length>0?(1===a&&(t.innerHTML=""),e.hits.forEach((function(e){var n=function(e){var t=document.createElement("div");t.classList.add("photo-card");var n=document.createElement("img");n.src=e.webformatURL,n.alt=e.tags,n.loading="lazy";var a=document.createElement("div");a.classList.add("info");var c=document.createElement("p");c.classList.add("info-item"),c.innerHTML="<b>Likes:</b> ".concat(e.likes);var o=document.createElement("p");o.classList.add("info-item"),o.innerHTML="<b>Views:</b> ".concat(e.views);var r=document.createElement("p");r.classList.add("info-item"),r.innerHTML="<b>Comments:</b> ".concat(e.comments);var i=document.createElement("p");return i.classList.add("info-item"),i.innerHTML="<b>Downloads:</b> ".concat(e.downloads),a.appendChild(c),a.appendChild(o),a.appendChild(r),a.appendChild(i),t.appendChild(n),t.appendChild(a),t}(e);t.appendChild(n)})),40*a<e.totalHits?n.style.display="block":(n.style.display="none",o("We're sorry, but you've reached the end of search results."))):o("Sorry, there are no images matching your search query. Please try again.")})).catch((function(e){return console.error("Error fetching images:",e)}))}function o(e){Notiflix.Notify.Info(e)}e.addEventListener("submit",(function(t){t.preventDefault();var n=e.searchQuery.value.trim();""!==n&&(a=1,c(n))})),n.addEventListener("click",(function(){var t=e.searchQuery.value.trim();a++,c(t)}))}));
//# sourceMappingURL=index.d04607c4.js.map
