var fn = function() {
  return 1;
};

function foo(f) {
    return f();
}

foo(fn);

function abc (obj){
  if (obj) {
      return function (){ return "Hi!"}; 
  }
  else {
      return function (){ return "Hello!"};
  }
}

function hello(thing) {  
  console.log(this + " says hello " + thing);
}

hello.call("TOKOFE", "world")


function hello(thing) {  
  console.log("Hello " + thing);
}

// this:
hello("world")

// desugars to:
hello.call(window, "world");  


var person = {  
  name: "Brendan Eich",
  hello: function(thing) {
    console.log(this.name + " says hello " + thing);
  }
}

// this:
person.hello("world")

// desugar to this:
person.hello.call(person, "world"); 


function C(){
  this.a = 37;
}

var o = new C();
console.log(o.a);


function C2(){
  this.a = 37;
  return {a:38};
}

o = new C2();
console.log(o.a);


var seq = function getSeq() {
  var seq = 0;
  
  return function() {
    return seq++;
  }
}();