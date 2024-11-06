# ECMAScript 各版本特性

## 在线规范导航

在线规范统一托管在`262.ecma-international.org`网站上，具体地址为`网站地址加版本号`。

例如：

`ES6`的规范，访问地址为：`https://262.ecma-international.org/6.0/`  
`ES7`的规范，访问地址为：`https://262.ecma-international.org/7.0/`  
`ES14`的规范，访问地址为：`https://262.ecma-international.org/14.0/`

- [ES5: https://262.ecma-international.org/5.1/](https://262.ecma-international.org/5.1/)
- [ES6： https://262.ecma-international.org/6.0/](https://262.ecma-international.org/6.0/)
- [ES7： https://262.ecma-international.org/7.0/](https://262.ecma-international.org/7.0/)
- [ES8： https://262.ecma-international.org/8.0/](https://262.ecma-international.org/8.0/)
- [ES9： https://262.ecma-international.org/9.0/](https://262.ecma-international.org/9.0/)
- [ES10： https://262.ecma-international.org/10.0/](https://262.ecma-international.org/10.0/)
- [ES11： https://262.ecma-international.org/11.0/](https://262.ecma-international.org/11.0/)
- [ES12： https://262.ecma-international.org/12.0/](https://262.ecma-international.org/12.0/)
- [ES13： https://262.ecma-international.org/13.0/](https://262.ecma-international.org/13.0/)
- [ES14： https://262.ecma-international.org/14.0/](https://262.ecma-international.org/14.0/)
- [ES15： https://262.ecma-international.org/15.0/](https://262.ecma-international.org/15.0/)

## 各版本特性

- [版本发布记录](https://github.com/tc39/ecma262/releases)
- [Finished Proposals](https://github.com/tc39/proposals/blob/main/finished-proposals.md)

### ES6

TODO: 待完善

### ES7 Jun, 2016

- [Array.prototype.includes](https://github.com/tc39/proposal-Array.prototype.includes)
  - [MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)
- [Exponentiation operator 【指数运算符 (使用 \*\* 运算符)】](https://github.com/tc39/proposal-exponentiation-operator)

### ES8 Jun, 2017

- [Object.values/Object.entries](https://github.com/tc39/proposal-object-values-entries)
  - Object.values()
  - Object.entries()
- [String padding](https://github.com/tc39/proposal-string-pad-start-end)
  - String.prototype.padStart()
  - String.prototype.padEnd()
- [Object.getOwnPropertyDescriptors](https://github.com/tc39/proposal-object-getownpropertydescriptors)
- [Trailing commas in function parameter lists and calls【函数参数尾逗号】](https://github.com/tc39/proposal-trailing-function-commas)
- [Async functions【异步函数】](https://github.com/tc39/proposal-async-await)
  - [参考: async await 规范](https://tc39.es/proposal-async-await/)
- [Shared memory and atomics【共享内存和原子】](https://github.com/tc39/proposal-ecmascript-sharedmem)
  - [MDN Atomics](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Atomics)

### ES9 Jun, 2018

- [Lifting template literal restriction](https://github.com/tc39/proposal-template-literal-revision)
  - [参考：Template Literal Revision](https://tc39.es/proposal-template-literal-revision/)
- [s (dotAll) flag for regular expressions【正则表达式 s 修饰符】](https://github.com/tc39/proposal-regexp-dotall-flag)
- [RegExp named capture groups](https://github.com/tc39/proposal-regexp-named-groups)
- [Rest/Spread Properties【剩余参数和扩展运算符】](https://github.com/tc39/proposal-object-rest-spread)
- [RegExp Lookbehind Assertions](https://github.com/tc39/proposal-regexp-lookbehind)
- [RegExp Unicode Property Escapes](https://github.com/tc39/proposal-regexp-unicode-property-escapes)
- [Promise.prototype.finally](https://github.com/tc39/proposal-promise-finally)
- [Asynchronous Iteration](https://github.com/tc39/proposal-async-iteration)

### ES10 Jun, 2019

- [Optional catch binding](https://github.com/tc39/proposal-optional-catch-binding)
- [JSON superset](https://github.com/tc39/proposal-json-superset)
- [Symbol.prototype.description](https://github.com/tc39/proposal-Symbol-description)
- [Function.prototype.toString revision](https://github.com/tc39/Function-prototype-toString-revision)
- [Object.fromEntries](https://github.com/tc39/proposal-object-from-entries)
- [Well-formed JSON.stringify](https://github.com/tc39/proposal-well-formed-stringify)
- [String.prototype.{trimStart,trimEnd}](https://github.com/tc39/proposal-string-left-right-trim)
  - String.prototype.trim()
  - String.prototype.trimStart()
  - String.prototype.trimEnd()
- [Array.prototype.{flat,flatMap}](https://github.com/tc39/proposal-flatMap)

### ES11 Jun 18, 2020

- [String.prototype.matchAll](https://github.com/tc39/proposal-string-matchall)
- [import()](https://github.com/tc39/proposal-dynamic-import)
- [BigInt](https://github.com/tc39/proposal-bigint)
- [Promise.allSettled](https://github.com/tc39/proposal-promise-allSettled)
- [globalThis](https://github.com/tc39/proposal-global)
- [for-in mechanics](https://github.com/tc39/proposal-for-in-order)
- [Optional Chaining【可选链运算符 (使用 ?. 运算符)】](https://github.com/tc39/proposal-optional-chaining)
- [Nullish coalescing Operator 【空值合并运算符 (使用 ?? 运算符)】](https://github.com/tc39/proposal-nullish-coalescing)
- [import.meta](https://github.com/tc39/proposal-import-meta)

### ES12 Jul 2, 2021

- [String.prototype.replaceAll](https://github.com/tc39/proposal-string-replaceall)
- [Promise.any](https://github.com/tc39/proposal-promise-any)
- [WeakRefs](https://github.com/tc39/proposal-weakrefs)
- [Logical Assignment Operators【逻辑赋值运算符 (使用 &&= 和 ||= 运算符)】](https://github.com/tc39/proposal-logical-assignment)
- [Numeric separators【数字分隔符】](https://github.com/tc39/proposal-numeric-separator)

### ES13 Jun 23, 2022

- [Class Fields (Private instance methods and accessors, Class Public Instance Fields & Private Instance Fields, Static class fields and private static methods)](https://github.com/tc39/proposal-private-methods)
- [RegExp Match Indices](https://github.com/tc39/proposal-regexp-match-indices)
- [Top-level await【顶层 await】](https://github.com/tc39/proposal-top-level-await)
- [Ergonomic brand checks for Private Fields](https://github.com/tc39/proposal-private-fields-in-in)
- [.at()](https://github.com/tc39/proposal-relative-indexing-method)
- [Accessible Object.prototype.hasOwnProperty](https://github.com/tc39/proposal-accessible-object-hasownproperty)
- [Class Static Block](https://github.com/tc39/proposal-class-static-block)
- [Error Cause](https://github.com/tc39/proposal-error-cause)

### ES14 Jun 30, 2023

- [Array find from last](https://github.com/tc39/proposal-array-find-from-last)
- [Hashbang Grammar](https://github.com/tc39/proposal-hashbang)
- [Symbols as WeakMap keys](https://github.com/tc39/proposal-symbols-as-weakmap-keys)
- [Change Array by Copy](https://github.com/tc39/proposal-change-array-by-copy)

### ES15 Jun 27, 2024

- [Well-Formed Unicode Strings](https://github.com/tc39/proposal-is-usv-string)
- [Atomics.waitAsync](https://github.com/tc39/proposal-atomics-wait-async)
- [RegExp v flag with set notation + properties of strings](https://github.com/tc39/proposal-regexp-v-flag)
- [Resizable and growable ArrayBuffers](https://github.com/tc39/proposal-resizablearraybuffer)
- [Array Grouping](https://github.com/tc39/proposal-array-grouping)
- [Promise.withResolvers](https://github.com/tc39/proposal-promise-with-resolvers)
- [ArrayBuffer transfer](https://github.com/tc39/proposal-arraybuffer-transfer)

### ES16

- [Duplicate named capture groups](https://github.com/tc39/proposal-duplicate-named-capturing-groups)
- [New Set methods](https://github.com/tc39/proposal-set-methods)
- [RegExp Modifiers](https://github.com/tc39/proposal-regexp-modifiers)
- [Import Attributes](https://github.com/tc39/proposal-import-attributes)
- [JSON Modules](https://github.com/tc39/proposal-json-modules)
- [Sync Iterator helpers](https://github.com/tc39/proposal-iterator-helpers)
- [Promise.try](https://github.com/tc39/proposal-promise-try)

## 资源链接

- [https://tc39.es/](https://tc39.es/)
- [MDN JavaScript 参考](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference)
- [babel 插件列表](https://babeljs.io/docs/plugins-list)
- [Finished Proposals](https://github.com/tc39/proposals/blob/main/finished-proposals.md)
- [维基百科 ECMAScript](https://zh.wikipedia.org/wiki/ECMAScript)

## 仓库信息

此文档仓库位置：[GitHub](https://github.com/dadaowuma/es-feature)

```bash
$ git clone https://github.com/dadaowuma/es-feature.git

$ cd es-feature

$ npm run dev # http://localhost:5173/es-feature/
```
