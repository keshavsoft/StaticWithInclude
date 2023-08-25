import { StartFunc as StartFuncCheckOutData } from "../../../../../ToLocalStorage/BranchName/Bulk.js";
import CommonKeys from "../../../../../ToLocalStorage/Keys.json" assert { type: "json" };

const StartFunc = async ({ indirHandle }) => {
    const ConfigHandle = await indirHandle.getFileHandle(`${CommonKeys.BranchName}.json`);
    let jVarLocalgetFile = await ConfigHandle.getFile();

    let jVarLocalgetFileData = await jVarLocalgetFile.text();

    StartFuncCheckOutData({ inData: JSON.parse(jVarLocalgetFileData) });
};

export { StartFunc }