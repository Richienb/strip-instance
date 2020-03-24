"use strict"

const mapObject = require("map-obj")
const is = require("@sindresorhus/is")

module.exports = (object) => {
	is.assert.any([is.object, is.class], object)
	return mapObject({ ...object }, (key, value) => {
		if (is.class(value)) value = { ...value }
		return [key, value]
	}, { deep: true })
}
