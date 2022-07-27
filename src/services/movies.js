const API_KEY = 'bedaa935184fdccacd2a5dbb188de139'
function fetchMovie() {
    
    return fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`)
        .then(r => {
            if (r.ok) {
                return r.json();
            }
            return new Error('ooops');
        });
};

function fetchMoviedetails(movieId) {
    return fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`)
        .then(r => {
            if (r.ok) {
                return r.json();
            }
            return new Error('ooops');
        });
}

const api = { fetchMovie, fetchMoviedetails };
export default api;

// export const getTrendingMovies = (movies) => {
//     fetchMovie().then(movie => {
//         movies = movie.results;
//         return
//     })
// }

