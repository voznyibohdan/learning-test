const mapArrToString = require('./mapArrayToString');

describe('mapArrayToString', () => {
	beforeAll(() => {});

	beforeEach(() => {});

	test('correct value', () => {
		expect(mapArrToString([1, 2, 3])).toEqual(['1', '2', '3']);
	});

	afterEach(() => {});

	afterAll(() => {});
});
