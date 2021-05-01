require("./index.scss")
import afn from "./indexa.js"// 使用babel配置打包的js模块。

afn();
let count = 0;
function hello(name) {
    console.log(`hello ${name}`);
    console.log(`\\d ${count}`)
}
hello('webpack!!!');

// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }

if (process.env.NODE_ENV == "development") {
    console.log("this mode is  development");
} else {
    console.log("this mode is  production");
}
