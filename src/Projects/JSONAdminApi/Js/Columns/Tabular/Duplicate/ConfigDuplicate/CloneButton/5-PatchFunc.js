import { StartFunc as StartFuncAfterPatchFunc } from "./6-AfterFetchFunc.js";

let StartFunc = async ({ inProjectName, inevent }) => {

    let jFetchUrl = `/${inProjectName}/AdminApi/AsTree/Json/UserFolders/ConfigFolder/UserFileAsFolder/JsonItem/JsonScreen/Duplicate/DuplicateScreen`;
    let jFetchBody = {
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
            DuplicateScreenName: jVarLocalCloneNameValue
        })
    }
    StartFuncAfterPatchFunc();

};

export { StartFunc };