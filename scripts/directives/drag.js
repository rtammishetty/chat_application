var app = angular.module('chat');
app.directive('fileDropzone', function() {
  return {
    restrict: 'A',
    require: '^ngController',
    scope: {
      file: '=',
      fileName: '='
    },
    link: function(scope, element, attrs, ngCtrl) {
	  var checkSize,
          isTypeValid,
          processDragOverOrEnter,
          validMimeTypes;
      
      processDragOverOrEnter = function (event) {
        if (event !== null) {
          event.preventDefault();
        }
        event.originalEvent.dataTransfer.effectAllowed = 'copy';
        return false;
      };
      
      validMimeTypes = attrs.fileDropzone;
      
      checkSize = function(size) {
        var _ref;
        if (((_ref = attrs.maxFileSize) === (void 0) || _ref === '') || (size / 1024) / 1024 < attrs.maxFileSize) {
          return true;
        } else {
          alert("File must be smaller than " + attrs.maxFileSize + " MB");
          return false;
        }
      };

      isTypeValid = function(type) {
        if ((validMimeTypes === (void 0) || validMimeTypes === '') || validMimeTypes.indexOf(type) > -1) {
          return true;
        } else {
          alert("Invalid file type.  File must be one of following types " + validMimeTypes);
          return false;
        }
      };
      
      element.bind('dragover', processDragOverOrEnter);
      element.bind('dragenter', processDragOverOrEnter);

      return element.bind('drop', function(event) {
        var file, name, reader, size, type;
        if (event !== null) {
          event.preventDefault();
        }
        reader = new FileReader();
        reader.onload = function(evt) {
          if (checkSize(size) && isTypeValid(type)) {
            return scope.$apply(function() {
              scope.file = evt.target.result;
              if (angular.isString(scope.fileName)) {
                return scope.fileName = name;
              }
            });
          }
        };
        file = event.originalEvent.dataTransfer.files[0];
        name = file.name;
        type = file.type;
        size = file.size;
        reader.readAsDataURL(file);
        ngCtrl.setCustomerMessage(name);
        return false;
      });
    }
  };
})


.directive("fileread", [function () {
    return {
        scope: {
            fileread: "="
        },
        link: function (scope, element, attributes) {
            element.bind("change", function (changeEvent) {
                var reader = new FileReader();
                reader.onload = function (loadEvent) {
                    scope.$apply(function () {
                        scope.fileread = loadEvent.target.result;
                    });
                };
                reader.readAsDataURL(changeEvent.target.files[0]);
            });
        }
    };
}]);