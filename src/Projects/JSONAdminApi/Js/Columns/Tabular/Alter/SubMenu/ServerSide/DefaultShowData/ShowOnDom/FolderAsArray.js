let StartFunc = async () => {
    let jVarLocalFetchUrl = `/JSONApi/Api/Data/FromFolder/GetDirs/AsArray`;

    let jVarLocalFromFetch = await fetch(jVarLocalFetchUrl);
    let dataFromApi = await jVarLocalFromFetch.json();

    if (dataFromApi !== null) {
        LocalDataListArrayFunc({ JsonArry: dataFromApi })
    };

    return await dataFromApi;
};

const LocalDataListArrayFunc = ({ JsonArry }) => {

    let localDataListId = document.getElementById("FoldersDataListId")

    JsonArry.forEach(element => {
        let LocalOption = document.createElement("option");
        LocalOption.innerHTML = element;

        localDataListId.appendChild(LocalOption);
    });

}

export { StartFunc }