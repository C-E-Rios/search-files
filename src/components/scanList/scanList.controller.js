class ScanListContoller {

    constructor (AppService, $stateParams, $timeout, $mdSidenav) {
        'ngInject';
        this.AppService = AppService;
        this.$timeout = $timeout;
        this.$mdSidenav = $mdSidenav;

        this.scanId = $stateParams.scanId;
        this.currentPage = 1;
    }

    $onInit() {
        this.loadItems();
    }

    loadItems () {
        return this.AppService.getScanList(this.scanId)
            .then((data) => {
                this.items = data;
                return this.items;
            });
    }

    clearFilters () {
        this.filter = null;
    }

    disableFilterButton (filter) {
        if (!filter) {
            return true;
        }
        return Object.keys(filter)
            .every((prop) => {
                return filter[prop] === '' || filter[prop] === null;
            });
    }

    toggleMenu () {
        this.$timeout(() => this.$mdSidenav('left').open());
    }

}

export default ScanListContoller;
