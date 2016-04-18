(function strictFn() {
    console.log('Non strict Mode ---------------');
    
    abc = 123;
    console.log('> Not-declared variable: ', abc);
    
    var o = {x: 1, x: 2};
    console.log('> Duplicated properties: ', o);
    
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
        var oo = {x: 1, x: 2};
        console.log('# Duplicated variable: ', oo);
    } catch (e) {
        console.log('# Duplicated variable: ', e);        
    } 
    
    console.log('===============================');        
})();