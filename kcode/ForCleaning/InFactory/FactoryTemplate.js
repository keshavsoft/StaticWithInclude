let CommonProjectName = "Cleaning";

let LocalFolderPath = `public\\Projects\\${CommonProjectName}\\InFactory\\FactoryTemplate`;
let LocalDestinationPath = `public\\Projects\\${CommonProjectName}\\InFactory\\`;

let CommonWalk = require("./WalkFuncs");
let CommonFactoryArray = require("../Factories.json");

let StartFunc = () => {
    console.log("CommonFactoryArray : ", CommonFactoryArray);
    CommonFactoryArray.forEach(element => {
        CommonWalk.walk(LocalFolderPath, LocalFolderPath, `${LocalDestinationPath}${element}`, element, CommonWalk.CallBackFunc);
    });
};

module.exports = { StartFunc };

