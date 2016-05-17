
// var buttons = document.querySelectorAll('.btn');
// var len = buttons.length;

// function handler(i) {
//    buttons[i].addEventListener('click', function() {
//     alert('button-'+ i + ' clicked.');
//   }); 
// }

// for (i = 0; i < len; i++) {
//   handler(i+1);
// }


(function solutions2() {
  var buttons = document.querySelectorAll('.btn');
  var len = buttons.length;

  for (i = 0; i < len; i++) {
    buttons[i].addEventListener('click', (
      function(i) {
        return function() {
          alert('button-'+ i + ' clicked.');
        }
      })(i+1)
    );
  }  
})();