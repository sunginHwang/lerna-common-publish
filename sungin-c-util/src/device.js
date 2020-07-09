const device = require("current-device");

function getDeviceType() {
    console.log(device);
    console.log('121');
    return device.type
}

module.exports = {
    getDeviceType
}
