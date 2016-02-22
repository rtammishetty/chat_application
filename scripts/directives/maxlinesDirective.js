 /*
To limit the number of lines in the text area to 10.
*/
var app = angular.module('chat');
app.directive('maxlines', function() {
    return {
      restrict: 'A',
      require: 'ngModel',
      link: function(scope, elem, attrs, ngModel) {
        var maxLines = 1;
        attrs.$observe('maxlines', function(val) {
          maxLines = parseInt(val);
        });
        ngModel.$validators.maxlines = function(modelValue, viewValue) {
          var numLines = (modelValue || '').split("\n").length;
          return numLines <= maxLines;
        };
        attrs.$observe('maxlinesPreventEnter', function(preventEnter) {
          preventEnter = (preventEnter || '').toLocaleLowerCase().indexOf('f') !== 0;
          if (preventEnter) {
            addKeypress();
          } else {
            removeKeypress();
          }
        });

        function addKeypress() {
          elem.on('keypress', function(event) {
            if (event.keyCode == 13 && !ngModel.$validators.maxlines(ngModel.$modelValue + '\n', ngModel.$viewValue + '\n')) {
              event.preventDefault();
            }
          });
        }

        function removeKeypress() {
          elem.off('.maxlines');
        }

        scope.$on('$destroy', removeKeypress);
      }
    };
});
