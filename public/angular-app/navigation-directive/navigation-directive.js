angular
    .module('educaFi')
    .directive('mhNavigation', mhNavigation);


function mhNavigation() {
    return {
        restrict: 'E',
        templateUrl: 'angular-app/navigation-directive/navigation-directive.html'
    }
}


function log() {
    var log = document.getElementById("login").style.display
    if (log == "none") {
        document.getElementById("login").style.display = "block";
    } else {
        document.getElementById("login").style.display = "none";
    }
}