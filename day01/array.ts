const numberArr = [1, 2, 3];
// 这时候你把鼠标放在numberArr上面可以看出，这个数组的类型就是 number 类型。这是 TypeScript 通过类型推断自己推断出来的。
// 如果你要显示的注解，也非常简单，可以写成下面的形式。
const numberArr1: number[] = [1, 2, 3];
// 同样道理，如果你的数组各项是字符串，你就可以写成这样。
const stringArr: string[] = ["a", "b", "c"];
// 也就是说你可以定义任意类型的数组，比如是undefined。
const undefinedArr: undefined[] = [undefined, undefined];

// 这时候问题来了，如果数组中有多种类型，比如既有数字类型，又有字符串的时候。那我们要如何定义那。
// 很简单，只要加个()，然后在里边加上 | 就可以了，具体看代码。
const arr: (number | string)[] = [1, "string", 2];


// 数组中对象类型的定义
const xiaoJieJiesa0: { name: string, age: Number }[] = [
  { name: "刘英", age: 18 },
  { name: "谢大脚", age: 28 },
];
// 这种形式看起来比较麻烦，而且如果有同样类型的数组，写代码也比较麻烦，
// TypeScript 为我们准备了一个概念，叫做类型别名(type alias)。
// 比如刚才的代码，就可以定义一个类型别名，定义别名的时候要以type关键字开始。现在定义一个Lady的别名。
type Lady = { name: string, age: Number };
const xiaoJieJiesa1: Lady[] = [
  { name: "刘英", age: 18 },
  { name: "谢大脚", age: 28 },
];

// 用类进行定义可以吗？答案是可以的，比如我们定义一个Madam的类,然后用这个类来限制数组的类型也是可以的。
class Madam {
  name: string;
  age: number;
}

const xiaoJieJiesa3: Madam[] = [
  { name: "刘英", age: 18 },
  { name: "谢大脚", age: 28 },
];
// 可以看到结果，我们这么写也是完全可以的。
