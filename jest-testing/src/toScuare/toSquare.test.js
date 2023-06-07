const toSquare = require('./toSquare');

describe('toSquare', () => {
	test('', () => {
		const spyMathPow = jest.spyOn(Math, 'pow');
		toSquare(2);
		expect(spyMathPow).toBeCalledTimes(1);
	});
});
