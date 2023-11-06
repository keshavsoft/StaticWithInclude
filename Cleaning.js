const os = require('os');

let CommonForCleaning = require("./kcode/ForCleaning/ForWin32");

let CommonOsName = os.platform();

switch (CommonOsName) {
    case "win32":
        CommonForCleaning.StartFunc();

        break;

    case "linux":
        // CommonForLinux.StartFunc();
        break;

    default:
        break;
};