let jFLocalgetCookie = (name) => {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
};

let jFDeleteCookie = (inTokenName) => {
    document.cookie = `${inTokenName}=; expires=Thu, 01 Jan 1947 00:00:00 UTC; path=/;`;
};

const StartFunc = () => {
    let jVarLocalTokenName = "KToken";
    let jVarLocalkUserName = "kUserName";

    localStorage.removeItem(jVarLocalkUserName);
    localStorage.removeItem("FirmDetails");

    jFDeleteCookie(jVarLocalTokenName);
};

export { StartFunc };