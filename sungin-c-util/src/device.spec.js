const {getDeviceType} = require('./device');

describe('device.js', () => {
    it('is pc device type', () => {
        const deviceType = getDeviceType();
        expect(deviceType).toBe('desktop');
    });
});