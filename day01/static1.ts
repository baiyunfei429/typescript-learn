//错误代码
// let count: number = 1;
// count = 'true';

// 自定义静态类型
interface XiaoJieJie {
  uname: string;
  age: number;
}

const xiaohong: XiaoJieJie = {
  uname: "小红",
  age: 18,
};

// TypeScript 基础静态类型和对象类型
// 在 TypeScript 静态类型分为两种，一种是基础静态类型，一种是对象类型，

// 基础静态类型非常简单，只要在声明变量的后边加一个:号，然后加上对应的类型哦。比如下面的代码，就是声明了一个数字类型的变量，叫做count。
const count : number = 918;
const myName : string = 'jspang'
// null,undefined,symbol,boolean，void这些都是最常用的基础数据类型，

// 对象类型
const xiaoJieJie1 : {
  name: string,
  age: number,
} = {
  name: "大脚",
  age: 18,
};

console.log(xiaoJieJie1.name);
const xiaoJieJies: String[] = ["谢大脚", "刘英", "小红"];
const jianXiaoJieJie: () => string = () => {
  return "大脚";
};
// 总结一下对象类型可以有几种形式：

// 对象类型
// 数组类型
// 类类型
// 函数类型
// 这几种形式我们在TypeScript里叫做对象类型。