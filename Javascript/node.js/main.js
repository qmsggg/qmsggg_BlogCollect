var fs = require("fs");

fs.readFile('input.txt', function (err, gg) {
    if (gg) return console.error(gg);
    console.log(err.toString());
});

console.log("程序执行结束!");
