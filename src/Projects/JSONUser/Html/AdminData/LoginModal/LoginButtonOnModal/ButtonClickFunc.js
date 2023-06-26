import { StartFunc as CheckOnDomStartFunc } from "../../CheckOnDom.js";

let LocalFirmDetails = ({ inUserKey }) => {
    let LocalUserName = document.getElementById("KUserNameInput").value;

    localStorage.setItem(inUserKey, LocalUserName);
};

let StartFunc = async ({ inSubRoute, inUserKey, inFirmKey, inTokenName, inModalId }) => {
    let LocalFromDomFunc = await CheckOnDomStartFunc({ inSubRoute, inUserKey, inFirmKey, inTokenName });
    
    if (LocalFromDomFunc.KTF) {
        LocalFirmDetails({ inUserKey });

        window.location.href = "";
    };
};

export { StartFunc }
