var Connection = require('cordova/plugin/Connection');
var TizenActiveConnectionType = {
    DISCONNECTED : 0,
    WIFI : 1,
    CELLULAR : 2,
    ETHERNET : 3
};

module.exports = {
    getConnectionInfo: function(successCallback, errorCallback) {
        var networkType = Connection.NONE;
        try {
            var activeType = webapis.network.getActiveConnectionType();
            switch(activeType){
            case TizenActiveConnectionType.DISCONNECTED :
                console.log('network disconnected');
                networkType = Connection.NONE;
                break;
            case TizenActiveConnectionType.WIFI : 
                console.log('connection network type is Wifi');
                networkType = Connection.WIFI;
                break;
            case TizenActiveConnectionType.ETHERNET :
                console.log('connection network type is Ethernet');
                networkType = Connection.ETHERNET;
                break;
            default :
                console.log('connection network type is Unknown');
                networkType = Connection.UNKNOWN;
                break;    
            }
            successCallback(networkType);
        } catch (e) {
            if(errorCallback){
                errorCallback();
            }
        }
    }
};

require("cordova/exec/proxy").add("NetworkStatus", module.exports);