const os = require('os');

let CommonForDashboards = require("./kcode/ForDashboards/ForWin32");

let CommonOsName = os.platform();

switch (CommonOsName) {
    case "win32":
        CommonForDashboards.StartFunc();

        break;

    case "linux":
        // CommonForLinux.StartFunc();
        break;

    default:
        break;
};