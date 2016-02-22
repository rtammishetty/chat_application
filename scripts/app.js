/*
Initialising the chat application inside a self invoking closure
*/
(function(){

/*
Initialising the chat application as "chat" module
*/
//var app = angular.module('chat');
/*
Attaching 'chatController' to the chat app with default $scope,
initialising the locale variable with locale name from locale file,
initialising the transcripts variable with an array containing dummy messages
initialising the properties variable with chat properties object
*/





/*
To expand the text area height, as the text message is entered to the text area 
*/
var textarea = document.querySelector('textarea');
textarea.addEventListener('keydown', autosize);

function autosize() {
  $("textarea").addClass("textarea-autosize");
  var el = this;
  setTimeout(function() {
    el.style.cssText = 'height:auto; padding:0';
    // for box-sizing other than "content-box" use:
    // el.style.cssText = '-moz-box-sizing:content-box';
    el.style.cssText = 'height:' + el.scrollHeight + 'px';
  },0);
}

})();