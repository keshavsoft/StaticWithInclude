let StartFunc = ({ inDataFromApi }) => {
    let jVarLocalQueryParams = jFgetUrlQueryParams();
    let jVarLocaldataFromApi = inDataFromApi;

    if (Object.keys(jVarLocalQueryParams).length > 0) {
        LocalForClassesFromUrl({
            indataFromApi: jVarLocaldataFromApi,
            inQueryParamsAsObject: jVarLocalQueryParams
        });

    } else {
        LocalForApplyClasses({ indataFromApi: jVarLocaldataFromApi });
    };
};


let jFgetUrlQueryParams = () => {
    var queryParams = {}, param;
    var params = window.location.search.substring(1).split("&");
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



let LocalForApplyClasses = ({ indataFromApi }) => {
    let jVarLocalFirstFolder;
    if ("Reports" in indataFromApi) {
        if (Object.values(indataFromApi.Reports).length > 0) {
            jVarLocalFirstFolder = Object.values(indataFromApi.Reports)[0];
            jVarLocalFirstFolder.TabPageClass = " show active";
            jVarLocalFirstFolder.MenuClass = " active";

        };
    };
};

let LocalForClassesFromUrl = ({ indataFromApi, inQueryParamsAsObject }) => {
    let jVarLocalReportName = inQueryParamsAsObject.inReportName;
    let jVarLocalFileName = inQueryParamsAsObject.inRowPK;

    Swal.fire(`Deleted Sucessfully..&#128522..Voucher Pk: ${jVarLocalFileName}`)

    if ("Reports" in indataFromApi) {
        if (jVarLocalReportName in indataFromApi.Reports) {
            indataFromApi.Reports[jVarLocalReportName].TabPageClass = " show active";
            indataFromApi.Reports[jVarLocalReportName].MenuClass = " active";

        };
    };
};

export { StartFunc }