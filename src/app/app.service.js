class AppService {

    constructor ($http) {
        'ngInject';
        this.$http = $http;
    }

    getSearchList() {
        return this.$http.get('http://c7webtest.azurewebsites.net/searches/')
            .then(complete)
            .catch(failed);
    }

}

export default AppService;

function complete (response) {
    return response.data;
}

function failed (error) {
    console.error('XHR Failed for searches. ' + error.data);
}
