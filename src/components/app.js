angular.module('video-player', [])
.controller('videoController', ['$scope', '$window', function($scope, $window) {
  $scope.videos = $window.exampleVideoData;
}])
.directive('app', function() {
  return {
    controllerAs: 'ctrl',
    bindToController: true,
    controller: function ($scope) {
      console.log($scope);
    },
    templateUrl: 'src/templates/app.html',
  };
});