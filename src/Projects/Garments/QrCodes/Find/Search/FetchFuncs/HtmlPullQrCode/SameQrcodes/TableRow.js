let StartFunc = async () => {
    try {
        let LocalReturnObject = { KTF: false, KResult: "", JsonData: {} };

        let jVarLocalFetchUrl = `HtmlQrCode/ForHbs/SameQrcodes/TableRow.html`;

        const response = await fetch(jVarLocalFetchUrl);
        const data = await response.text();

        LocalReturnObject.HtmlString = data;

        LocalReturnObject.KTF = true;
        return await LocalReturnObject;

    } catch (error) {
        console.log("error:", error);
    }

};

export { StartFunc };