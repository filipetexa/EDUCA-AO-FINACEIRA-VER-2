angular
    .module('educaFi')
    .controller('ModuloDisplayController', ModuloDisplayController)

function ModuloDisplayController($routeParams, modulosDataFactory) {
    var vm = this;

    var moduloId = $routeParams.moduloId;
    vm.isSubmitted = false;
    modulosDataFactory
        .moduloDisplay(moduloId)
        .then(function (response) {
            vm.modulo = response.data;
        })
}

