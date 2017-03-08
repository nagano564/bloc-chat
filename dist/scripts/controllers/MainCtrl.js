(function () {
    function MainCtrl($scope, Room, Message, $uibModal) {
        $scope.rooms = Room.all;
        $scope.currentRoom = null;
        $scope.messages = [];
        $scope.open = function() {
            var modalInstance = $uibModal.open({
                templateUrl: '/templates/modal.html',
                controller: 'ModalCtrl',
                size: 'md'
            })
        }
        
        $scope.selectRoom = function(room){
            $scope.currentRoom = room;
            $scope.messages = Message.getByRoomId($scope.currentRoom.$id);
        };
        
        $scope.sendMessage = function(message){
            if (message && message !== "") {
                Message.send(message, $scope.currentRoom.$id)
            }
            $scope.message = "";
        }
    }
        

    angular
        .module('blocChat')
        .controller('MainCtrl', ['$scope', 'Room', 'Message', '$uibModal', MainCtrl]);
})();