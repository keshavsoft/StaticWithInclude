let StartFunc = () => {
    var form = document.getElementById("kform1");
    let jVarLocalFetchPostData = serializeObject(form);

    return {
        FormData: jVarLocalFetchPostData
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