angular.module('educaFi').controller('ModulosController', ModulosController);

function ModulosController(modulosDataFactory) {
    var vm = this;
    vm.title = 'MODULOS';
    modulosDataFactory
        .modulosList()
        .then(function (response) {
            vm.modulos = response.data;
        })

}