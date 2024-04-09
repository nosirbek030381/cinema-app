import { api_key } from '../constants';
import { apiRequest } from './axios';

const base_url = 'https://api.themoviedb.org/3';

const trendingMovie = `${base_url}/trending/movie/day?api_key=${api_key}`;
const upcomingMovie = `${base_url}/movie/upcoming?api_key=${api_key}`;
const top_rated = `${base_url}/movie/top_rated?api_key=${api_key}`;
const popularMovie = `${base_url}/movie/popular?api_key=${api_key}`;

const movieDetail = id => `${base_url}/movie/${id}?api_key=${api_key}`;
const movieCredits = id => `${base_url}/movie/${id}/credits?api_key=${api_key}`;
const similarMovie = id => `${base_url}/movie/${id}/similar?api_key=${api_key}`;

const personalDetail = id => `${base_url}/person/${id}?api_key=${api_key}`;
const personMovies = id => `${base_url}/person/${id}/movie_credits?api_key=${api_key}`;

export const fetchPersonDetail = id => {
	return apiRequest(personalDetail(id));
};

export const fetchPersonMovies = id => {
	return apiRequest(personMovies(id));
};

export const fetchTrendingMovie = () => {
	return apiRequest(trendingMovie);
};

export const fetchUpcomingMovie = () => {
	return apiRequest(upcomingMovie);
};

export const fetchTopRatedMovie = () => {
	return apiRequest(top_rated);
};

export const fetchPopularMovie = () => {
	return apiRequest(popularMovie);
};

export const fetchMovieDetail = id => {
	return apiRequest(movieDetail(id));
};

export const fetchMovieCredits = id => {
	return apiRequest(movieCredits(id));
};

export const fetchSimilarMovie = id => {
	return apiRequest(similarMovie(id));
};

export const image500 = (posterPath, backdropPath) => {
	return `https://image.tmdb.org/t/p/w500${posterPath || backdropPath}`;
};
export const image342 = (posterPath, backdropPath) => {
	return `https://image.tmdb.org/t/p/w342${posterPath || backdropPath}`;
};
export const image185 = (posterPath, backdropPath) => {
	return `https://image.tmdb.org/t/p/w185${posterPath || backdropPath}`;
};
