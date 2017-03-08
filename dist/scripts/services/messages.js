(function() {
  function Message($firebaseArray, $cookies) {
    var ref = firebase.database().ref().child("Messages");
    var messages = $firebaseArray(ref);
    
    var getByRoomId = function(roomId){
        console.log(roomId);
        var idMessages = ref.orderByChild("roomId").equalTo(roomId);
        return $firebaseArray(idMessages);
    };
      
    return {
      all: messages,
      getByRoomId: getByRoomId, 
        // Filter the messages by their room ID.
      send: function(newMessage, roomId){
          messages.$add({
              content: newMessage,
              roomId: roomId,
              username: $cookies.get('blocChatCurrentUser'),
              sent: firebase.database.ServerValue.TIMESTAMP
          })
      }    
    };
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', '$cookies', Message]);
})();