(function() {
  'use strict';
  eventsApp.directive('dateKeys', function() {
    function isNumericKeyCode(ev) {
      return (ev.keyCode >= 48 && ev.keyCode <=57) ||
             (ev.keyCode >= 96 && ev.keyCode <= 105);
    }
    function isForwardSlashKeyCode(ev) {
      return ev.keyCode === 191;
    }
    function isNavigationKeycode(ev) {
      switch(ev.keyCode) {
        case 8: //backspace
        case 9: //tab
        case 16: //shift
        case 35: //end
        case 36: //home
        case 37: //left
        case 38: //up
        case 39: //right
        case 40: //down
        case 45: //ins
        case 46: //del
            return true;
        default:
            return false;
      }
    }

    return {
      restrict: 'A',
      link: function(scope, element, attrs, controller) {
        element.on('keydown', function(ev) {
          return (isNumericKeyCode(ev) || 
                  isForwardSlashKeyCode(ev) || 
                  isNavigationKeycode(ev));
        });
        
      }
    };
  });
})();