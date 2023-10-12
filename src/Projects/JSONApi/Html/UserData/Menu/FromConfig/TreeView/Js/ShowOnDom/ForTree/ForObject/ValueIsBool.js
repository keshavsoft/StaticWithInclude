let jFLocalForTagsASpanAndI = () => {
    let a1 = document.createElement("a");
    a1.setAttribute("href", "#");

    a1.classList.add("list-link");
    a1.classList.add("link-current");

    let jVarLocalSpan = document.createElement("span");
    jVarLocalSpan.classList.add("list-icon");

    let jVarLocalITag = document.createElement("i");
    jVarLocalITag.classList.add("bi");
    jVarLocalITag.classList.add("bi-check-lg");

    jVarLocalSpan.appendChild(jVarLocalITag);

    a1.appendChild(jVarLocalSpan);

    return a1;
};

let jFLocalForFalse = () => {
    let a1 = document.createElement("a");
    a1.setAttribute("href", "#");

    a1.classList.add("list-link");
    a1.classList.add("link-current");

    let jVarLocalSpan = document.createElement("span");
    jVarLocalSpan.classList.add("list-icon");

    let jVarLocalITag = document.createElement("i");
    jVarLocalITag.classList.add("bi");
    jVarLocalITag.classList.add("bi-x-lg");

    jVarLocalSpan.appendChild(jVarLocalITag);

    a1.appendChild(jVarLocalSpan);

    return a1;
};

let StartFunc = ({ inParentLiTag, inKey, inValue }) => {
    let jVarLocalValue = inValue;
    if (jVarLocalValue) {
    let a1 = jFLocalForTagsASpanAndI();

    a1.insertAdjacentHTML("beforeend", `${inKey} : ${jVarLocalValue}`);
    inParentLiTag.appendChild(a1);
    }else{
        let a1 = jFLocalForFalse();

        a1.insertAdjacentHTML("beforeend", `${inKey} : ${jVarLocalValue}`);
        inParentLiTag.appendChild(a1);
    };
};

export { StartFunc };