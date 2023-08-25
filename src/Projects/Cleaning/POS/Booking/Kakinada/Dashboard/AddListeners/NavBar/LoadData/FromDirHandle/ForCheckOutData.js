import { StartFunc as StartFuncCheckOutData } from "../../../../../ToLocalStorage/CheckOutData/Bulk.js";

const jFForCheckOutData = async ({ indirHandle }) => {
    const ConfigHandle = await indirHandle.getFileHandle('CheckOutData.json');
    let jVarLocalgetFile = await ConfigHandle.getFile();

    let jVarLocalgetFileData = await jVarLocalgetFile.text();

    StartFuncCheckOutData({ inData: JSON.parse(jVarLocalgetFileData) });
};

export { jFForCheckOutData }