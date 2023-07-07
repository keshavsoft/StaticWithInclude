let StartFunc = async ({ inProjectName, inevent }) => {
    let response = await fetch(jFetchUrl, jFetchBody);

    switch (response.status) {
        case 200:
            //window.location = "";
            let jVarLocalNewLocation = "";
            jVarLocalNewLocation += `?inFolderName=${jVarLocalFolderName}`
            jVarLocalNewLocation += `&inFileName=${jVarLocalfilename}`
            jVarLocalNewLocation += `&inItemName=${jVarLocalitemname}`
            jVarLocalNewLocation += `&inScreenName=${jVarLocalscreenname}`
            jVarLocalNewLocation += `&inDuplicateScreenName=${jVarLocalCloneNameValue}`
            window.location = jVarLocalNewLocation;

            break;

        case 204:
            Swal.fire('Not Update Data')
            break;
        default:
    };

    console.log("response : ", response.status);
};

export { StartFunc };