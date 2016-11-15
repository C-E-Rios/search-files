class SearchListContoller {

    constructor ($state, AppService) {
        'ngInject';
        this.$state = $state;
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

    goToScanList (id) {
        this.$state.go('scanList', {scanId: id});
    }

}

export default SearchListContoller;
