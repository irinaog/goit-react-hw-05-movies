const API_KEY = 'bedaa935184fdccacd2a5dbb188de139';
const BASE_URL = 'https://api.themoviedb.org/3';
function fetchMovie() {
    
    return fetch(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`)
        .then(r => {
            if (r.ok) {
                return r.json();
            }
            return new Error('ooops');
        });
};

function fetchMoviedetails(movieId) {
    return fetch(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`)
        .then(r => {
            if (r.ok) {
                return r.json();
            }
            return new Error('ooops');
        });
};

function fetchMovieSearch(movieName) {
    return fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${movieName}`)
        .then(r => {
            if (r.ok) {
                return r.json();
            }
            return new Error('ooops');
        });
};

function fetchCast(movieId) {
    return fetch(`${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`)
        .then(r => {
            if (r.ok) {
                return r.json();
            }
            return new Error('ooops');
        });
};

function fetchReviews(movieId) {
   return fetch(`${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}`)
        .then(r => {
            if (r.ok) {
                return r.json();
            }
            return new Error('ooops');
        });
}

const api = { fetchMovie, fetchMoviedetails, fetchMovieSearch, fetchCast, fetchReviews };
export default api;

// export const getTrendingMovies = (movies) => {
//     fetchMovie().then(movie => {
//         movies = movie.results;
//         return
//     })
// }

