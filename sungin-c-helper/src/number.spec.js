const {plus} = require('./number');

describe('number', () => {
    it('1 + 2', () => {
        expect(plus(1,2)).toBe(3);
    });
});