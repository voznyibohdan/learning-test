const delay = require('./delay');

describe('delay', () => {
	test('', async () => {
		const result = await delay(() => 5 + 5, 2000);
		expect(result).toBe(10);
	})
})