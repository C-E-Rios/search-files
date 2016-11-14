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

    onSelect (filter) {
        for (let key of Object.keys(filter)) {
            if (!filter[key]) {
                this.filter = _.omit(filter, key);
            }
        }
        if (!Object.keys(this.filter).length) {
            this.clearFilters();
        }
    }

    openMenu () {
        this.$timeout(() => this.$mdSidenav('left').open());
    }

}

export default ScanListContoller;
