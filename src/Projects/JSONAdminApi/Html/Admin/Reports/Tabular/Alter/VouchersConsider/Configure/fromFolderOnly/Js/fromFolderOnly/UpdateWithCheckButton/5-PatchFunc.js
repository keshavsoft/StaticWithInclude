import ApiConfigJson from '../../../../../../../../../ApiConfig.json' assert {type: 'json'};

let StartFunc = async ({ inFetchBody }) => {
    let jFetchUrl = `/${ApiConfigJson.ProjectName}/AdminApi/AsTree/Json/UserFolders/ReportsFolder/LedgerAutoJsonFile/FromReports/FromVoucherConsider/FromKeys/FromFolderOnly`;

    let jLocalFetchConfig = {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(inFetchBody)
    }

    let response = await fetch(jFetchUrl, jLocalFetchConfig);

    let ResopnseData = await response.json();

    return ResopnseData;
};

export { StartFunc };