

class DetailController {

  constructor($state, moviesService) {
    this.name = 'detail'
    this.movie = {}
    this.$state = $state
    this.service = moviesService
    this.getMovie()
  }

  getMovie() {
    let id = this.$state.params.id
    this.service.fetchMovie(id)
      .then(res => {
        this.movie = res.data
      })
  }
}
DetailController.$inject = ['$state', 'moviesService']
export default DetailController

