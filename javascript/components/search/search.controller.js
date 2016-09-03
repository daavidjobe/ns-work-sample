

export default class SearchController {

  constructor($state, moviesService) {
    this.name = 'search'
    this.$state = $state
    this.service = moviesService 
    this.query = ""   
  }

  doSearch() {
    if(this.query !== '')
    this.service.search(this.query)
  }


}

