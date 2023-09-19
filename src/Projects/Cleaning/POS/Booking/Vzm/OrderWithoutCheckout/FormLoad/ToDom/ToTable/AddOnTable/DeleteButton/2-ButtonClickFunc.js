import { StartFunc as StartFuncFetchFunc } from "./5-FetchFunc.js";
import { StartFunc as StartFuncPreparePostData } from "./4-PreparePostData.js";
// import { StartFunc as StartFuncCheckBeforeFetch } from "./3-CheckBeforeFetch.js";
// import { StartFunc as StartFuncAfterFetch } from "./6-AfterFetch.js";

let StartFunc = (event) => {
    let jVarLocalEvent = event;
    let jVarLocalCurrentTarget = jVarLocalEvent.currentTarget;
    let jVarLocalRowPk = jVarLocalCurrentTarget.dataset.pk;

    jFLocalSwal({
        inRowPk: jVarLocalRowPk,
    });
};

const jFLocalSwal = ({ inRowPk }) => {
    Swal.fire({
        title: `${inRowPk} : Are you sure?`,
        showCancelButton: true,
        confirmButtonText: 'Delete',
        cancelButtonText: 'No',
        showLoaderOnConfirm: true,
        allowOutsideClick: () => !Swal.isLoading()
    }).then((result) => {
        if (result.isConfirmed) {
            let jVarLocalPreparePostData = StartFuncPreparePostData({ inRowPk });
            let response = StartFuncFetchFunc({ inBodyData: jVarLocalPreparePostData }).then(PromiseData => {
                console.log("PromiseData", PromiseData);
                if (PromiseData.KTF === true) {
                    window.location.href = "";
                }
            });
            console.log("jVarLocalFromChange : ", response);
        }
    });
};

export { StartFunc };