let StartFunc = async ({ inFolderName, inFileName, inItemName, inRowPK, inProjectName }) => {
    try {
        let LocalReturnObject = { KTF: false, KResult: "", JsonData: {} };

        let inFetchPostData = {
            inFileNameOnly: inFileName,
            inFolderName: inFolderName,
            inItemName: "BillsQrCode",
            inScreenname: "Create",
            inColumnName: "BillPk",
            inValueToCheck: inRowPK
        };

        let jVarLocalFetchUrl = `/${inProjectName}/Api/Data/FromFolder/FromFile/Items/FromDataFolder/FilterData/ByColumn/IsEqual`;

        let jVarLocalFetchHeaders = {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(inFetchPostData)
        };

        const response = await fetch(jVarLocalFetchUrl, jVarLocalFetchHeaders);
        const data = await response.json();

        if (data.KTF === false) {
            LocalReturnObject.KReason = data.KReason;
            return await LocalReturnObject;
        };

        LocalReturnObject.JsonData = data.JsonData;

        LocalReturnObject.KTF = true;
        return await LocalReturnObject;

    } catch (error) {
        console.log("error:", error);
    }

};

export { StartFunc };