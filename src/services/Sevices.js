import { base_url, api_key } from "./api-base"

export async function getResults(keyword) {
    const response = await fetch(`${base_url}/search/movie?api_key=${api_key}&language=en-US&page=1&query=${keyword}`);
    return response;
}

export async function getDiscover(keyword) {
    const response = await fetch(`${base_url}/movie/${keyword}?api_key=${api_key}&language=en-US&page=1`);
    console.log("funcDiscover=>", response)
    return response;
}
export async function getGenre() {
    const response = await fetch(`${base_url}/genre/movie/list?api_key=${api_key}&language=en-US`);
    console.log("funcGenre=>", response)
    return response;
}
export async function getGenreResult() {
    const response = await fetch(`https://api.themoviedb.org/3/keyword/28/movies?api_key=a956fd1eaf496fb9a4ff63da9852114a&language=en-US&include_adult=false`);
    console.log("genrefuncResult=>>>", response)
    return response;
}


// https://api.themoviedb.org/3/genre/movie/list?api_key=a956fd1eaf496fb9a4ff63da9852114a&language=en-US