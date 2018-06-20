angular.module('educaFi', ['ngRoute', 'angular-jwt']).config(config)


function config($httpProvider, $routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'angular-app/main/main.html',
            access: {
                restricted: false
            }
        })
        .when('/modulos', {
            templateUrl: 'angular-app/modulos-list/modulos.html',
            controller: ModulosController,
            controllerAs: 'vm',
            access: {
                restricted: false
            }
        })
        .when('/modulos/:moduloId', {
            templateUrl: 'angular-app/modulo-display/modulo.html',
            controller: ModuloDisplayController,
            controllerAs: 'vm',
            access: {
                restricted: false
            }
        })
        .when('/modulos/:moduloId/:topicId', {
            templateUrl: 'angular-app/topic-display/topic.html',
            controller: TopicDisplayController,
            controllerAs: 'vm',
            access: {
                restricted: false
            }
        })
        .when('/wwa', {
            templateUrl: 'angular-app/who-we-are/wwa.html',
            access: {
                restricted: false
            }
        })
        .when('/register', {
            templateUrl: 'angular-app/register/register.html',
            controller: RegisterController,
            controllerAs: 'vm',
            access: {
                restricted: false
            }
        })
        .when('/profile', {
            templateUrl: 'angular-app/profile/profile.html',
            access: {
                restricted: false
            }
        })

}







