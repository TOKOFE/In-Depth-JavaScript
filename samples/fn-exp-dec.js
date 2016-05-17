(function() {
var tokofe = 'TOKOFE';

console.log('result: ', tokofe);
})()
//-----------------------

(function() {
  var tokofe = 'TOKOFE';
  
  (function(){
    console.log('result: ', tokofe);
  })();
})()

// --------------------

(function() {
  var tokofe = 'TOKOFE';
  
  (function(){
    console.log('result: ', tokofe);
    var tokofe = 'GO GO';
  })();
})()

(function() {
  console.log('function: ', fn1);
  var fn1 = function() { return 1; };
  
  console.log('function: ', fn2());
  function fn2() { return 2; }
})()
