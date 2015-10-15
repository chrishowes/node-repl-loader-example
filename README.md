# node-repl-loader-example

## Try this out
* `npm install -g webpack && npm install`
* `webpack`
* `node build/index.js`

Take a quick look at index.js and exportsObject.js to get a sense of the structure of the app

Then in the REPL:
* `exportsObject.a` exportsObject is a var in index.js
* `ns exportsObject` switch to the exportsObject "namespace"
* `this.a = 99` this WILL change the value of exportsObject.a
* `ns` to go back to the main namespace
* `exportsObject.a` = 99. Success!
