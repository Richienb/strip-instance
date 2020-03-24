/**
 * Remove class instances from objects.
 * @param object The object to strip.
 * @example
 * ```
 * const stripInstance = require("strip-instance");
 *
 * const someClass = new (class SomeClass {
 * 	constructor() {
 * 		this.value = "a";
 * 	}
 * })();
 *
 * console.log(someClass);
 * //=> SomeClass { value: "a" }
 *
 * stripInstance(someClass);
 * //=> { value: "a" }
 * ```
*/
declare function stripInstance<T extends object>(object: T): T

export = stripInstance
