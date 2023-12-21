let StartFunc = async ({ inCsvJsonData }) => {

    let formData = {};

    formData.FolderName = "Masters";
    formData.FileName = "CRM";
    formData.ItemName = "Items";
    formData.NewData = inCsvJsonData

    return await formData;
};



export { StartFunc };