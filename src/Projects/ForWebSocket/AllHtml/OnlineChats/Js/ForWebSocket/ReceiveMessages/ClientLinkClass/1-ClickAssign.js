import { StartFunc as StartFuncButtonClickFunc } from "./2-ButtonClickFunc.js";

let StartFunc = () => {
    let jVarLocalClientNameClass = document.getElementsByClassName("ClientLinkClass");

    for (var i = 0; i < jVarLocalClientNameClass.length; i++) {
        let jVarLocalClientName = jVarLocalClientNameClass[i].innerHTML;
        jVarLocalClientNameClass[i].addEventListener("click", (event) => {
            let jVarLocalCurrentTarget = event.currentTarget;
            let jVarLocalMetaDataId = jFLocalReturnMetaDataId({ inCurrentTarget: jVarLocalCurrentTarget});
            StartFuncButtonClickFunc({ inTabName: jVarLocalClientName, inMetaDataId: jVarLocalMetaDataId });
        });
    };
};

let jFLocalReturnMetaDataId = ({ inCurrentTarget }) =>{
    let jVarLocalCurrentTarget = inCurrentTarget;
    let jVarLocalClosestClassChatIb = jVarLocalCurrentTarget.closest(".chat_ib");
    let jVarLocalPTag = jVarLocalClosestClassChatIb.querySelector('p');

    return jVarLocalPTag.innerHTML;
};

export { StartFunc };