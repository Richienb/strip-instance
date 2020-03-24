# strip-instance [![Travis CI Build Status](https://img.shields.io/travis/com/Richienb/strip-instance/master.svg?style=for-the-badge)](https://travis-ci.com/Richienb/strip-instance)

Remove class instances from objects.

[![NPM Badge](https://nodei.co/npm/strip-instance.png)](https://npmjs.com/package/strip-instance)

## Install

```sh
npm install strip-instance
```

## Usage

```js
const stripInstance = require("strip-instance");

const someClass = new (class SomeClass {
	constructor() {
		this.value = "a";
	}
})();

console.log(someClass);
//=> SomeClass { value: "a" }

stripInstance(someClass);
//=> { value: "a" }
```

## API

### stripInstance(object)

#### object

Type: `object or class instance`

The object to strip.
