const os = require('os');

let CommonForWashingBranchTemplate = require("./kcode/ForWashing/Factory/BranchTemplate");

let CommonOsName = os.platform();

switch (CommonOsName) {
    case "win32":
        CommonForWashingBranchTemplate.StartFunc();

        break;

    case "linux":
        // CommonForLinux.StartFunc();
        break;

    default:
        break;
};