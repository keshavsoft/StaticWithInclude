const os = require('os');

let CommonForCleaningBranchTemplate = require("./kcode/ForCleaning/POS/Booking/BranchTemplate");
let CommonForFactoryTemplate = require("./kcode/ForCleaning/InFactory/FactoryTemplate");

let CommonOsName = os.platform();

switch (CommonOsName) {
    case "win32":
        // CommonForCleaningBranchTemplate.StartFunc();
        CommonForFactoryTemplate.StartFunc();

        break;

    case "linux":
        // CommonForLinux.StartFunc();
        break;

    default:
        break;
};