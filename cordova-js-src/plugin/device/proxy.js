var tizen = require('cordova/platform');

module.exports = {
    getDeviceInfo: function(success, error) {
        setTimeout(function(){
            success({
                cordova: tizen.cordovaVersion,
                platform: 'sectv-tizen',
                model: webapis.productinfo.getModelCode(), // "15_HAWKP_UHD"
                version: webapis.productinfo.getFirmware(), // "T-HKPAKUC-0017.10"
                uuid: webapis.productinfo.getDuid(), // "U7CJYBPYKOKD6"
                manufacturer : "Samsung Tizen TV"
            });
        },0);
    }
};

require("cordova/exec/proxy").add("Device", module.exports);