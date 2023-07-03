import CommonConfig from "../../../../../../Config.json" assert { type: "json" };

let StartFunc = async ({ inReportName }) => {
    let jVarLocalRoute = CommonConfig.Project;
    let jVarLocalSubRoute = CommonConfig.SubRoute;
    let jVarLocalReportSelected = inReportName;

    let jVarLocalFetchUrl = `/${jVarLocalRoute}/${jVarLocalSubRoute}/Reports/PullData/WithOutFilters/AsTable/DataWithConfig/${jVarLocalReportSelected}`;

    let jVarLocalFromFetch = await fetch(jVarLocalFetchUrl);
    let jVarLocalFetchJson = await jVarLocalFromFetch.json();

    return await jVarLocalFetchJson;
};

export { StartFunc };