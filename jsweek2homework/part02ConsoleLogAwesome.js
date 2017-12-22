// This is for step 3 jsweek2 homework, item #2, regarding console.log('I'm awesome');//
"use strict"
// Problem has manifested syntax error below:

//console.log('I'm awesome');
//SyntaxError: missing ) after argument list
//at createScript(vm.js: 80: 10)
//at Object.runInThisContext(vm.js: 139: 10)
//at Module._compile(module.js: 599: 28)
//at Object.Module._extensions..js(module.js: 646: 10)
//at Module.load(module.js: 554: 32)
//at tryModuleLoad(module.js: 497: 12)
//at Function.Module._load(module.js: 489: 3)
//at Function.Module.runMain(module.js: 676: 10)
//at startup(bootstrap_node.js: 187: 16)
//at bootstrap_node.js: 608: 3

console.log("I'm awesome");

//Problem was because the apostrophe ['] in "I'm awesome" interfered with the code. 
//Solution: substituted apostrophe with inverted commas [""]
//Note: I am not entirely sure where/how to even begin googling this. But I took one look and the answer came to me