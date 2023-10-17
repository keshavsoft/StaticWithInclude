let CommonProjectName = "CleaningPos";

let LocalFolderPath = `src\\Projects\\${CommonProjectName}`;
let LocalDestinationPath = `public\\Projects\\${CommonProjectName}`;

let CommonWalk = require("./WalkFuncs");
let CommonBranchesArray = require("./Branches.json");

let StartFunc = () => {
    let LocalArrayHtml = CommonBranchesArray.map(element => {
        return `<option value="${element}">${element}</option>`
    });

    let inArrayHtml = LocalArrayHtml.toString().replaceAll(",","\n");

    CommonWalk.walk(LocalFolderPath, LocalFolderPath, LocalDestinationPath, inArrayHtml, CommonWalk.CallBackFunc);
};

module.exports = { StartFunc };

