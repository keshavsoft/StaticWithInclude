import { StartFunc as StartFuncAfterFetchFunc } from "./6-AfterFetchFunc.js";


const StartFunc = ({ inFetchBody, inProjectName }) => {

    let jFetchUrl = `/${inProjectName}/Admin/Api/Create/WithOutPassword`;

    let jLocalFetchConfig = {
        method: "post",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(inFetchBody)
    };

    fetch(jFetchUrl, jLocalFetchConfig).then(response => {
        switch (response.headers.get('content-type')) {
            case "text/html":
                return response.text();
                break;

            default:
                return response.json();
                break;
        };
    }).then(FetchData => {
        jVarLocalShowProcessId.classList.add("d-none");

        StartFuncAfterFetchFunc({ inFetchData: FetchData });
    });




    // StartFuncAfterFetchFunc({ inFetchData: jVarLocalResponseData });

    // return await response.status;

}

export { StartFunc };