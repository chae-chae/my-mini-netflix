const API_KEY = "f4aada732a6c67a5eb9ebb5973f0165b";
const BASE_PATH = "https://api.themoviedb.org/3";
const KEYWORD = "";

interface IMovie {
  id: number;
  backdrop_path: string;
  poster_path: string;
  title: string;
  overview: string;
}

export interface IGetMoviesResult {
  dates: {
    maximum: string;
    minimum: string;
  };
  page: number;
  results: IMovie[];
  total_pages: number;
  total_results: number;
}

export function getMovies() {
  return fetch(`${BASE_PATH}/movie/now_playing?api_key=${API_KEY}`).then(
    (res) => res.json()
  );
}

export function searchMovies() {
  return fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${KEYWORD}&page=1&include_adult=false`
  ).then((res) => res.json());
}
