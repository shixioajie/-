const path = require("path");

// console.log(path.resolve());
// console.log(path.join(__dirname,'dist'));
const paths = path.join(__dirname,'./dist').split('\\').join('/');
console.log(paths)

const config = {
    entry:"./src/index.js",
    output:{
        filename: "bundle2.js",
        path:paths
    }
}

module.exports = config;

