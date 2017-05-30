'use strict'

module.exports = {
	type: String
	, set: require('./../quarks/quark-toLowerCase')
	, index: true
	, required: true
  , default: 'user'
}
