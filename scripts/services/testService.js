var app = angular.module('chat',["ngSanitize"]);
app.service('testService', function(){
  alert("test service");
});