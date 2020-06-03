const device = require("current-device");

function getDeviceType() {
    console.log(device);
    return device.type
}

module.exports = {
    getDeviceType
}