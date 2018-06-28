angular
    .module('educaFi')
    .directive('mhAffter', mhAffter);


function mhAffter() {
    return {
        restrict: 'E',
        templateUrl: 'angular-app/navigation-directive-affter/navigation-directive-affter.html'
    }
}
