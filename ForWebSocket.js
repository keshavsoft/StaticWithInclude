const os = require('os');

let CommonForWebSocket = require("./kcode/ForWebSocket/ForWin32");

let CommonOsName = os.platform();

switch (CommonOsName) {
    case "win32":
        CommonForWebSocket.StartFunc();

        break;

    case "linux":
        // CommonForLinux.StartFunc();
        break;

    default:
        break;
};