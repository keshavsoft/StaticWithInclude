let jFUpdateFunc = () => {
    let jVarLocalUpdateClassName = document.getElementsByClassName("UpdateButtonClass");

    for (let i = 0; i < jVarLocalUpdateClassName.length; i++) {
        jVarLocalUpdateClassName[i].addEventListener("click", jFLocalClickFunc)
    };
};

let jFLocalClickFunc = async (event) => {
    let jVarLocalCurrentTarget = event.currentTarget;
    let jVarLocalFolderName = jVarLocalCurrentTarget.dataset.foldername;
    let jVarLocalfilename = jVarLocalCurrentTarget.dataset.filename;
    let jVarLocalitemname = jVarLocalCurrentTarget.dataset.itemname;
    let jVarLocalscreenname = jVarLocalCurrentTarget.dataset.screenname;
    let jVarLocalsubtablecolumnkey = jVarLocalCurrentTarget.dataset.subtablecolumnkey;

    let jVarLocalColsestTr = jVarLocalCurrentTarget.closest("tr");
    let jVarLocalDataAttribute = jVarLocalColsestTr.querySelector('[name="DataAttribute"]');
    let jVarLocalControlType = jVarLocalColsestTr.querySelector('[name="FolderName"]');
    let jVarLocalFormat = jVarLocalColsestTr.querySelector('[name="FileName"]');
    let jVarLocalType = jVarLocalColsestTr.querySelector('[name="ItemName"]');
    let jVarLocalTransform = jVarLocalColsestTr.querySelector('[name="CheckColumnName"]');
    let jVarLocalMinFloat = jVarLocalColsestTr.querySelector('[name="MinFloat"]');
    let jVarLocalMaxFloat = jVarLocalColsestTr.querySelector('[name="MaxFloat"]');
    let jVarLocalFilterString = jVarLocalColsestTr.querySelector('[name="FilterString"]');

    let jVarLocalDataAttributeValue = jVarLocalDataAttribute.value;
    let jVarLocalControlTypeValue = jVarLocalControlType.value;
    let jVarLocalFormatValue = jVarLocalFormat.value;
    let jVarLocalTypeValue = jVarLocalType.value;
    let jVarLocalTransformValue = jVarLocalTransform.value;
    let jVarLocalMinFloatValue = jVarLocalMinFloat.value;
    let jVarLocalMaxFloatValue = jVarLocalMaxFloat.value;
    let jVarLocalFilterStringValue = jVarLocalFilterString.value;

    let BodyAsJson = {
        FolderName: jVarLocalControlTypeValue,
        FileName: jVarLocalFormatValue,
        ItemName: jVarLocalTypeValue,
        CheckColumnName: jVarLocalTransformValue,
        MinFloat: jVarLocalMinFloatValue,
        MaxFloat: jVarLocalMaxFloatValue,
        FilterString: jVarLocalFilterStringValue
    }

    let jFetchUrl = "/JSONAdminApi/AdminApi/AsTree/Json/UserFolders/ScreensFromDisplayJson/SubTableColumns/SubKeys/ServerSide/DefaultShowData";

    let response = await fetch(jFetchUrl, {
        method: "PATCH",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            folderName: jVarLocalFolderName,
            FileName: jVarLocalfilename,
            ItemName: jVarLocalitemname,
            ScreenName: jVarLocalscreenname,
            subtablecolumnkey: jVarLocalsubtablecolumnkey,
            DataAttribute: jVarLocalDataAttributeValue,
            BodyAsJson
        })
    });

    switch (response.status) {
        case 200:
            //window.location = "";
            let jVarLocalNewLocation = "";
            jVarLocalNewLocation += `?inFolderName=${jVarLocalFolderName}`
            jVarLocalNewLocation += `&inFileName=${jVarLocalfilename}`
            jVarLocalNewLocation += `&inItemName=${jVarLocalitemname}`
            jVarLocalNewLocation += `&inScreenName=${jVarLocalscreenname}`
            jVarLocalNewLocation += `&inColumnName=${jVarLocalDataAttributeValue}`;
            console.log("jVarLocalNewLocation : ", jVarLocalNewLocation);
            window.location = jVarLocalNewLocation;

            break;

        case 204:
            Swal.fire('Not Update Data')
            break;
        default:
        // code block
    };

    console.log("response : ", response.status);
};

export { jFUpdateFunc };