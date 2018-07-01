angular
    .module('educaFi')
    .controller('RegisterController', RegisterController)

function RegisterController($http){
    var vm = this;
    vm.register = function () {
        var user = {
            username: vm.username,
            password: vm.password,
        };
        if (!vm.username || !vm.password) {
            vm.error = 'Por favor, digite a senha e o nome de usuário';
        } else {
            if (vm.password !== vm.passwordRepeat) {
                vm.error = 'Desculpa, mas suas senhas nao estao iguais'
            } else {
                $http
                    .post('/api/users/register', user)
                    .then(function (result) {
                        console.log(result);
                        vm.message = 'Prontinho, Voce foi registrado com sucesso';
                        vm.error = '';
                    }).catch(function (error) {
                        console.log(error);
                    })
            }
        }
    }
}