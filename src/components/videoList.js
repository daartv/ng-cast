angular.module('video-player')
/*.controller('videoController', ['$scope', '$window', function($scope, $window) {
  controllerAs: 'ctrl',
  $scope.videos = $window.exampleVideoData;
}])*/
.directive('videoList', function() {
  return {
    scope: {
      controllerAs: 'ctrl'

    },
    templateUrl: 'src/templates/videoList.html',
    controllerAs: 'ctrl'
  };

});
