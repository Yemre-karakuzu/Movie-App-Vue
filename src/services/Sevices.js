import { base_url, api_key } from "./api-base"

export async function getResults(keyword) {
    const response = await fetch(`${base_url}/search/movie?api_key=${api_key}&page=1&query=${keyword}`);
    return response;
}

export async function getDiscover() {
    const response = await fetch(`${base_url}/discover/movie?api_key=${api_key}&language=en-US`);
    console.log("funcDiscover=>", response)
        //https://api.themoviedb.org/3/discover/movie?api_key=a956fd1eaf496fb9a4ff63da9852114a&language=en-US&page=1
    return response;
}