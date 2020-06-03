const {
    formatToAmount,
    formatToNumber,
    digit,
    rn2br
} = require('./string');

describe('formatToNumber', () => {
    it('is adding comma', () => {
        expect(formatToAmount(123456)).toBe('123,456')
    })
});

describe('formatToNumber', () => {
    it('convert commaNumber to only numberType', () => {
        expect(formatToNumber('12,345')).toBe(12345)
    })

    it('convert stringNumber to  numberType', () => {
        expect(formatToNumber('12345')).toBe(12345)
    })
});

describe('digit', () => {
    it('over 10 use digit', () => {
        expect(digit(11)).toBe(11);
    })

    it('10 convert digit', () => {
        expect(digit(10)).toBe(10)
    })

    it('onder 10 digit', () => {
        expect(digit(8)).toBe('08')
    })

    it('0 to digit', () => {
        expect(digit(0)).toBe('00')
    })
});

describe('digit', () => {
    it('over 10 use digit', () => {
        expect(digit(11)).toBe(11);
    })

    it('10 convert digit', () => {
        expect(digit(10)).toBe(10)
    })

    it('onder 10 digit', () => {
        expect(digit(8)).toBe('08')
    })

    it('0 to digit', () => {
        expect(digit(0)).toBe('00')
    })
});

describe('rn2br', () => {
    it('convert \r', () => {
        expect(rn2br('a\rb')).toBe('a<br/>b');
    })

    it('convert \n', () => {
        expect(rn2br('a\nb')).toBe('a<br/>b');
    })

    it('convert \r\n', () => {
        expect(rn2br('a\r\nb')).toBe('a<br/>b');
    })

    it('convert \n\r', () => {
        expect(rn2br('a\n\rb')).toBe('a<br/>b');
    })
});