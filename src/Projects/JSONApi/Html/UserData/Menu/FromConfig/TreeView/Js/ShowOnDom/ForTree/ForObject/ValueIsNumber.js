let jFLocalForTagsASpanAndI = () => {
    let a1 = document.createElement("a");
    a1.setAttribute("href", "#");

    a1.classList.add("list-link");
    a1.classList.add("link-current");

    let jVarLocalSpan = document.createElement("span");
    jVarLocalSpan.classList.add("list-icon");

    let jVarLocalITag = document.createElement("i");
    jVarLocalITag.classList.add("fa-solid");
    jVarLocalITag.classList.add("fa-list-ol");

    jVarLocalSpan.appendChild(jVarLocalITag);

    a1.appendChild(jVarLocalSpan);

    return a1;
};

let StartFunc = ({ inParentLiTag, inKey, inValue }) => {
    let jVarLocalValue = inValue;
    let a1 = jFLocalForTagsASpanAndI();

    a1.insertAdjacentHTML("beforeend", `${inKey} : ${jVarLocalValue}`);
    inParentLiTag.appendChild(a1);
};

export { StartFunc };