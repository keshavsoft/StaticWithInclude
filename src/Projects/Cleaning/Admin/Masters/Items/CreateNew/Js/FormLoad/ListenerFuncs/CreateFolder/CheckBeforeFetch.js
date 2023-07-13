let StartFunc = () => {
    if (jFLocalCreateFolderInputId() === false) {
        return false;
    };

    if (jFlocalCategoryInputId() === false) {
        return false;
    };

    if (jFlocalRateId() === false) {
        return false;
    };

    return true;
};

let jFLocalCreateFolderInputId = () => {
    let jVarLocalHtmlId = "CreateFolderInputId";
    let jVarCreateFolderInputId = document.getElementById(jVarLocalHtmlId);
    let jVarLocalFolderName = jVarCreateFolderInputId.value;

    if (jVarLocalFolderName === "") {
        jVarCreateFolderInputId.classList.add("is-invalid");
        jVarCreateFolderInputId.focus();
        return false;
    };

    if (jVarCreateFolderInputId.classList.contains("is-invalid")) {
        jVarCreateFolderInputId.classList.remove("is-invalid");

        jVarCreateFolderInputId.classList.add("is-valid");
    };

    return true;
};

let jFlocalCategoryInputId = () => {
    let jVarLocalHtmlId = "CategoryInputId";
    let jVarCreateFolderInputId = document.getElementById(jVarLocalHtmlId);

    let jVarLocalFolderName = jVarCreateFolderInputId.value;

    if (jVarLocalFolderName === "") {
        jVarCreateFolderInputId.classList.add("is-invalid");
        jVarCreateFolderInputId.focus();
        return false;
    };

    if (jVarCreateFolderInputId.classList.contains("is-invalid")) {
        jVarCreateFolderInputId.classList.remove("is-invalid");

        jVarCreateFolderInputId.classList.add("is-valid");
    };
    return true;

};

let jFlocalRateId = () => {
    let jVarLocalHtmlId = "RateId";
    let jVarCreateFolderInputId = document.getElementById(jVarLocalHtmlId);

    let jVarLocalFolderName = jVarCreateFolderInputId.value;

    if (jVarLocalFolderName === "") {
        jVarCreateFolderInputId.classList.add("is-invalid");
        jVarCreateFolderInputId.focus();
        return false;
    };
    return true;

}

export { StartFunc };