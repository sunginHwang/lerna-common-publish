const device = require("current-device");

function getDeviceType() {
    console.log(device);
    console.log(1);
    return device.type
}

module.exports = {
    getDeviceType
}
