import { StartFunc as StartFuncAsJson } from "./AsJson.js";
import { StartFunc as StartFuncAsString } from "./AsString.js";

let StartFunc = (event) => {
    console.log("event",typeof event.data);
    try {
        let jVarLocalJsonData = JSON.parse(event.data);
        console.log("clientsJson----------",jVarLocalJsonData);
        StartFuncAsJson({ inJsonData: jVarLocalJsonData });
       
    } catch (error) {
        StartFuncAsString({ inStringData: event.data});
    }
};

// console.log("rrrrrrrrrr : ", event.data);
//         var toastLiveExample = document.getElementById('liveToast');
//         var toast = new bootstrap.Toast(toastLiveExample)

//         toast.show();
//         let jVarLocalMessage = toastLiveExample.querySelector(".toast-body");
//         jVarLocalMessage.innerHTML = event.data;
//         showContent({ inMessage: event.data });

export { StartFunc };