import { StartFunc as StartFuncUploadFileInput } from './onReaderLoad.js';

let StartFunc = () => {
    let jVarLocaInputClassName = document.getElementsByClassName("UploadFileInputClass");

    for (let i = 0; i < jVarLocaInputClassName.length; i++) {
        jVarLocaInputClassName[i].addEventListener("change", StartFuncUploadFileInput);
    };
};

export { StartFunc };