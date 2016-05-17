
var buttons = document.querySelectorAll('.btn');
var len = buttons.length;

for (i = 0; i < len; i++) {
  buttons[i].addEventListener('click', function() {
    alert('button-'+ i + ' clicked.');
  });
}