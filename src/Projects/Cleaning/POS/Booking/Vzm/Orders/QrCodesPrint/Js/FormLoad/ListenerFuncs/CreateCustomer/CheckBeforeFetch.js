let StartFunc = () => {
    let jVarLocalHtmlId = "CustomerNameId";
    let jVarCreateFolderInputId = document.getElementById(jVarLocalHtmlId);

    let jVarLocalFolderName = jVarCreateFolderInputId.value;

    if (jVarLocalFolderName === "") {
        jVarCreateFolderInputId.classList.add("is-invalid");
        jVarCreateFolderInputId.focus();
        return false;
    };

    return true;
};

export { StartFunc };