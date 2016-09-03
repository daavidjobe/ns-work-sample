

const key =  '5353652c477331facf28d9842f7b31b3'

export default class MoviesService {
  
  constructor($http) {
    this.$http = $http;
  }

  fetchMovie(id) {
    return this.$http.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${key}`)
    .success(res => res.data)
    .error((err, status) => {
      console.log(err, status)
    })
  }

  fetchMovies(page, sorted) {
    return this.$http.get(`https://api.themoviedb.org/3/movie/${sorted}?page=${page}&api_key=${key}`)
    .success(res => res.data)
    .error((err, status) => {
      console.log(err, status)
    })
  }

  search(query) {
     return this.$http.get(`https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${key}`)
    .success(res => console.log(res))
    .error((err, status) => {
      console.log(err, status)
    })
  }




}