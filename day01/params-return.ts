function getTotal1(one: number, two: number) {
  return one + two + "";
}
const total1 = getTotal1(1, 2); // 这时候total的值就不是number类型了，但是不会报错。
// const total4: number = getTotal1(1, 2); 
// 如上，直接给total一个类型注解，这样写虽然可以让编辑器报错，但是这还不是很高明的算法，
// 因为你没有找到错误的根本，这时错误的根本是getTotal()函数的错误，所以合适的做法是给函数的返回值加上类型注解，代码如下

function getTotal3(one: number, two: number): number {
  return one + two ;
}
const total3 : number = getTotal3(1, 2);

// 函数无返回值时定义方法
function sayHello(): void {
  console.log("hello world");
}
// 如果这样定义后，你再加入任何返回值，程序都会报错。

// never 返回值类型
// 如果一个函数是永远也执行不完的，就可以定义返回值为never，那什么样的函数是永远也执行不完的那?我们先来写一个这样的函数(比如执行执行的时候，抛出了异常，这时候就无法执行完了)。
function errorFuntion(): never {
  throw new Error();
  console.log("Hello World");
}
// 还有一种是一直循环，也是我们常说的死循环，这样也运行不完，比如下面的代码：
function forNever(): never {
  while (true) {}
  console.log("Hello JSPang");
}

// 函数参数为对象(解构)时
// 这个坑有很多小伙伴掉下去过，就是当一个函数的参数是对象时，我们如何定义参数对象的属性类型。我先写个一般javaScript的写法。
function addp0({ one, two }) {
  return one + two;
}
const totalp0 = addp0({ one: 1, two: 2 });
// 在浏览器中你会看到直接报错了，意思是total有可能会是任何类型，那我们要如何给这样的参数加类型注解那？最初你可能会这样写。

function addp1({ one: number, two: number }) {
  return one + two;
}
const totalp1 = addp1({ one: 1, two: 2 });
// 你在编辑器中会看到这种写法是完全错误的。那正确的写法应该是这样的。

function addp2({ one, two }: { one: number, two: number }): number {
  return one + two;
}
const threep2 = addp2({ one: 1, two: 2 });

// 如果参数是对象，并且里边只有一个属性时，我们更容易写错。
// 错误代码如下：
function getNumberp1({ one }: number) {
  return one;
}
const onep1 = getNumberp1({ one: 1 });

// 看着好像没什么问题，但实际这是有问题的，正确的代码应该时这样的。
function getNumber({ one }: { one: number }): number {
  return one;
}

const onep2 = getNumber({ one: 1 });
// 这样写才是正确的写法，小伙伴们赶快动手练习一下吧，刚开始学你可能会觉的很麻烦，但是你写的时间长了，你就会发现有规矩还是好的。人向往自由，缺鲜有人能屈驾自由。
