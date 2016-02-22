angular.module('chat').controller('chatController', function($scope, $interval, $timeout, bubbleService, chatService) {  

  chatService.init($scope);

  this.locale = us;
  this.transcripts = chatService.getChatTranscripts();
  this.properties = chatService.getChatProperties();

  $interval(function (){
      bubbleService.ajaxCal();
      chatService.scrollChatView();
  }, 1000000);

/*
textarea.input-customer  input event listener
when user starts typing enable to send button, hide the privacy message
*/
  $scope.customerTyping = function() { 
    chatService.customerTyping();
  };
	
	this.setCustomerMessage = function (name) {
		$scope.customerMessage = name;
		$scope.customerTyping();
	};
/*
button.send-customer  button click event listener
when user starts typing clicks on send, push the message to chat transcripts array,
disable the send button, delete the value in textarea.input-customer and scroll the chat view
*/
  $scope.sendMessage = function() {
    //To resize the text area to initial height, once the text message is sent
    chatService.sendMessage();
  };


/*
Agent messages are picked from agentTranscripts object.
*/
  $scope.sendAgentMessage = function(){
    chatService.sendAgentMessage();
    
  };
  
/*
Function to scroll the chat view upon adding new messages to the chat transcripts array
*/
  $scope.scrollChatView = function(){
    chatService.scrollChatView();
  };
});
