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

    goToScanList (index) {
        this.$state.go('scanList', {scanId: index});
    }

}

export default SearchListContoller;
