import { StartFunc as StartFuncFetchFunc } from "./5-FetchFunc.js";
import { StartFunc as StartFuncPreparePostData } from "./4-PreparePostData.js";
import { StartFunc as StartFuncCheckBeforeFetch } from "./3-CheckBeforeFetch.js";
// import { StartFunc as StartFuncAfterFetch } from "./6-AfterFetch.js";

let StartFunc = (event) => {
    let jVarLocalEvent = event;
    let jVarLocalCurrentTarget = jVarLocalEvent.currentTarget;
    let jVarLocalitemserial = jVarLocalCurrentTarget.dataset.itemserial;

    jFLocalSwal({
        inItemSerial: jVarLocalitemserial,
        inPcs: jVarLocalCurrentTarget.value
    });
};

const jFLocalSwal = ({ inItemSerial }) => {
    Swal.fire({
        title: `${inItemSerial} : Are you sure?`,
        showCancelButton: true,
        confirmButtonText: 'Delete',
        cancelButtonText: 'No',
        showLoaderOnConfirm: true,
        allowOutsideClick: () => !Swal.isLoading()
    }).then((result) => {
        if (result.isConfirmed) {
            jFLocalSwalAfterSwal({ inItemSerial });
        }
    });
};

let jFLocalSwalAfterSwal = ({ inItemSerial }) => {
    if (StartFuncCheckBeforeFetch({ inItemSerial })) {
        let jVarLocalPreparePostData = StartFuncPreparePostData({ inItemSerial });

        StartFuncFetchFunc({ inBodyData: jVarLocalPreparePostData }).then(PromiseData => {
            if (PromiseData.KTF === true) {
                window.location.href = "";
            }
        });
    }
}

export { StartFunc };