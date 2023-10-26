let CommonProjectName = "Cleaning";

let LocalFolderPath = `src\\Projects\\${CommonProjectName}`;
let LocalDestinationPath = `public\\Projects\\${CommonProjectName}`;

let CommonWalk = require("./WalkFuncs");
let CommonBranchesArray = require("./Branches.json");
let CommonFactories = require("./Factories.json");

let StartFunc = () => {
    let LocalArrayHtml = CommonBranchesArray.map(element => {
        return `<option value="${element}">${element}</option>`
    });

    let inArrayHtml = LocalArrayHtml.toString().replaceAll(",", "\n");

    let LocalFactoryArrayHtml = CommonFactories.map(element => {
        return `<option value="${element}">${element}</option>`
    });

    let inFactoryHtml = LocalFactoryArrayHtml.toString().replaceAll(",", "\n");

    CommonWalk.walk(LocalFolderPath, LocalFolderPath, LocalDestinationPath, inArrayHtml, inFactoryHtml, CommonWalk.CallBackFunc);
};

module.exports = { StartFunc };

