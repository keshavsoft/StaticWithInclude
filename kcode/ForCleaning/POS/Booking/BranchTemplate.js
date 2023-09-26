let CommonProjectName = "Cleaning";

let LocalFolderPath = `src\\Projects\\${CommonProjectName}\\POS\\Booking\\BranchTemplate`;
let LocalDestinationPath = `public\\Projects\\${CommonProjectName}\\POS\\Booking\\`;

let CommonWalk = require("./WalkFuncs");
let CommonBranchesArray = require("../../Branches.json");

let StartFunc = () => {
    CommonBranchesArray.forEach(element => {
        CommonWalk.walk(LocalFolderPath, LocalFolderPath, `${LocalDestinationPath}${element}`, element, CommonWalk.CallBackFunc);
    });
};

module.exports = { StartFunc };

