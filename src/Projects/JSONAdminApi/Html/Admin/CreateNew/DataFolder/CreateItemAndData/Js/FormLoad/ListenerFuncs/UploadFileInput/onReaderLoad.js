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

    // console.log(event.target);
    // var obj = JSON.parse(event.target.result);

    // console.log("aaaaaaaaaaaaa : ", obj);
};

let jFLocalLoad = () => {
    console.log("aaaaaaaa : ", jVarCommonItemInput);
    let jVarLocalItemInput = jVarCommonItemInput;
    let jVarLocalColsestTr = jVarLocalItemInput.closest("tr");
    let localInputItemName = jVarLocalColsestTr.querySelector('[name="ItemName"]');

    var obj = JSON.parse(reader.result);

    if (Object.keys(obj).length === 1) {
        localInputItemName.value = Object.keys(obj)[0];

        if (typeof Object.values(obj)[0] === "object" === false) {
            jVarLocalColsestTr.classList.add("table-danger");
        };

        console.log("aaaaaaa : ", typeof Object.values(obj)[0]);

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