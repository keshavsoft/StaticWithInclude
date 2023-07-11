let StartFunc = ({ inDataFromApi }) => {
    let jVarLocalQueryParams = jFgetUrlQueryParams();
    let jVarLocaldataFromApi = inDataFromApi;

    if (Object.keys(jVarLocalQueryParams).length > 0) {
        LocalForClassesFromUrl({
            indataFromApi: jVarLocaldataFromApi,
            inQueryParamsAsObject: jVarLocalQueryParams
        });
        if (jVarLocalQueryParams.KReson) {
            LocalForClassesFromUrlForFale({
                indataFromApi: jVarLocaldataFromApi,
                inQueryParamsAsObject: jVarLocalQueryParams
            });
            
        }
       


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
    console.log("indataFromApi", indataFromApi);
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
    if ("Reports" in indataFromApi) {
        if (jVarLocalReportName in indataFromApi.Reports) {
            indataFromApi.Reports[jVarLocalReportName].TabPageClass = " show active";
            indataFromApi.Reports[jVarLocalReportName].MenuClass = " active";
            indataFromApi.Reports[jVarLocalReportName].VouchersConsider[jVarLocalFileName].RowClass = "table-success";
            Swal.fire('Updated Sucessfully..&#128522')
        };
    };
};

let LocalForClassesFromUrlForFale = ({ indataFromApi, inQueryParamsAsObject }) => {
    let jVarLocalReportName = inQueryParamsAsObject.inReportName;
    let jVarLocalFileName = inQueryParamsAsObject.inRowPK;
    let jVarLocalKReson = inQueryParamsAsObject.KReson;
    let url = jVarLocalKReson.replace(/%20| /g, " ");
    if ("Reports" in indataFromApi) {
        if (jVarLocalReportName in indataFromApi.Reports) {
            indataFromApi.Reports[jVarLocalReportName].TabPageClass = " show active";
            indataFromApi.Reports[jVarLocalReportName].MenuClass = " active";
            indataFromApi.Reports[jVarLocalReportName].VouchersConsider[jVarLocalFileName].RowClass = "bg-danger";
            Swal.fire(`Not Update Data...&#128531 Reson: ${url}..`)

            // if (jVarLocalKReson in inQueryParamsAsObject) {
            //     console.log("kkkkkkkkk");
            //     // indataFromApi.Reports[jVarLocalReportName].VouchersConsider[jVarLocalFileName].RowClass = "table-info";

            // };

        };
    };
};
export { StartFunc }