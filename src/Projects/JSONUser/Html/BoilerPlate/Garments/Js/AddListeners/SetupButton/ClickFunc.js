import { StartFunc as StartFuncPostFetch } from "./PostFetch.js";

let StartFunc = async (event) => {
    let jVarLocalCurrentTarget = event.currentTarget;
    let LocalDataPK = jVarLocalCurrentTarget.dataset.pk;

    // let jVarLocalUrl = `/JSONUser/Users/Api/Setup/FoldersOnly/${LocalDataPK}`;
    let jVarLocalUrl = `/JSONUser/Users/Api/SetupByCopy/Garments/FromPk/${LocalDataPK}`;

    let response = await fetch(jVarLocalUrl);
    let data = await response.json();

    if (data.KTF) {
        StartFuncPostFetch({
            inPromiseData: data,
            inDataPk: LocalDataPK
        });

        // var myModal = new bootstrap.Modal(document.getElementById('SetupModal'), {
        //     keyboard: false
        // });
        // window.location = "../BoilerPlate/FoldersOnly.html";

        // myModal.show();
    };
};

export { StartFunc };
