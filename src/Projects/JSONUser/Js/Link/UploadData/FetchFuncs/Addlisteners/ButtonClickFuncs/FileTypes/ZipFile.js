let StartFunc = async ({ inHtmlSelect, DataPk }) => {
    let jVarLocalSelectedFile = inHtmlSelect;
    let jVarLocalFromValidation = fileValidation(jVarLocalSelectedFile);
    console.log("jVarLocalFromValidation : ", jVarLocalFromValidation);
    if (jVarLocalFromValidation) {
        const formData = new FormData();
        formData.append("inFile", jVarLocalSelectedFile);

        let response = await fetch("/JSONUser/Login/Users/Admin/ShowUsers/WithFolderCheck", {
            method: "post",
            body: formData
        }).catch((upError) => {
            console.log("upError ", upError);
        });

        if (response.status === 200) {
            //window.location = `/JSONUser/Html/Link/UploadData.html?UploadData=true&Datapk=${DataPk}`
        } else {
            Swal.fire('Data Not Uploaded')

        }
    };
};

let fileValidation = (file) => {
    // console.log("file", file, file.type, file.type === "application/json");

    if ((file.type === "application/x-zip-compressed") === false) {
        alert('Invalid file type');
        return false;
    };

    return true;
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