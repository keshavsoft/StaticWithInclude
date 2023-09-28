let StartFunc = async({ inFetchPostData, inHtmlCard }) => {
    let jVarLocalFetchData = inFetchPostData;
    console.log("jVarLocalFetchData000", jVarLocalFetchData);
    if (jVarLocalFetchData.KTF === false) {
        return await jFLocalForFailure({ inFetchPostData, inHtmlCard });
    } else {
        jFLocalForSuccess();
    };
};

let jFLocalForSuccess = () => {
    const url = new URL(window.location.href);
    const params1 = new URLSearchParams(url.search);
    let NewURl = new URL("../BSTableFromScreen/BSTableFromScreen.html", url);
    const new_url = new URL(`${NewURl.href}?${params1}`);
    window.location.href = new_url.href;
};

let jFLocalForFailure = async ({ inFetchPostData, inHtmlCard }) => {
    switch (inFetchPostData.ColumnDataAttribute) {
        case "VoucherRef":
            inHtmlCard.classList.remove("border-success");
            inHtmlCard.classList.add("border-danger");
            Swal.fire({
                title: `${inFetchPostData.ColumnDataAttribute} Not Found`,
                text: `${inFetchPostData.KReason}`,
                icon: 'error',
            }).then(function () {
                let jVarLocalVoucherInput = document.getElementById("VoucherRef");
                jVarLocalVoucherInput.focus();
            });

            break;
        case "pk":
            inHtmlCard.classList.remove("border-success");
            inHtmlCard.classList.add("border-danger");
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Your work has been saved',
                showConfirmButton: false,
                timer: 1500
              });
            return await false;
            // {
            //     title: `${inFetchPostData.ColumnDataAttribute} Not Found`,
            //     text: `${inFetchPostData.KReason}`,
            //     icon: 'error',
            // })
            break;
        default:
            break;
    }
};

// inHtmlCard.classList.remove("border-success");
    // inHtmlCard.classList.add("border-danger");
    // let jVarLocalShowFailure = inHtmlCard.querySelector("#ShowFailure");
    // jVarLocalShowFailure.classList.remove("visually-hidden");
    // let jVarLocalFirstInput = inHtmlCard.querySelector("input");
    // jVarLocalFirstInput.focus();

export { StartFunc };