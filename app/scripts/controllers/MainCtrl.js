(function () {
    function MainCtrl($scope, Room, $uibModal) {
        $scope.rooms = Room.all;
        $scope.open = function() {
            var modalInstance = $uibModal.open({
                templateUrl: '/templates/modal.html',
                controller: 'ModalCtrl',
                size: 'md'
            })
        }
    }

    angular
        .module('blocChat')
        .controller('MainCtrl', ['$scope', 'Room', '$uibModal', MainCtrl]);
})();