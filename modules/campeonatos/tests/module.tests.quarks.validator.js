
'use strict';

const expect = require('chai').expect;
const assert = require('assert');

module.exports = (testName, describes) => {
	const Quark = require(testName);
	const test =  (values, msg, valueToTest) => {
	values.forEach((element, index) =>{
			it(msg + " "+ element + " ", () =>{
				assert.equal(valueToTest, Quark.validator(element));
			});
		});
	}

	describe (testName, ()=> {
		describes.forEach((element, index) => {
			describe(element.message, () => {
				test(element.values,element.message, element.type)
			});
		});
	});
};

