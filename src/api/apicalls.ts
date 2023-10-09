const apikey: string = '71af2ce041159422171e3ddb0e0043a6';

const host="localhost"
export const baseImagePath = (size: string, path: string) => {
  return `https://image.tmdb.org/t/p/${size}${path}`;
};
export const nowPlayingMovies: string = `http://${host}:8080/movie/now_playing`;
export const upcomingMovies: string = `http://${host}:8080/movie/upcoming`;

export const searchMovies = (keyword: string) => {
  return `https://api.themoviedb.org/3/search/movie?api_key=${apikey}&query=${keyword}`;
};
export const movieDetails = (id: number) => {
  return `http://${host}:8080/movie/${id}`;
};
export const movieCastDetails = (id: number) => {
  return `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apikey}`;
};
