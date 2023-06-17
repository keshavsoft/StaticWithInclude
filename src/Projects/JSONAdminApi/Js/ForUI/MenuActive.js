let jFChangeHeaderActiveClass = () => {
    let jVarLocalPathArray = window.location.pathname.split("/");
    let jVarLocalHTMLName = jVarLocalPathArray[jVarLocalPathArray.length - 1];
    
    jFChangeNavAnchorClass({ inClassName: jVarLocalHTMLName.split(".")[0] });
};

let jFChangeNavAnchorClass = ({ inClassName }) => {
    let jVarLocalId = "AdminHeaderNavBarId";
    let jVarLocalNavBarId = document.getElementById(jVarLocalId);

    jFLocalRemoveActive({ inHtmlId: jVarLocalNavBarId });
    jFLocalAddActive({ inHtmlId: jVarLocalNavBarId, inClassName });
};

let jFLocalRemoveActive = ({ inHtmlId }) => {
    let jVarLocalA = inHtmlId.querySelectorAll("a");

    for (let i = 0; i < jVarLocalA.length; i++) {
        jVarLocalA[i].classList.remove("text-info");
    };
};

let jFLocalAddActive = ({ inHtmlId, inClassName }) => {
    let jVarLocalA = inHtmlId.querySelector(`[href*="../${inClassName}/${inClassName}.html"]`);
    
    if (jVarLocalA === null === false) {
        jVarLocalA.classList.remove("text-white");
        jVarLocalA.classList.add("text-info");
    };
};

jFChangeHeaderActiveClass();