let count = 0;
function hello(name) {
    console.log(`hello ${name}`);
    console.log(`\\d ${count}`)
}
hello('webpack');

for (let i = 0n; i < 10n; i++) {
    console.log(i);
}
