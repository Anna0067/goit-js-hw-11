document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('search-form');
  const gallery = document.querySelector('.gallery');
  const loadMoreBtn = document.querySelector('.load-more');
  let page = 1;
  const apiKey = '41180039-5593941cf655dc817cda9c37b';
  const perPage = 40;
  let hasSearched = false;

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const searchQuery = form.searchQuery.value.trim();

    if (searchQuery !== '') {
      page = 1;
      hasSearched = true;
      searchImages(searchQuery);
    }
  });

  loadMoreBtn.addEventListener('click', function () {
    const searchQuery = form.searchQuery.value.trim();
    page++;
    searchImages(searchQuery);
  });

  async function searchImages(query) {
    try {
      const response = await fetch(
        `https://pixabay.com/api/?key=${apiKey}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`
      );

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();

      if (data.hits.length > 0) {
        if (page === 1) {
          gallery.innerHTML = '';
        }

        data.hits.forEach(image => {
          const card = createImageCard(image);
          gallery.appendChild(card);
        });

        if (page * perPage < data.totalHits) {
          loadMoreBtn.style.display = 'block';
        } else {
          loadMoreBtn.style.display = 'none';
          showNotification(
            `We're sorry, but you've reached the end of search results.`
          );
        }

        const lightbox = new SimpleLightbox('.gallery a');

        showNotification(`Hooray! We found ${data.totalHits} images.`);
      } else {
        showNotification(
          'Sorry, there are no images matching your search query. Please try again.'
        );
      }
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  }

  function createImageCard(image) {
    const card = document.createElement('div');
    card.classList.add('photo-card');

    const a = document.createElement('a');
    a.href = image.largeImageURL;

    const img = document.createElement('img');
    img.src = image.webformatURL;
    img.alt = image.tags;
    img.loading = 'lazy';

    const info = document.createElement('div');
    info.classList.add('info');

    const likes = document.createElement('p');
    likes.classList.add('info-item');
    likes.innerHTML = `<b>Likes:</b> ${image.likes}`;

    const views = document.createElement('p');
    views.classList.add('info-item');
    views.innerHTML = `<b>Views:</b> ${image.views}`;

    const comments = document.createElement('p');
    comments.classList.add('info-item');
    comments.innerHTML = `<b>Comments:</b> ${image.comments}`;

    const downloads = document.createElement('p');
    downloads.classList.add('info-item');
    downloads.innerHTML = `<b>Downloads:</b> ${image.downloads}`;

    info.appendChild(likes);
    info.appendChild(views);
    info.appendChild(comments);
    info.appendChild(downloads);

    a.appendChild(img);
    card.appendChild(a);
    card.appendChild(info);

    return card;
  }

  function showNotification(message) {
    Notiflix.Notify.Info(message);
  }

  loadMoreBtn.style.display = 'none';

  form.addEventListener('change', function () {
    if (hasSearched) {
      loadMoreBtn.style.display = 'block';
    }
  });
});
