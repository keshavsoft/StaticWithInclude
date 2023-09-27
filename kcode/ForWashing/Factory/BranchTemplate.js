let CommonProjectName = "Washing";

let LocalFolderPath = `src\\Projects\\${CommonProjectName}\\Factory`;
let LocalDestinationPath = `public\\Projects\\${CommonProjectName}\\`;

let CommonWalk = require("./WalkFuncs");
let CommonBranchesArray = require("../Branches.json");

let StartFunc = () => {
    CommonBranchesArray.forEach(element => {
        CommonWalk.walk(LocalFolderPath, LocalFolderPath, `${LocalDestinationPath}${element}`, element, CommonWalk.CallBackFunc);
    });
};

module.exports = { StartFunc };

