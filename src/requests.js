export const API_KEY = ''; // register and get your API KEY from the movie database for security issue I removed my API KEY here

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en=es`,
    fetchNetflixOrginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRateMovies: `/movie/top_rated?api_key=${API_KEY}&language=en=es`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};

export default requests;