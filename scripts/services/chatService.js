var app = angular.module('chat');
angular.module('chat').factory('bubbleService', function($http) {
  var bubbleService = [];
  return bubbleService = {
    ajaxCal : function() {
      $http.get("./scripts/json/demo_test.json")
      .success(function(response) {
      	response_replica = response;
        console.log("Hello", response);
      })
      .error(function(response) {
        alert("Unable to fetch the data");
      });
    }
  };
});



angular.module('chat').factory('chatService', function($timeout,$filter) {

getTime = function() {
		return $filter('date')(new Date(), 'hh:mma');
};

	
var chatTranscripts = [
{
  class : "module-message-connected",
  value : "You are chatting with Rajesh.",
  time : getTime(),
  name : "",
  by : "default"
},
{
  class : "module-transcripts",
  value : "Thanks for contacting CustomerCare chat support. My name is John. How can I help you?",
  time : getTime(),
  name : "John",
  by : "agent"
},
{
  class : "module-transcripts",
  value : "Problem With My ABC_Company Device",
  time : getTime(),
  name : "User",
  by : "customer"
}
];

var chatProperties = {
  showInputs : true,
  showPrivacyMessage : true,
  sendEnabled : "disabled",
  agentName : "John",
  caseId : 12345,
};


var agentTranscripts = {
  "messages": [
    {
      class: "module-transcripts",
      value: "How are you doing?",
      time: getTime(),
      name : "John",
      by : "agent"
    },
    {
      class: "module-transcripts",
      value: "Are You There?",
      time: getTime(),
      name : "John",
      by : "agent"
    },
    {
      class: "module-transcripts",
      value: "How May I Help You?",
      time: getTime(),
      name : "John",
      by : "agent"
    },
    {
      class: "module-transcripts",
      value: "What Are You Looking For.",
      time: getTime(),
      name : "John",
      by : "agent"
    }
  ]
};



addChatTranscript = function(obj) {
  chatTranscripts.push(obj);
};

getRandomChatTranscript = function() {
   chatTranscripts.push(agentTranscripts.messages[Math.floor((Math.random() * 4) + 0)]);
};

return {
  init: function(scope) {
    this.scope = scope;
    

  
  },
  getChatTranscripts: function() {
    return chatTranscripts;
  },

  getChatProperties: function() {
    return chatProperties;
  },
  getAgentTranscripts: function() {
    return agentTranscripts;
  },
    customerTyping: function() {
      if(!(typeof this.scope.image === undefined || this.scope.image == null)) {
      		if(this.scope.showImagePreview != this.scope.customerMessage) {
      			this.scope.image = null;
      			this.scope.showImagePreview = "";
      			this.scope.customerMessage = "";
      		}
      }
      if(this.scope.customerMessage.length > 0) chatProperties.sendEnabled = "";
      else chatProperties.sendEnabled = "disabled";
      chatProperties.showPrivacyMessage = false; 
    },
    /*
Function to scroll the chat view upon adding new messages to the chat transcripts array
*/
  scrollChatView : function() {
    var amountToScroll = parseInt($(".module-chatContent")[0].scrollHeight , 10); //to get the total height of chatContent div
    $(".chatContent").animate({
      scrollTop: amountToScroll
    }, 2000);
  },
  sendMessage: function() {
    $("textarea").removeClass("textarea-autosize").css("height", 44);
    if(typeof this.scope.image === undefined || this.scope.image == null)
    	addChatTranscript( { class: "module-transcripts", value: this.scope.customerMessage, time: getTime(), name : "User", by : "customer" } );
    else {
    	addChatTranscript( { class: "module-transcripts", value: "<img src='"+ this.scope.image + "' class='module-image-drop' />", time: getTime(), name : "User", by : "customer" } );
    	this.scope.image = null;
    }
      chatProperties.sendEnabled = "disabled";
      this.scope.customerMessage = null;
      $timeout(function(){
      var amountToScroll = parseInt($(".module-chatContent")[0].scrollHeight , 10); //to get the total height of chatContent div
    $(".module-chatContent").animate({
      scrollTop: amountToScroll
    }, 2000);
    }, 100);
    },

    sendAgentMessage: function() {
      getRandomChatTranscript();
      $timeout(function(){
    }, 100);
    },
    alterChatPropertiesForFileNameChange: function() {
        chatProperties.showImagePreview = true;
    },
  fileNameChanged: function(e) {
    imgFile = e.files[0],
    readerFile = new FileReader();
    readerFile.onload = function(loadEvent) {
      $("#imageDialog").dialog({
        modal: true,
        draggable: false,
        resizable: false,
        closeOnEscape: false,
        position: [56, 7],
        dialogClass: 'imageDialog'
      });
      $(".imageDialog").focus();
      $(".ui-dialog").attr("role", "alertdialog");
      $("#previewImage").attr("src", loadEvent.target.result);
      $("#uploadStatus h2").removeClass("a11y");
      $("#uploadMessage").html("");
    };
    readerFile.readAsDataURL(imgFile);
  },
  
scrollChats: function() {
    var amountToScroll = parseInt($(".module-chatContent").css("height"), 10);
  $(".module-chatContent").animate({
        scrollTop: amountToScroll
    }, 2000);
  },

};

});