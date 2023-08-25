let StartFunc = () => {
    let jVarLocalShowProcessId = document.getElementById("ShowProcessId");
    jVarLocalShowProcessId.classList.remove("d-none");

    var form = document.getElementById('KForm1');
    var data = serializeObject(form);

    return {
        ...data
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