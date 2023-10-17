const os = require('os');

let CommonForCleaning = require("./kcode/ForCleaningPos/ForWin32");

let CommonForCleaningBranchTemplate = require("./kcode/ForCleaningPos/POS/Booking/BranchTemplate");

let CommonOsName = os.platform();

switch (CommonOsName) {
    case "win32":
        CommonForCleaning.StartFunc();
        CommonForCleaningBranchTemplate.StartFunc();

        break;

    case "linux":
        // CommonForLinux.StartFunc();
        break;

    default:
        break;
};