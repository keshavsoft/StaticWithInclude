import { StartFunc as StartFuncFetchFunc } from "./5-FetchFunc.js";
import { StartFunc as StartFuncPreparePostData } from "./4-PreparePostData.js";
// import { StartFunc as StartFuncPreparePostData } from "../../../FetchFuncs/FetchHeaders/EntryFile.js";
// import { StartFunc as StartFuncCheckBeforeFetch } from "./3-CheckBeforeFetch.js";
// import { StartFunc as StartFuncAfterFetch } from "./6-AfterFetch.js";

let StartFunc = async ({ inEvent }) => {
    if (inEvent.keyCode === 13) {
        let jVarLocalCurrentTarget = inEvent.currentTarget;
        let jVarLocalCurrentName = jVarLocalCurrentTarget.name;
        let pk = jFLocalFromDompk();

        let LocalArray = Object.values(jVarGlobalPresentFetchData.JsonData);
        let key = LocalArray.filter((e) => e.pk === pk);

        jFLocalToInputItemName({ inItemName: key[0].ItemName })
        // let jVarLocalHtmlCard = jVarLocalCurrentTarget.closest(".card");
        // if (StartFuncCheckBeforeFetch()) {
        //     let jVarLocalBodyData = StartFuncPreparePostData({ inEvent });

        //     let response = await StartFuncFetchFunc({
        //         inBodyData: jVarLocalBodyData
        //     });

        // StartFuncAfterFetch({ FetchData: response, inHtmlCard: jVarLocalHtmlCard, inCurrentName: jVarLocalCurrentName });
        // };
    };
};

let jFLocalFromDompk = () => {
    let jVarLocalHtmlpk = 'pk';
    let jVarHtmlpk = document.getElementById(jVarLocalHtmlpk);
    let jVarHtmlpkValue = jVarHtmlpk.value.trim();
    return jVarHtmlpkValue;
};

let jFLocalToInputItemName = ({ inItemName }) => {
    let jVarLocalHtmlId = 'ItemName';
    let jVarLocalItemName = document.getElementById(jVarLocalHtmlId);
    jVarLocalItemName.value = inItemName;
};

export { StartFunc };