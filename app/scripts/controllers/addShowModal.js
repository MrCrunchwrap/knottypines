'use strict';

app.controller('AddShowModalCtrl', ['$scope', '$modal', '$log', 'Show', function($scope, $modal, $log, Show){

  $scope.show = {};

  $scope.open = function (size) {

    var modalInstance = $modal.open({
      templateUrl: 'myModalContent.html',
      controller: 'ModalInstanceCtrl',
      size: size,
      resolve: {
        show: function () {
          return $scope.show;
        }
      }
    });

    modalInstance.result.then(function (show) {
      // Modal closed ok
      Show.create(show);
      $scope.show = {};
    }, function () {
      // Modal dismissed
      $log.info('Modal dismissed at: ' + new Date());
    });
  };
  
}]);