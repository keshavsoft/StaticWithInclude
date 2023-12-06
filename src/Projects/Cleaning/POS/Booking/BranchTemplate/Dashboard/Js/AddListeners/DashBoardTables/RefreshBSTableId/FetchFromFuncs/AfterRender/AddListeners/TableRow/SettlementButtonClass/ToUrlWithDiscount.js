let StartFunc = ({ inOrderNumber }) => {

    const jVarLocalPresentUrl = new URL(window.location.href);
    const jVarLocalPresentParams = new URLSearchParams(jVarLocalPresentUrl.search);
    jVarLocalPresentParams.append("OrderNumber", inOrderNumber);

    // let myUrlWithParams = new URL("../SettlementWithDiscount/SettlementWithDiscount.html", window.location.href);

    // myUrlWithParams.searchParams.append("OrderNumber", inOrderNumber);

    let NewURl = new URL("../SettlementWithDiscount/SettlementWithDiscount.html", jVarLocalPresentUrl);

    const new_url = new URL(`${NewURl.href}?${jVarLocalPresentParams}`);
    console.log("aaaaaaaaaaaaaa", new_url);
    window.location.href = new_url;
};


// let StartFunc = () => {

//     const url = new URL(window.location.href);
//     const params1 = new URLSearchParams(url.search);
//     let NewURl = new URL("../BSTableFilterFromVoucher/BSTableFilterFromVoucher.html", url);
//     const new_url = new URL(`${NewURl.href}?${params1}`);
//     window.location.href = new_url.href;
// };

// export { StartFunc };

export { StartFunc }