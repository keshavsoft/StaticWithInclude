let StartFunc = ({ inPromiseData, inDataPk }) => {
    if (inPromiseData.KTF) {
        //var myUrlWithParams = new URL("../FoldersOnly/FoldersOnly.html");
        var myUrlWithParams = new URL(window.location);
        console.log("aaaaaaaa : ", myUrlWithParams);
        myUrlWithParams.searchParams.append("isSetup", true);
        myUrlWithParams.searchParams.append("DataPk", inDataPk);

        // myUrlWithParams.location = "../FoldersOnly/FoldersOnly.html";
        // console.log("2222 : ", myUrlWithParams);
        // window.location = "../FoldersOnly/FoldersOnly.html";
        window.location.href = myUrlWithParams.href;
    };
};

export { StartFunc };
