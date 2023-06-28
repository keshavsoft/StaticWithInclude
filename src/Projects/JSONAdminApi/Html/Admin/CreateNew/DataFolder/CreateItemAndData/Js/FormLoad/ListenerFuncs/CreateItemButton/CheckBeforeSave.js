let StartFunc1 = async ({ inEvent }) => {
    let jVarLocalCurrentTarget = inEvent.currentTarget;
    let jVarLocalColsestTr = jVarLocalCurrentTarget.closest("tr");
    let jVarLocalslectFile = jVarLocalColsestTr.querySelector('[name="slectFile"]');
    let jVarLocalSelectedFile = jVarLocalslectFile.files[0];

    fileValidation(jVarLocalSelectedFile);
    let jVarLocalFromFile = await jVarLocalreadFileAsync(jVarLocalSelectedFile);
    let jvarLocalJSONData = JSON.parse(jVarLocalFromFile);

    let ItemName = Object.keys(jvarLocalJSONData)[0];

    let localInputItemName = jVarLocalColsestTr.querySelector('[name="ItemName"]');
    let letlocalInputItemName = localInputItemName.innerHTML;
};

let StartFunc = async ({ inEvent }) => {
    let jVarLocalCurrentTarget = inEvent.currentTarget;
    let jVarLocalColsestTr = jVarLocalCurrentTarget.closest("tr");
    let jVarLocalItemName = jVarLocalColsestTr.querySelector('[name="ItemName"]');
    let jVarLocalFileName = jVarLocalColsestTr.querySelector('[name="slectFile"]');
    let jVarLocalItemNameValue = jVarLocalItemName.value;
    let jVarLocalFileNameValue = jVarLocalFileName.value;

    if (jVarLocalFileNameValue === "" && jVarLocalItemNameValue === "") {
        jVarLocalFileName.classList.add("is-invalid");
        jVarLocalItemName.classList.add("is-invalid");
        jVarLocalItemName.focus();
        return false;
    };

    let jVarLocalSelectedFile = jVarLocalFileName.files[0];

    fileValidation(jVarLocalSelectedFile);
    let jVarLocalFromFile = await jVarLocalreadFileAsync(jVarLocalSelectedFile);
    let jvarLocalJSONData = JSON.parse(jVarLocalFromFile);

    let ItemName = Object.keys(jvarLocalJSONData)[0];
    console.log("ItemName : ", ItemName);
    jVarLocalItemName.value = ItemName;

    return true;
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