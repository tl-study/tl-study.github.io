---
title: javascript 数组方法汇总
date: 2022-05-05
categories:
  - javascript
tags:
  - array
---

## 把数组转换成字符串 array.toString()

把数组转换成字符串

```js
let array = ["1", "2", "3", "4"];
console.log(array.toString());
// 1,2,3,4
```

## 将数组元素拼接为一个字符串 array.join("\*")

将数组元素拼接为一个字符串

```js
let array = ["1", "2", "3", "4"];
console.log(array.join());
// 1234
console.log(array.join("*"));
// 1*2*3*4
```

## 从数组中删除最后一个元素 array.pop()

从数组中删除最后一个元素

```js
let array = ["1", "2", "3", "4"];
console.log(array.pop());
// ["1", "2", "3"] 删除了最后一个元素4
```

## 从数组最后添加一个新的元素 array.push(element)

从数组最后添加一个新的元素

```js
let array = ["1", "2", "3", "4"];
console.log(array.push("5"));
// ["1", "2", "3", "5"];
```

## 从数组中删除第一个元素 array.shift()

删除首个数组元素

```js
let array = ["1", "2", "3", "4"];
console.log(array.shift());
// ["2", "3", "4"]
```

## 从数组开头向数组中添加新元素 array.unshift()

从数组开头向数组中添加新元素

```js
let array = ["1", "2", "3", "4"];
console.log(array.unshift("0"));
// ["0", "1", "2", "3", "4"]
```

## 更改元素 array[number]

根据下标获取元素并赋值

```js
let array = ["1", "2", "3", "4"];
array[0] = "0";
console.log(array);
// ["0", "2", "3", "4"]
```

## 删除元素 delete array

使用 delete 会在数组留下未定义的空洞(undefined)。请使用 pop() 或 shift() 取而代之

```js
let array = ["1", "2", "3", "4"];
delete array[1];
console.log(array);
// ["1", undefined, "3", "4"]
```

## 拼接数组 array.splice()

向数组添加新项

```js
let array = ["1", "2", "3", "4"];
array.splice(2, 0, "12");
console.log(array);
// ["1", "2", "3", "12", "4"]
// 第一个参数（2）定义了应添加新元素的位置（拼接）。
// 第二个参数（0）定义应删除多少元素。
// 其余参数（“12”）定义要添加的新元素。
```

删除元素

```js
let array = ["1", "2", "3", "4"];
array.splice(2, 1);
console.log(array);
// ["1", "2", "4"]   无其余参数时为删除元素
```

## 合并数组 array.concat()

合并现有数组为新数组

```js
let array1 = ["1", "2"];
let array2 = ["3", "4"];
console.log(array1.concat(array2));
// ["1", "2", "3", "4"]
```

## 裁剪数组 array.slice()

裁剪数组

```js
let array = ["1", "2", "3", "4"];
console.log(array.slice(1));
// ["1", "3", "4"]
```

## 排序 array.sort()

数组排序

```js
let array = ["1", "3", "21", "4"];
console.log(array.sort());
// ["1", "21", "3", "4"] 按字母排序
```

数组按值排序

```js
let array = ["3", "2", "1", "4"];
console.log(
  array.sort(function (a, b) {
    return a - b;
  })
);
// ["1", "2", "3", "4"] 按值排序
// 比值函数 function (a, b) {return a - b}
// a,b代表元素值
```

## 反转数组 array.reverse()

反转数组

```js
let array = ["1", "2", "3", "4"];
console.log(array.reverse());
// ["4", "3", "2", "1"]
```

## 迭代数组 array.forEach()

迭代数组

```js
let array = ["1", "2", "3", "4"];
console.log(
  array.forEach((element) => {
    console.log(element);
  })
);
// element 输出 4 3 2 1
```

## 迭代数组 array.map()

map 返回一个新数组

```js
let array = [1, 2, 3, 4];
console.log(
  array.map((element) => {
    return element * 2;
  })
);
// [2, 4, 6, 8]
```

## 迭代数组 array.filter()

返回符合条件的元素组成新数组

```js
let array = [1, 2, 3, 4];
console.log(
  array.filter((element) => {
    return element > 2;
  })
);
// [3, 4]
```

## 迭代数组 array.reduce()

返回元素之和

```js
let array = [1, 2, 3, 4];
console.log(
  array.reduce((element, total) => {
    return total + element;
  })
);
// 10  total:数组总数
```

## 迭代数组 array.reduceRight()

返回元素之和（从右到左相加）

```js
let array = [1, 2, 3, 4];
console.log(
  array.reduceRight((element, total) => {
    return total + element;
  })
);
// 10
```

## 迭代数组 array.every()

检查数组值是否通过测试

```js
let array = [1, 2, 3, 4];
console.log(
  array.every((element) => {
    return element > 2;
  })
);
// [3, 4]
```

## 迭代数组 array.some()

检查数组值是否通过测试

```js
let array = [1, 2, 3, 4];
console.log(
  array.some((element) => {
    return element > 2;
  })
);
// [3, 4]
```

## 搜索数组 array.indexOf()

在数组中搜索元素值并返回其下标，找不到元素返回 -1

```js
let array = [1, 2, 3, 4];
console.log(array.indexOf((2));
// 下标1
```

## 搜索数组 array.lastIndexOf()

在数组结尾开始搜索元素值并返回其下标，找不到元素返回 -1

```js
let array = [1, 2, 3, 4];
console.log(array.indexOf((2));
// 下标1
```

## 搜索数组 array.find()

返回通过测试函数的第一个数组元素的值

```js
let array = [1, 2, 3, 4];
console.log(array.find((value=>{
  return value > 2
}));
// 3 返回大于2的第一个元素
```

## 搜索数组 array.findIndex()

返回通过测试函数的第一个数组元素的值的下标

```js
let array = [1, 2, 3, 4];
console.log(array.find((value=>{
  return value > 2
}));
// 2 返回大于2的第一个元素的下标
```
