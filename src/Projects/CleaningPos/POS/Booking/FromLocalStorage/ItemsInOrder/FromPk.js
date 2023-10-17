import { StartFunc as StartFuncBulk } from "./Bulk.js";

const StartFunc = ({ inPk }) => {
    let localInPk = inPk;

    let jVarLocalBulk = StartFuncBulk();

    if (localInPk in jVarLocalBulk) {
        return jVarLocalBulk[localInPk];
    };

};

export { StartFunc };