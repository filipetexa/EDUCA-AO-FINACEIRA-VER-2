angular
    .module('educaFi')
    .controller('loginController', loginController);


function loginController($http, $location, $window, AuthFactory, jwtHelper) {
    var vm = this;


    vm.isLoggedIn = function () {
        if (AuthFactory.isLoggedIn) {
            return true;
        } else {
            return false;
        }
    };


    vm.login = function () {
        if (vm.username == null) {
            window.alert("Digite o nome do usuário");
        } else {
            if (vm.password == null) {
                window.alert("Digite a senha do usuário");
            } else {
                if (vm.username && vm.password) {
                    var user = {
                        username: vm.username,
                        password: vm.password
                    }
                }


                $http.post('api/users/login', user)
                    .then(function (response) {
                        $location.path('/modulos');

                        if (response.data.success) {
                            $window.sessionStorage.token = response.data.token;
                            AuthFactory.isLoggedIn = true;
                            var token = $window.sessionStorage.token;
                            var decodedToken = jwtHelper.decodeToken(token);
                            vm.loggedInUser = decodedToken.username;
                        }
                    })
                    .catch(function (err) {
                        console.log(err);
                        document.getElementById("ney").className = "neymar";
                        document.getElementById("negado").innerHTML = "O menino NEY indentificou um erro na senha fornecida, por favor insira a senha correta e ajude o Brasil a ganhar o hexa "
                    })
            }
        }
    }

    vm.logout = function () {
        AuthFactory.isLoggedIn = false;
        $location.path('/');
        $window.sessionStorage.token = "";

    }

    vm.isActiveTab = function (url) {
        var currentPath = $location.path().split('/')[1];
        return (url === currentPath ? 'active' : '');
    }
}
