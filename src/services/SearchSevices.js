import { base_url, api_key } from "./api-base"

export async function getResults(keyword) {
    const response = await fetch(`${base_url}/search/movie?api_key=${api_key}&page=1&query=${keyword}`);
    //const movie = await response.json();
    return response;
}