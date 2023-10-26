const os = require('os');

let CommonForCleaning = require("./kcode/ForCleaning/ForWin32");

let CommonForCleaningBranchTemplate = require("./kcode/ForCleaning/POS/Booking/BranchTemplate");

let CommonOsName = os.platform();

switch (CommonOsName) {
    case "win32":
        CommonForCleaning.StartFunc();
        // CommonForCleaningBranchTemplate.StartFunc();

        break;

    case "linux":
        // CommonForLinux.StartFunc();
        break;

    default:
        break;
};