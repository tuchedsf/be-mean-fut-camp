'use strict'

module.exports = {
	type: String
	, unique: true
	, validate: require('../quarks/quark-isEmail')
	, set: require('./../quarks/quark-toLowerCase')
	, index: true
	, required: true
}