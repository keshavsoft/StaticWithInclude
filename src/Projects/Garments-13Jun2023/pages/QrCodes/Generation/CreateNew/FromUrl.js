import { StartFunc as StartFuncShowOnDom } from "./ShowOnDom.js";

let StartFunc = () => {
    let jVarLocalQueryParams = jFgetUrlQueryParams();
    StartFuncShowOnDom({ inQueryData: jVarLocalQueryParams });

};

let jFgetUrlQueryParams = () => {
    var queryParams = {}, param;
   

    //var params = window.location.search.substring(1).split("&");

    var params =  decodeURI(window.location.search).substring(1).split("&");

    // console.log("params : ", params);
    for (var i = 0; i < params.length; i++) {
        param = params[i].split('=');
        // console.log("param : ", param);
        if (param.length === 2) {
            queryParams[param[0]] = param[1];
        };
    }
    return queryParams;
};

export { StartFunc }