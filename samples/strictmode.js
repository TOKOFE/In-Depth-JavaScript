(function strictFn() {
    console.log('Non strict Mode ---------------');
    
    abc = 123;
    console.log('> Not-declared variable: ', abc);
    
    var o = {x: 1, x: 2};
    console.log('> Duplicated properties: ', o);

    function sum(a, a, c) {
        return a + b + c;
    }
    
    console.log('===============================');
    console.log('         ');
})();

(function strictFn() {
    'use strict';
    
    console.log('Strict Mode --------------------');
       
    try {
        xyz = 123;
    } catch (e) {
        console.log('# non-declared variable: ', e);        
    }

    try {
        var ooo = {x: 1, x: 2};
        console.log('# Duplicated variable: ', ooo);
    } catch (e) {
        console.log('# error: Duplicated variable: ', e);        
    } 
    
    console.log('===============================');        
})();

function sum() {
    "use strict";

    try {        
        var sum = function(a, a, c) {
            var res;
            res = a + b + c;    
            return res;
        }        
    } catch(e) {
        console.log('# Error: ', e);    
    }
}