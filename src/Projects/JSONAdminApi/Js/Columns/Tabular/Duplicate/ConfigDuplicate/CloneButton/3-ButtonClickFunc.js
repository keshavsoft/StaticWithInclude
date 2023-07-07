import { StartFunc as StartFuncPreparePostData } from "./2-PreparePostData.js";
import { StartFunc as StartFuncCheckBeforeFetch } from "./4-CheckBeforeFetch.js";
import { StartFunc as StartFuncPatchFunc } from "./5-PatchFunc.js";

let StartFunc = async ({ inProjectName, inevent }) => {
    let jVarLocalCurrentTarget = inevent.currentTarget;
    let jVarLocalFolderName = jVarLocalCurrentTarget.dataset.foldername;
    let jVarLocalfilename = jVarLocalCurrentTarget.dataset.filename;
    let jVarLocalitemname = jVarLocalCurrentTarget.dataset.itemname;
    let jVarLocalscreenname = jVarLocalCurrentTarget.dataset.screenname;
    let jVarLocalColsestTr = jVarLocalCurrentTarget.closest("tr");
    let jVarLocalCloneName = jVarLocalColsestTr.querySelector('[name="CloneName"]');
    let jVarLocalCloneNameValue = jVarLocalCloneName.value;

    let jVarLocalPreparePostData = StartFuncPreparePostData(inProjectName, inevent);

    if(StartFuncCheckBeforeFetch()===false){
        return false;
    }
    StartFuncPatchFunc();


};

export { StartFunc };