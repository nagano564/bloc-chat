(function(){
    function ModalCtrl($scope, $uibModalInstance, Room ){
    
    
          $scope.ok = function(newRoom) {
            Room.create(newRoom);  
            $uibModalInstance.close()
          };

          $scope.cancel = function() {
            $uibModalInstance.dismiss('cancel');
          };
    }
    angular
        .module('blocChat')
        .controller('ModalCtrl', ['$scope','$uibModalInstance','Room', ModalCtrl])
})();