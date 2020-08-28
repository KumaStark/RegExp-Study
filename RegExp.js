let str = "abc123def456hijabc123def456hij";
/**
 * RegExp对象的test和exec方法，以及lastIndex属性
 * 设置全局查找标记"g"之后，字符串中有多个匹配目标时，会循环查找
 * 当一个循环结束时（出现一次查找不到目标的情况后），lastIndex会被重置为0
 */
// let reg1 = /\d+/g;
// console.log("lastIndex = ",reg1.lastIndex);
// console.log("Reg Test Result: ",reg1.test(str));
// console.log("lastIndex = ",reg1.lastIndex);
// console.log("Reg Exec Result: ",reg1.exec(str));
// console.log("lastIndex = ",reg1.lastIndex);
// console.log("Reg Exec Result: ",reg1.exec(str));
// console.log("lastIndex = ",reg1.lastIndex);
// console.log("Reg Exec Result: ",reg1.exec(str));

/**
 * 字符串的split、search、match和replace方法
 * 其中：
 * - split  => 会以所有匹配到的目标来拆分字符串
 * - search => 
 */
let reg2 = /def/;
console.log(str.split(reg2));
console.log(str.search(reg2));
console.log(str.search(reg2));
console.log(str.match(reg2));
let reg3 = /def/g;
console.log(str.match(reg3));
let reg4 = /\d/g;
console.log(str.replace(reg4,"*"));
str.replace(reg4,(arg,a2,a3,a4)=>{
    console.log(arg,a2,a3,a4);
    return "*";
});
console.log(str);