import axios from "axios";

export const getMoviesList = async (title) => {
  try {
    const reqUrl = `http://www.omdbapi.com/?apikey=3e5a7bcf&s=${title}`;
    const response = await axios.get(reqUrl);
    console.log(response.data.Search);
    return response.data.Search;
  } catch (error) {
    console.log(error);
  }
};
