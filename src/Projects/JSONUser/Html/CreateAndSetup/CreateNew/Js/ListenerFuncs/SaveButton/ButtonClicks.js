import { StartFunc as StartFuncPostFetch } from "./PostFetch.js";

let StartFunc = ({ inSubRoute }) => {
    let jVarLocalSaveButtonId = document.getElementById("SaveButtonId");

    jVarLocalSaveButtonId.addEventListener("click", async () => {
        await LocalButtonClickFunc({ inSubRoute });
    });
};

let LocalButtonClickFunc = async ({ inSubRoute }) => {
    var form = document.getElementById("kform1");
    let jVarLocalFetchPostData = serializeObject(form);

    let jVarLocalSettings = {
        method: "post",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(jVarLocalFetchPostData)
    };

    let jVarLocalUrl = `/${inSubRoute}/Users/Api/Save`;

    if (jVarLocalFetchPostData.UserName === "") {
        window.alert("Please Enter UserName");

    } else if (jVarLocalFetchPostData.PassWord === "") {
        window.alert("Please Enter PassWord");
    };

    if (jVarLocalFetchPostData.UserName === "" === false) {
        if (jVarLocalFetchPostData.PassWord === "" === false) {
            let jVarLocalFromFetch = await fetch(jVarLocalUrl, jVarLocalSettings);
            let jVarLocalFetchData = await jVarLocalFromFetch.json();

            StartFuncPostFetch({ inFetchData: jVarLocalFetchData });
        };
    };
};

let serializeObject = (form) => {
    // Create a new FormData object
    const formData = new FormData(form);

    // Create an object to hold the name/value pairs
    const pairs = {};

    // Add each name/value pair to the object
    for (const [name, value] of formData) {
        pairs[name] = value;
    }

    // Return the object
    return pairs;
};

export { StartFunc };
