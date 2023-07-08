import ApiConfigJson from '../../../../ApiConfig.json' assert {type: 'json'};

let StartFunc = async ({ inFetchBody }) => {
    let jFetchUrl = `/${ApiConfigJson.ProjectName}/AdminApi/AsTree/Json/UserFolders/ConfigFolder/UserFileAsFolder/JsonItem/JsonScreen/Duplicate/DuplicateScreen`;
    
    let jLocalFetchConfig = {
        method: "PATCH",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(inFetchBody)
    }

    let response = await fetch(jFetchUrl, jLocalFetchConfig);

    return response.status;
};

export { StartFunc };