---
title: javascript 字符串方法汇总
date: 2022-04-27
categories:
  - javascript
tags:
  - javascript
---

## string.length

返回字符串长度

```js
let string = "1234";
console.log(string.length);
// 4
```

## string.indexOf(string,strart)

查找字符串中的字符首次出现时的下标（参数 start 查找的起始位置（可省略））

```js
let string = "this is string";
console.log(string.indexOf("is"));
// 6  首次出现下标为6  若字符串中无该字符返回-1
```

## string.lastIndexOf(string,strart)

查找字符串中的字符最后一次出现时的下标（参数 start 查找的起始位置（可省略））

```js
let string = "this is string and is english";
console.log(string.lastIndexOf("is"));
// 20  最后一次出现下标为20  若字符串中无该字符返回-1
```

## string.search(string)

查找字符串中的字符首次出现时的下标（条件可为正则表达式）

```js
let string = "this is string";
console.log(string.search("is"));
// 6  首次出现下标为6  若字符串中无该字符返回-1
console.log(string.search(/is/));
// 6  首次出现下标为6  若字符串中无该字符返回-1
```

## string.slice(start,end)

截取字符串（start:开始的下标，end:结束的下标（可省略，省略时由开始位置截取至字符串最后位置））
参数可为负数

```js
let string = "this is string";
console.log(string.slice(0, 2));
// thi  截取下标0,1,2位置的字符串
console.log(string.slice(-5, -1));
// trin  从字符串最后开始截取字符串
```

## string.substring(start,end)

截取字符串（start:开始的下标，end:结束的下标（可省略，省略时由开始位置截取至字符串最后位置））
类似于 slice 但参数不可为负数

```js
let string = "this is string";
console.log(string.substring(0, 2));
// thi  截取下标0,1,2位置的字符串
```

## string.substr(start,length)

截取字符串（start:开始的下标，length:需要截取的长度（可省略，省略时由开始位置截取至字符串最后位置））
参数（start）可为负数

```js
let string = "this is string";
console.log(string.substring(0, 2));
// thi  截取下标0,1,2位置的字符串
```

## string.replace(str,replaceStr)

替换字符串（str:被替换的字符串，replaceStr:替换的字符串）
参数（str）可使用正则代替，对大小写敏感

```js
let string = "this is string";
console.log(string.replace("is", "are"));
// this are string  替换相应字符
```

## string.toUpperCase()

字符串转换大写
参数可使用正则，对大小写敏感

```js
let string = "string";
console.log(string.toUpperCase());
// STRING  小写转换成大写
```

## string.toLowerCase()

字符串转换小写
参数可使用正则，对大小写敏感

```js
let string = "STRING";
console.log(string.toUpperCase());
// string  大写转换成小写
```

## string.concat()

连接两个或多个字符串

```js
let string = "this is";
let string1 = "string";
console.log(string.concat("", string2));
// this is string  连接成一个字符串
```

## string.trim()

删除字符串两端的空格

```js
let string = " this is ";
console.log(string.trim());
// this is 去掉两端的空格
```

## string.charAt()

返回字符串中指定下标位置的字符

```js
let string = "this is";
console.log(string.charAt(0));
// t 返回下标为0的字符
```

## string.charCodeAt()

返回字符串中指定索引的字符 unidoce 编码

[unidoce 编码](https://www.ibm.com/docs/zh/db2/11.5?topic=support-unicode-character-encoding)

```js
let string = "this is";
console.log(string.charCodeAt(0));
// 116 返回下标为0的字符的unidoce编码
```

<!--  -->

## string.split()

将字符串转换为数组
可使用正则

```js
let string = "this is";
console.log(string.split(" "));
// ['this','is'] 以空格分隔字符串组成数组
```
