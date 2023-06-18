import ConfigJson from '../../../../Config.json' assert {type: 'json'};

const StartFunc = async () => {
    let jVarLocalRoute = ConfigJson.Project;
    let jVarLocalSubRoute = ConfigJson.SubRoute;

    let jVarLocalFetchUrl = `/${jVarLocalRoute}/${jVarLocalSubRoute}/Data/FromFolder/GetDirs/MenuWithDesign`;

    let response = await fetch(jVarLocalFetchUrl);
    let dataFromApi = await response.json();

    if (dataFromApi !== null) {
        if (dataFromApi.KTF) {
            localStorage.setItem("HeaderFolders", JSON.stringify(dataFromApi.Folders));
        };
    };
};

export { StartFunc };