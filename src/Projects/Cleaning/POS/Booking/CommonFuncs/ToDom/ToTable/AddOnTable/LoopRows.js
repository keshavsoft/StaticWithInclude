// import { StartFunc as StartFuncAddonAll } from "../../../FromLocalStorage/AddOnData/Bulk.js";
import { StartFunc as StartFuncAddonAll } from "../../../../FromLocalStorage/AddOnData/Bulk.js";
import { StartFunc as StartFuncInsertRowFunc } from "./InsertRowFunc.js";

let StartFunc = ({ inItemSerial, inNewPk }) => {
    let jVarLocalItemsTableBodyId = "AddOnTableBodyId";
    var jVarLocalHtmlTableBody = document.getElementById(jVarLocalItemsTableBodyId);

    jVarLocalHtmlTableBody.innerHTML = "";

    let jVarLocaljVarLocalItemsInOrderJson = jFLocalFromAddOns({ inItemSerial });

    jVarLocaljVarLocalItemsInOrderJson.forEach(
        LoopItem => {
            StartFuncInsertRowFunc({
                inTableBodyId: jVarLocalHtmlTableBody,
                inAddOnService: LoopItem.AddOnService,
                inAddOnRate: LoopItem.AddOnRate,
                inAddOnItemSerial: LoopItem.AddOnItemSerial,
                inAddOnImageSerial: LoopItem.AddOnImageSerial,
                inNewPk
            });
        }
    );
};


let jFLocalFromAddOns = ({ inItemSerial }) => {
    let jVarLocalHtmlIdAddOnCardId = document.getElementById("AddOnCardId");
    let jVarLocalAddOnItemToAddOnClass = jVarLocalHtmlIdAddOnCardId.querySelector(".AddOnItemToAddOnClass");
    jVarLocalAddOnItemToAddOnClass.value = inItemSerial;

    let jVarLocalItemsTableBodyId = "AddOnTableBodyId";
    var jVarLocalHtmlTableBody = document.getElementById(jVarLocalItemsTableBodyId);

    jVarLocalHtmlTableBody.innerHTML = "";

    let jVarLocaljVarLocalItemsInOrderJson = StartFuncAddonAll();

    let jVarLocalAddOnArray = Object.keys(jVarLocaljVarLocalItemsInOrderJson).map(
        key => {
            return {
                RowPk: key,
                ...jVarLocaljVarLocalItemsInOrderJson[key]
            };
        }
    );

    let jVarLocalFilered = jVarLocalAddOnArray.filter(element => {
        return element.AddOnItemSerial === parseInt(inItemSerial);
    });

    return jVarLocalFilered;
};

export { StartFunc };