angular
    .module('educaFi')
    .controller('TopicDisplayController', TopicDisplayController)

function TopicDisplayController($routeParams, modulosDataFactory) {
    var vm = this;
    var moduloId = $routeParams.moduloId;
    var topicId = $routeParams.topicId;
    vm.isSubmitted = false;
    
    modulosDataFactory
        .topicDisplay(moduloId, topicId)
        .then(function (response) {
            vm.topic = response.data;

            //Get videos and photos if they exist
            if(response.data.photos){
                vm.photos = vm.topic.photos;
            }
            if(response.data.video){
                vm.video = vm.topic.video;
            }
        })
}