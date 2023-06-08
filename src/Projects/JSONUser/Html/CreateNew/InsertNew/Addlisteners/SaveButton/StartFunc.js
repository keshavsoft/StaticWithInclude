import { StartFunc as StartFuncFormValidate } from "./FormValidate.js";
import { StartFunc as StartPostFetch } from "./PostFetch.js";

let StartFunc = ({ inSubRoute }) => {
    let jVarLocalSaveButtonid = document.getElementById("SaveButtonid");

    jVarLocalSaveButtonid.addEventListener("click", async (event) => {
        let jVarLocalFromCheck = StartFuncFormValidate();

        if (jVarLocalFromCheck) {
            await jFLocalSave({ inSubRoute });
        };
    });
};

let serializeObject = (form) => {
    // Create a new FormData object
    const formData = new FormData(form);

    // Create an object to hold the name/value pairs
    const pairs = {};

    // Add each name/value pair to the object
    for (const [name, value] of formData) {
        pairs[name] = value;
    };

    return pairs;
};

let jFLocalSave = async ({ inSubRoute }) => {
    let jVarLocalFetchPostData = jFLocalPrepareFetchBody();
    let jVarLocalFromFetch = await jFLocalCallFetch({ inSubRoute, inFetchPostData: jVarLocalFetchPostData });

    StartPostFetch({ inFetchData: jVarLocalFromFetch, inDataPk: jVarLocalFetchPostData.pk });
};

let jFLocalPrepareFetchBody = () => {
    var form = document.getElementById("kform1");

    let jVarLocalFetchPostData = serializeObject(form);

    return jVarLocalFetchPostData;
};

let jFLocalCallFetch = async ({ inSubRoute, inFetchPostData }) => {
    let jVarLocalFetchPostData = inFetchPostData;

    let jVarLocalSettings = {
        method: "post",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(jVarLocalFetchPostData)
    };

    let jVarLocalUrl = `/${inSubRoute}/Users/Api/Save/WithDataPk`;
    let response = await fetch(jVarLocalUrl, jVarLocalSettings);
    let data = await response.json();

    return data;
};

export { StartFunc };
