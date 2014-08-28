'use strict';

app.controller('ModalInstanceCtrl', ['$scope', '$modalInstance', 'show', function($scope, $modalInstance, show){

  $scope.show = show;

  $scope.ok = function () {
    $modalInstance.close($scope.show);
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
  
}]);