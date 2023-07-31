import { StartFunc as StartFuncToLocalStorage } from "../../../../../ToLocalStorage/ItemsInOrder/Bulk.js";

let StartFunc = ({ inFromFetch }) => {
    let data = inFromFetch;
    if (data) {
        console.log("data",data);
        // localStorage.setItem("K1", JSON.stringify(data.JsonData));
        StartFuncToLocalStorage({ inData: data.JsonData.ItemsInOrder });
    };
};

export { StartFunc };
