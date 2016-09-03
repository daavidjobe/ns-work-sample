import axios from 'axios'

export default (() => {

  const key =  '5353652c477331facf28d9842f7b31b3'

  const fetchPopularMovies = page => {
    return axios.get(`https://api.themoviedb.org/3/movie/popular?page=${page}&api_key=${key}`)
  }

  const fetchMovie = id => {
    axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${key}`)
    .then(res => console.log(res))
  }

  const fetchMovieImages = id => {
    axios.get(`https://api.themoviedb.org/3/movie/${id}/images?api_key=${key}`)
    .then(res => console.log(res))
  }

  return {
    fetchPopularMovies, fetchMovie, fetchMovieImages
  }

})()