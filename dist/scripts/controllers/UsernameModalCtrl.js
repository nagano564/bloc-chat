(function(){
    function UsernameModalCtrl($scope, $uibModalInstance, $cookies){
        $cookies.blocChatCurrentUser = "";

        $scope.create = function(username){
            $cookies.put('blocChatCurrentUser', username);
            if (username && username !== ""){
              $uibModalInstance.close();
            } else {
              alert("Your must enter a username")
            }
        }
    };



     angular
        .module('blocChat')
        .controller('UsernameModalCtrl', ['$scope','$uibModalInstance','$cookies', UsernameModalCtrl])
})();
