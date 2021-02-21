import { base_url, api_key } from "./api-base"

export async function getResults(keyword) {
    const response = await fetch(`${base_url}/search/movie?api_key=${api_key}&language=en-US&page=1&query=${keyword}`);
    return response;
}

export async function getDiscover(keyword) {
    const response = await fetch(`${base_url}/movie/${keyword}?api_key=${api_key}&language=en-US&page=1`);
    return response;
}
export async function getGenre() {
    const response = await fetch(`${base_url}/genre/movie/list?api_key=${api_key}&language=en-US`);
    return response;
}
export async function getMoviDetail(movie_id) {
    const response = await fetch(`${base_url}/movie/${movie_id}?api_key=${api_key}&language=en-US`);
    return response;
}