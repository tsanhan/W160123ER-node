const fn1 = () => console.log("exports.js 1");
const fn2 = () => console.log("exports.js 2");

exports.fn1 = fn1;
exports.fn2 = fn2;

const a = {};

a.asd = 1;
