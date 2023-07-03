const reader = new FileReader();
let jVarCommonItemInput;

const StartFunc = (event) => {
    let jVarLocalCurrentTarget = event.currentTarget;
    jVarCommonItemInput = jVarLocalCurrentTarget;
    const selectedFile = event.target.files[0];

    if (selectedFile) {
        addListeners(reader);
        reader.readAsText(selectedFile);
    }
};

let jFLocalLoad = () => {
    let jVarLocalItemInput = jVarCommonItemInput;
    let jVarLocalColsestTr = jVarLocalItemInput.closest("tr");

    var obj = JSON.parse(reader.result);

    if (Array.isArray(obj) === false) {
        jVarLocalColsestTr.classList.add("table-danger");
    };
};

function addListeners(reader) {
    // reader.addEventListener("loadstart", handleEvent);
    // reader.addEventListener("load", handleEvent);
    reader.addEventListener("loadend", jFLocalLoad);
    // reader.addEventListener("progress", handleEvent);
    // reader.addEventListener("error", handleEvent);
    // reader.addEventListener("abort", handleEvent);
}

export { StartFunc };