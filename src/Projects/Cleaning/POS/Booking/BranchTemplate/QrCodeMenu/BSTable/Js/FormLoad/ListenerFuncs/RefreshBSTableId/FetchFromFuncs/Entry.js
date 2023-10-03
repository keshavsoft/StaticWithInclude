import { StartFunc as StartFuncFetchFuncs } from "./PostFetch.js";

import { StartFunc as StartFuncAfterFetch } from "./AfterFetch/EntryFile.js";

let StartFunc = async () => {
    let jVarLocalDataNeeded = await StartFuncFetchFuncs();

    if (jVarLocalDataNeeded !== null) {
        if (jVarLocalDataNeeded.KTF) {
            StartFuncAfterFetch({ inDataToShow: jVarLocalDataNeeded.JsonData });
        } else {
            Swal.fire({
                title: 'Error',
                text: `${jVarLocalDataNeeded.KReason}`,
                icon: 'error',
            });
        }
    };
};

export { StartFunc }