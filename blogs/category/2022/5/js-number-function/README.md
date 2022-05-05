---
title: javascript 数字方法汇总
date: 2022-05-05
categories:
  - javascript
tags:
  - number
---

## 把数字转换成字符串 number.toString()

把数字转换成字符串

```js
let number = 1;
console.log(number.toString());
// "1"
```

## 返回四舍五入并使用指数计数法的字符串 number.toExponential()

返回字符串值，它包含已被四舍五入并使用指数计数法的数字

```js
let number = 9.656;
console.log(number.toExponential(2));
// 9.66e+0
console.log(number.toExponential(4));
// 9.6560e+0
```

## 返回指定位数小数的字符串 number.toFixed()

返回字符串值，它包含了指定位数小数的数字

```js
let number = 9.656;
console.log(number.toFixed(0));
// 10
console.log(number.toFixed(2));
// 9.66
console.log(number.toFixed(4));
// 9.6560
console.log(number.toFixed(6));
// 9.656000
```

## 返回指定长度的字符串值 number.toPrecision()

返回字符串值，它包含了指定长度的数字

```js
let number = 9.656;
console.log(number.toPrecision());
// 9.656
console.log(number.toPrecision(2));
// 9.7
console.log(number.toPrecision(4));
// 9.656
console.log(number.toPrecision(6));
// 9.65600
```

## 以数值返回数值 number.valueOf()

以数值返回数值

```js
let number = "12";
console.log(number.valueOf());
// 12
```

## 字符串转数字 Number()

字符串转数字

```js
let number = "1.734";
console.log(Number(number));
// 1.734
```

## 字符串返回整数 parseInt()

返回整数 只返回首个数字 如果无法转换为数值，则返回 NaN (Not a Number)

```js
let number = "1.734 2";
console.log(parseInt(number));
// 1
```

## 字符串返回整数 parseFloat()

返回整数 只返回首个数字 如果无法转换为数值，则返回 NaN (Not a Number)

```js
let number = "1.734 2";
console.log(parseInt(number));
// 1
```
