let StartFunc = ({ inFromFetch, inBodyData, CurrentTarget }) => {
    if ("KTF" in inFromFetch) {
        if (inFromFetch.KTF) {
            window.location = "";

        } else {
            let jVarLocalClosestTr = CurrentTarget.closest("tr");
            let jVarLocalInput = jVarLocalClosestTr.querySelector('[name="ScreenName"]');
            let jVarLocaldiv = jVarLocalClosestTr.querySelector('.invalid-feedback');

            jVarLocalInput.classList.add("is-invalid");
            jVarLocaldiv.innerHTML = "Column: already found !"

        }

    } else {
        console.log("KTF not found in fetch");
    }

};


export { StartFunc };