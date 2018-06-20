angular.module('educaFi').factory('modulosDataFactory', modulosDataFactory);

function modulosDataFactory($http) {
    return {
        modulosList: modulosList,
        moduloDisplay: moduloDisplay,
        topicDisplay: topicDisplay
    }
    function modulosList() {
        return $http.get('/api/modulos')
            .then(complete)
            .catch(failed)
    }

    function moduloDisplay(id) {
        return $http.get('/api/modulos/' + id)
            .then(complete)
            .catch(failed)
    }

 
    function topicDisplay(moduloId, topicId) {
        return $http.get('/api/modulos/' + moduloId + '/topics/' + topicId)
            .then(complete)
            .catch(failed)
    }

    function complete(response) {
        return response;
    }

    function failed(error) {
        console.log(error.statusText);
    }

}