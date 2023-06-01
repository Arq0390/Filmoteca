const apiKey = '66bb0183b61d2b7970e76d40cce7a284';
const apiUrl = 'https://api.themoviedb.org/3';
const baseImageUrl = 'https://image.tmdb.org/t/p/';

const moviesList = document.getElementById('movies-list');

const fetchMovies = async () => {
  try {
    const response = await fetch(
      `${apiUrl}/trending/movie/week?api_key=${apiKey}&language=en-US&page=1`
    );
    const data = await response.json();

    if (data.results && data.results.length > 0) {
      data.results.slice(0, 20).forEach(movie => {
        const {
          title,
          overview,
          release_date: releaseDate,
          poster_path: posterPath,
        } = movie;

        const movieElement = document.createElement('div');
        movieElement.classList.add('movie');

        // Agregamos el título de la película
        const titleElement = document.createElement('h2');
        titleElement.classList.add('movie__title');
        titleElement.textContent = title;
        movieElement.appendChild(titleElement);

        // Agregamos el póster de la película
        const posterElement = document.createElement('img');
        posterElement.classList.add('movie__poster');
        posterElement.src = `${baseImageUrl}w500${posterPath}`;
        movieElement.appendChild(posterElement);

        // Agregamos la descripción de la película
        const overviewElement = document.createElement('p');
        overviewElement.textContent = overview;
        movieElement.appendChild(overviewElement);

        // Agregamos la fecha de lanzamiento de la película
        const releaseElement = document.createElement('p');
        releaseElement.textContent = `Lanzamiento: ${releaseDate}`;
        movieElement.appendChild(releaseElement);

        // Agregamos la película a la lista
        moviesList.appendChild(movieElement);
      });
    }
  } catch (error) {
    console.log('Ha ocurrido un error:', error);
  }
};

fetchMovies();
