let StartFunc = () => {
    jFLocalpkKeyPress();
};

const jFLocalpkKeyPress = () => {
    let LocalDompk = document.getElementById("pk");
    let jVarLocalUserName = document.getElementById("UserName");

    LocalDompk.addEventListener("keypress", jFLocalpkKeyPressFunc);
    jVarLocalUserName.addEventListener("keypress", jFLocalpkKeyPressFunc);
};

let jFLocalpkKeyPressFunc = (event) => {
    if (event.key === "Enter") { // key code of the keybord key
        event.preventDefault();
        let jVarLocalSaveButtonid = document.getElementById("SaveButtonid");

        jVarLocalSaveButtonid.click();
    };
};

export { StartFunc };
