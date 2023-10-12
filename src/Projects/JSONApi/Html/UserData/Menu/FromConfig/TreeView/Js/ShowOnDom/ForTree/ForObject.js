import { StartFunc as StartFuncForObject } from "./ForObject/ValueIsObject.js";
import { StartFunc as StartFuncForBool } from "./ForObject/ValueIsBool.js";
import { StartFunc as StartFuncForString } from "./ForObject/ValueIsString.js";
import { StartFunc as StartFuncForNumber } from "./ForObject/ValueIsNumber.js";
import { StartFunc as StartFuncForArray } from "./ForObject/ValueIsArray.js";

let StartFunc = ({ inObject, inParentUl }) => {
    let jVarLocalObject = inObject;

    let jVarLocalUl = document.createElement("ul");

    jVarLocalUl.classList.add("list-unstyled");

    Object.entries(jVarLocalObject).forEach(([key, value]) => {
        jFIsEntry({ inParentUl, inKey: key, inValue: value })
    });

};

let jFIsEntry = ({ inParentUl, inKey, inValue }) => {
    let jVarLocalValue = inValue;

    let l1 = document.createElement("li");

    if (typeof jVarLocalValue === 'string' || jVarLocalValue instanceof String) {
        StartFuncForString({ inParentLiTag: l1, inKey, inValue });
    };

    if (typeof jVarLocalValue === 'number' || jVarLocalValue instanceof String) {
        StartFuncForNumber({ inParentLiTag: l1, inKey, inValue });
    };

    if (typeof jVarLocalValue === 'boolean') {
        StartFuncForBool({ inParentLiTag: l1, inKey, inValue });
    };

    if (Array.isArray(jVarLocalValue)) {
        StartFuncForArray({ inParentLiTag: l1, inKey });

        let jVarLocalUl = document.createElement("ul");

        jVarLocalUl.classList.add("list-unstyled");
        jVarLocalUl.classList.add("list-hidden");

        l1.appendChild(jVarLocalUl);

        StartFunc({ inObject: inValue, inParentUl: jVarLocalUl })

    };

    if (typeof jVarLocalValue === 'object' && jVarLocalValue !== null) {
        StartFuncForObject({ inParentLiTag: l1, inKey });

        let jVarLocalUl = document.createElement("ul");

        jVarLocalUl.classList.add("list-unstyled");
        jVarLocalUl.classList.add("list-hidden");

        l1.appendChild(jVarLocalUl);

        StartFunc({ inObject: inValue, inParentUl: jVarLocalUl })

    };
    
    inParentUl.appendChild(l1);
};

let jFLocalForTagsASpanAndI = () => {
    let a1 = document.createElement("a");
    a1.setAttribute("href", "#");

    a1.classList.add("list-link");
    a1.classList.add("link-current");

    let jVarLocalSpan = document.createElement("span");
    jVarLocalSpan.classList.add("list-icon");

    let jVarLocalITag = document.createElement("i");
    jVarLocalITag.classList.add("fa-solid");
    jVarLocalITag.classList.add("fa-mug-hot");
    jVarLocalITag.classList.add("bell");

    jVarLocalSpan.appendChild(jVarLocalITag);

    a1.appendChild(jVarLocalSpan);

    return a1;
};

export { StartFunc };