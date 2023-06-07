const validateValue = require('./validate-value');

describe('validateValue.js', () => {
	test('correct value', () => {
		expect(validateValue(50)).toBe(true);
	});

	test('more than the correct value', () => {
		expect(validateValue(101)).toBe(false);
	});

	test('less than the correct value', () => {
		expect(validateValue(-1)).toBe(false);
	});
});
