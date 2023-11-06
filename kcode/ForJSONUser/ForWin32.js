let CommonProjectName = "JSONAdminApi";

let LocalFolderPath = `src\\Projects\\${CommonProjectName}`;
let LocalDestinationPath = `public\\Projects\\${CommonProjectName}`;

let CommonWalk = require("./WalkFuncs");

let StartFunc = () => {
    CommonWalk.walk(LocalFolderPath, LocalFolderPath, LocalDestinationPath, CommonWalk.CallBackFunc);
};

module.exports = { StartFunc };

