let StartFunc = ({ inFetchData }) => {
    let jVarLocalDataPk = inFetchData.kPK;

    if (inFetchData.KTF) {
        const myUrlWithParams = new URL(`${window.location.origin}${window.location.pathname}`);
        const k1 = new URL(inFetchData.RedirectPage, myUrlWithParams.href);
        window.location.href = k1.href;

        // k1.searchParams.append("BranchName", jVarLocalBranchName);
        // window.location = `../../Link/UploadData.html?FromInsertNew=true&DataPk=${jVarLocalDataPk}`;
    } else {
        Swal.fire("User found.!")
    };
};

export { StartFunc };

