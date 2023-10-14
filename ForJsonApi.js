const os = require('os');

let CommonForWin32 = require("./kcode/ForJsonApi/ForWin32");

let CommonOsName = os.platform();

switch (CommonOsName) {
    case "win32":
        CommonForWin32.StartFunc();
        break;

case "linux":
    // CommonForLinux.StartFunc();
    break;

    default:
        break;
};