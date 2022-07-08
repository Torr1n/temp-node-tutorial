// to get started using packages from npm do npm init -y (or no y if you want to customize) then npm i (package name)

const _ = require("lodash");

const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);
