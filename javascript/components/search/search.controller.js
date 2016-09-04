

export default class SearchController {

  constructor($state, moviesService) {
    this.name = 'search'
    this.$state = $state
    this.service = moviesService 
    this.query = ""
  }

  viewDetails(id) {
    this.$state.go('detail', { id })
  }

  doSearch() {
    this.movies = {}
    if(this.query !== '')
    this.service.search(this.query)
      .then(res => {
        this.movies = res.data
      })
  }


}

