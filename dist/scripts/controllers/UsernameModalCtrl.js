(function(){
    function UsernameModalCtrl($scope, $uibModalInstance, $cookies){
        $cookies.blocChatCurrentUser = "";
        
        $scope.create = function(username){
            $cookies.put('blocChatCurrentUser', username);
            $uibModalInstance.close();
        }
    };


 
     angular
        .module('blocChat')
        .controller('UsernameModalCtrl', ['$scope','$uibModalInstance','$cookies', UsernameModalCtrl])
})();