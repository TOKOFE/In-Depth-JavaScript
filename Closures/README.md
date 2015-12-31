# Common mistakes

Closures are powerful feature in JavaScript. However, if you misuse or overuse it causes wrong result and memory leak. Here I am going to show some common mistakes in reality. 

##### In `for` loop

Let's supposed that you want to put 5 buttons and show button id when it is clicked.

HTML code
```
    <button id="btn-1">Button - 1</button>
    <button id="btn-2">Button - 2</button>
    <button id="btn-3">Button - 3</button>
    <button id="btn-4">Button - 4</button>
    <button id="btn-5">Button - 5</button>
```

Someone can make the code using jQuery to add click event handler.

```
var $buttons = $("button");
var len = $buttons.length;

for(var i = 0; i < len; i++) {
  $($buttons[i]).click(function() {
    // put your logic
    alert('Script1: ' + i);
  });
}
```

If you run it, you can find all buttons show 5 which is the last value of `i`. It is because closures have been created due to the click event handler function which refers to the variable `i` which is defined outside of the handler. So all the closures refer to the last value of `i`.

You can fix it a couple of ways. 

1. Using IIFE passing variable i

```
var $buttons = $("button");
var len = $buttons.length;

for(var i = 0; i < len; i++) {
  (function(_i) {
    $($buttons[_i]).click(function() {
      alert('Scrit2: ' + (_i+1));
    });
  })(i);
}
```

With IIFE, you can pass the variable i so that the function inside IIFE can keep the value when it was passed.


2. Call external function

```
var $buttons = $("button");
var len = $buttons.length;

for(var i = 0; i < len; i++) {
  clickHandler(i);
}

function clickHandler(_i) {
  $($buttons[_i]).click(function() {
    alert('Script3: ' + (_i+1));
  });
}

```

If you don't like IIFE, you can make it external function.
