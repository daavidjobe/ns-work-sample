

export default class MoviesController {

  
  constructor(moviesService, $state) {
    this.name = 'movies'
    this.results = {}
    this.service = moviesService
    this.page = 1
    this.sorted = 'popular' // top_rated upcoming
    this.$state = $state
    this.getMovies()
  }

  getMovies() {
    this.service.fetchMovies(this.page, this.sorted)
      .then(res => {
        this.movies = res.data
      })
  }

  getMoviesBy(sorted) {
    if(this.sorted !== sorted) {
      this.page = 1
    }
    this.sorted = sorted
    this.getMovies()
  }

  getNextPage() {
    this.page = this.page <= this.movies.total_pages ? this.page + 1 : 1
    this.getMovies()
  }

  getPreviousPage() {
    this.page = this.page > 1 ? this.page - 1 : 1
    this.getMovies()
  }

  viewDetails(id) {
    this.$state.go('detail', { id })
  }

}

