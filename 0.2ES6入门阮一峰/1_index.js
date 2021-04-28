// import shim from "system.global.shim"; shim();
// function fn() {
//   console.log(1)
// }

// (function () {
//   function fn() {
//     console.log(2)
//   }
//   fn()
// }())

// function f1([x, y, z]) {
//   console.log(x, y, z);
// }

// function f2({ x, y, z }) {
//   console.log(x, y, z);
// }

// f1([1, 2, 3])
// f2({ z: 3, y: 2, x: 1 })

// var map = new Map();
// map.set("first", "hello");
// map.set("second", "world");

// const array = [1, 2, 3, 4, 45, 0]
// for (let [key, value] of map) {
//   console.log(key, value)
// }

// var number = {
//   n: 97
// }
// let a = "abc"
// console.log(number.n.toString(16))
// console.log(a.codePointAt(0))
// console.log(a.charAt(0))
// console.log(a.charCodeAt(0))
// console.log(0x20BB7)
// console.log(String.fromCodePoint(0x20BB7))
// console.log("𠮷".charCodeAt(0))
// console.log("charCodeAt" in String.prototype)
// console.log("𠮷".charAt(0))
// console.log("𠮷".at(0))

// const str = 'return' + '`hello ${name}!`';
// let func = new Function("name", str);
// console.log(func('jieke'))
// console.log(str)

// console.log(String.raw`1111111\n11111`)
// let bad =  String.raw`1111111111 \uni`
// console.log(bad)
// console.log("\u212A");

// function withinErrorMagin(left, right) {
//   return Math.abs(left - right) < Number.EPSILON;
// }

// console.log(0.1 - 0.1 + 0.1 + 0.2 - 0.3)
// console.log(withinErrorMagin(0.1 - 0.1 + 0.1 + 0.2, 0.3));
// console.log(Number.MIN_SAFE_INTEGER)
// console.log(Number.MAX_SAFE_INTEGER)
// console.log(Math.sign('9.1'))
// console.log(Math.pow(8,1))
//4,294,967,295
//9,007,199,254,740,992
// console.log((0x7fffffff * 0x7fffffff))
// console.log(Math.imul(0x7fffffff, 0x7fffffff))

// console.log(Math.floor('foo'))
// console.log(Math.sinh(10))
// console.log(1.5 ** 2)
// console.log(123n + 1n)

// for(let i = 0n;i<10n;i++){
//   console.log(i)
// }
// console.log(typeof 1)
// console.log(typeof 1n)
// console.log(null === undefined)
// let obj = { property1: "2", property2: "2" };
// let { property1 = 1, property2 = 2, property3 = 3 } = obj;
// console.log(property1, property2, property3)

// let x = 2
// function foo(y = x) {
//   console.log(y)
// }
// foo()

// let foo = 'outer';

// function bar(funt = x => foo) {
//   let foo = "inner";
//   console.log(funt())
// }
// bar()

// arguments 参数的写法
// function sortNumbers1() {
//   return Array.prototype.slice.call(arguments).sort();
// }
// console.log(sortNumbers1(1, 2, 4, 567, 1));
// const sortNumbers2 = (...number) => number.sort();
// console.log(sortNumbers2(1, 2, 4, 567, 1));

// "use strict"
// function doSomeTHING(a, b = a) {

// }
// var f = function () {

// }
// console.log(doSomeTHING.name)
// console.log(f.name)
// console.log(doSomeTHING.name)

// function c() {
//   console.log(this);
//   var f = function () {
//     console.log(this)
//   }
//   f()
//   var f1 = () => console.log(this);
//   f1()
// }
// c();

// function factorial(n, total) {
//   if (n === 1) return total;
//   return factorial(n - 1, n * total);
// }

// console.log(factorial(5, 1))

// function Fibonacci(n, acl = 1, ac2 = 1) {
//   if (n <= 1) return 1;
//   return Fibonacci(n - 1) + Fibonacci(n - 2);
// }
// console.log(Fibonacci(200))

// function Fibonacci2(n, ac1 = 1, ac2 = 1) {
//   if (n <= 1) return ac2;
//   return Fibonacci2(n - 1, ac2, ac1 + ac2);
// }
// console.log(Fibonacci2(100))

// function tailFactorial(n, total=1) {
//   if (n == 1) return total;
//   return tailFactorial(n - 1, n * total);
// }
// console.log(tailFactorial(5))

// function currying(fn, n) {
//   return function (m) {
//     return fn.call(this, m, n);
//   }
// }

// function tailFactorial(n, total) {
//   if (n === 1) return total;
//   return tailFactorial(n - 1, n * total);
// }

// function restricted(a, c, b) {
//   "use strict"
//   console.log(restricted.caller);
//   console.log(restricted.arguments);
// }
// restricted();

// var obj = {}

// console.log(obj instanceof Function)

// function sum(x, y) {
//   if (y > 0) {
//     return sum(x + 1, y - 1);
//   } else {
//     return x;
//   }
// }

// sum(1,100000) //Maximum call stack size exceeded


// 蹦床函数
// function trampoline(f) {
//   while (f && f instanceof Function) {
//     f = f();
//   }
//   return f;
// }

// function sum(x, y) {
//   if (y > 0) {
//     return sum.bind(null, x + 1, y - 1);
//   } else {
//     return x;
//   }
// }

// console.log(trampoline(sum(1, 100000)))

function tco(f) {
  var value;
  var active = false;
  var accumulated = [];

  return function accumulator() {
    accumulated.push(arguments);
    if (!active) {
      active = true;
      while (accumulated.length) {
        value = f.apply(this, accumulated.shift());
      }
      active = false;
      return value;
    }
  }
}

var sum = tco(function (x, y) {
  if (y > 0) {
    return sum(x + 1, y - 1)
  } else {
    return x;
  }
})
sum(1, 100000)

function clownsEverywhere(p1,p2,) {

}












/***
 *
 *
 *                                                    __----~~~~~~~~~~~------___
 *                                   .  .   ~~//====......          __--~ ~~
 *                   -.            \_|//     |||\\  ~~~~~~::::... /~
 *                ___-==_       _-~o~  \/    |||  \\            _/~~-
 *        __---~~~.==~||\=_    -_--~/_-~|-   |\\   \\        _/~
 *    _-~~     .=~    |  \\-_    '-~7  /-   /  ||    \      /
 *  .~       .~       |   \\ -_    /  /-   /   ||      \   /
 * /  ____  /         |     \\ ~-_/  /|- _/   .||       \ /
 * |~~    ~~|--~~~~--_ \     ~==-/   | \~--===~~        .\
 *          '         ~-|      /|    |-~\~~       __--~~
 *                      |-~~-_/ |    |   ~\_   _-~            /\
 *                           /  \     \__   \/~                \__
 *                       _--~ _/ | .-~~____--~-/                  ~~==.
 *                      ((->/~   '.|||' -_|    ~~-/ ,              . _||
 *                                 -_     ~\      ~~---l__i__i__i--~~_/
 *                                 _-~-__   ~)  \--______________--~~
 *                               //.-~~~-~_--~- |-------~~~~~~~~
 *                                      //.-~~~--\
 *                               神兽保佑
 *                              代码无BUG!
 */
