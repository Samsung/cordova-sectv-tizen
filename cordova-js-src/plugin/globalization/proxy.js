var GlobalizationError = require("cordova/plugin/GlobalizationError");

module.exports = {
    getPreferredLanguage: function(success, error) {
        if(typeof window.navigator.language === 'string') {
            success && setTimeout(function () {
                success({
                    value: window.navigator.language
                });
            }, 0);
        }
        else {
            error && setTimeout(function () {
                error(new GlobalizationError(GlobalizationError.UNKNOWN_ERROR));
            }, 0);
        }
    },
    getLocaleName: function(success, error) {
        try {
            var countryCodeKey = webapis.productinfo.ProductInfoConfigKey.CONFIG_KEY_SERVICE_COUNTRY || 1;
            var countryCode = webapis.productinfo.getSystemConfig(countryCodeKey);
            success && setTimeout(function () {
                success({
                    value: countryCode
                });
            }, 0);
        }
        catch (e) {
            error && setTimeout(function () {
                error(new GlobalizationError(GlobalizationError.UNKNOWN_ERROR));
            }, 0);
        }
    }
};

require("cordova/exec/proxy").add("Globalization", module.exports);
