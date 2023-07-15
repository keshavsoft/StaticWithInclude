// import { json } from 'express';
import ApiConfigJson from '../../../../../../../../../Js/Admin/ApiConfig.json' assert {type: 'json'};

let StartFunc = async ({ inFetchBody }) => {
    let jFetchUrl = `/${ApiConfigJson.ProjectName}/AdminApi/AsTree/Json/UserFolders/ScreensFromDisplayJson/SubTableColumns/DataAttributes`;

    let jLocalFetchConfig = {
        method: "PATCH",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(inFetchBody)
    }

    let response = await fetch(jFetchUrl, jLocalFetchConfig);

    let localResponseData = await response.json();

    return localResponseData;
};

export { StartFunc };