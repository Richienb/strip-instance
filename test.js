const test = require("ava")
const stripInstance = require(".")

class NestedClass {
	constructor() {
		this.testValue = "Hello World!"
	}
}

class TestClass {
	constructor() {
		this.testValue = "Hello World!"
		this.nestedClass = new NestedClass()
	}
}

test("main", (t) => {
	t.deepEqual(stripInstance(new TestClass()), { testValue: "Hello World!", nestedClass: { testValue: "Hello World!" } })
})
