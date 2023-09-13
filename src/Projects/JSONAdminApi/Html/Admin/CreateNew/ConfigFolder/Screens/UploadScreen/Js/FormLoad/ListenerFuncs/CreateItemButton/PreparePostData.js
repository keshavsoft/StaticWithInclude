let StartFunc = async ({ inEvent }) => {
    let jVarLocalCurrentTarget = inEvent.currentTarget;
    let jVarLocalColsestTr = jVarLocalCurrentTarget.closest("tr");
    let jVarLocalslectFile = jVarLocalColsestTr.querySelector('[name="slectFile"]');
    let jVarLocalSelectedFile = jVarLocalslectFile.files[0];

    fileValidation(jVarLocalSelectedFile);
    let jVarLocalFromFile = await jVarLocalreadFileAsync(jVarLocalSelectedFile);
    let jvarLocalJSONData = JSON.parse(jVarLocalFromFile);

    let jVarLocalFromButtonData = jFLocalFromButton({ inCurrentTarget: jVarLocalCurrentTarget });

    return {
        ...jVarLocalFromButtonData,
        NewData: jvarLocalJSONData
    };
};

const jFLocalFromButton = ({ inCurrentTarget }) => {
    let jVarLocalCurrentTarget = inCurrentTarget;
    let jVarLocalFolderName = jVarLocalCurrentTarget.dataset.foldername;
    let jVarLocalFileName = jVarLocalCurrentTarget.dataset.filename;
    let jVarLocalItemName = jVarLocalCurrentTarget.dataset.itemname;
    let jVarLocalColsestTr = jVarLocalCurrentTarget.closest("tr");
    let jVarLocalScreenName = jVarLocalColsestTr.querySelector('[name="screenName"]');
    let jVarLocalScreenNameValue = jVarLocalScreenName.value;

    return {
        FolderName: jVarLocalFolderName,
        FileName: jVarLocalFileName,
        ItemName: jVarLocalItemName,
        NewScreenName:jVarLocalScreenNameValue
    };
};
let fileValidation = (file) => {
    // console.log("file", file, file.type, file.type === "application/json");

    if ((file.type === "application/json") === false) {
        alert('Invalid file type');
        return false;
    }
};
let jVarLocalreadFileAsync = (file) => {
    return new Promise((resolve, reject) => {
        let reader = new FileReader();

        reader.onload = () => {
            resolve(reader.result);
        };

        reader.onerror = reject;

        reader.readAsText(file);
    })
};

export { StartFunc };