import { StartFunc as StartFuncToLocalStorage } from "../../../../ToLocalStorage/Items.js";
import { StartFunc as StartFuncCustomers } from "../../../../ToLocalStorage/Customers/Bulk.js";

const jFForItems = async ({ indirHandle }) => {
    const ConfigHandle = await indirHandle.getFileHandle('Items.json');
    let jVarLocalgetFile = await ConfigHandle.getFile();

    let jVarLocalgetFileData = await jVarLocalgetFile.text();

    StartFuncToLocalStorage({ inData: JSON.parse(jVarLocalgetFileData) });
};

const jFForCustomers = async ({ indirHandle }) => {
    const ConfigHandle = await indirHandle.getFileHandle('Customers.json');
    let jVarLocalgetFile = await ConfigHandle.getFile();

    let jVarLocalgetFileData = await jVarLocalgetFile.text();

    StartFuncCustomers({ inData: JSON.parse(jVarLocalgetFileData) });
};

export { jFForItems, jFForCustomers }