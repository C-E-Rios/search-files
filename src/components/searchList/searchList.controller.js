class SearchListContoller {

    constructor (AppService) {
        'ngInject';
        this.AppService = AppService;
    }

    $onInit () {
        this.getSearchList();
    }

    getSearchList () {
        this.AppService.getSearchList()
            .then((data) => {
                this.searches = data;
                return this.searches;
            });
    }

}

export default SearchListContoller;
