import { StartFunc as StartFuncFetchFunc } from "./FetchFunc.js";
import { StartFunc as StartFuncPreparePostData } from "./PreparePostData.js";
import { StartFunc as StartFuncCheckBeforeFetch } from "./CheckBeforeFetch.js";
import { StartFunc as StartFuncAfterFetch } from "./AfterFetch.js";

let StartFunc = async () => {
    if (StartFuncCheckBeforeFetch()) {

        const input = document.getElementById('csvFileInput');
        const file = input.files[0];


        if (file) {
            const reader = new FileReader();

            reader.onload = async function (e) {
                const csvData = e.target.result;
                const jsonArray = convertCsvToJsonFunction(csvData);

                let JsonStrfey = JSON.stringify(jsonArray);
                let jVarLocalBodyData = await StartFuncPreparePostData({ inCsvJsonData: JsonStrfey });
                let response = await StartFuncFetchFunc({ inBodyData: jVarLocalBodyData });
                StartFuncAfterFetch({ inFromFetch: response });
                console.log("CsvintoJson:", CsvintoJson);
            };

            reader.readAsText(file);
        } else {
            alert('Please select a CSV file.');
        };
        let convertCsvToJsonFunction = (csvData) => {
            const parsedData = Papa.parse(csvData, { header: true });
            return parsedData.data;
        }


    };
};


export { StartFunc };