import { StartFunc as StartFuncFetchFunc } from "./5-FetchFunc.js";
import { StartFunc as StartFuncPreparePostData } from "./4-PreparePostData.js";
import { StartFunc as StartFuncCheckBeforeFetch } from "./3-CheckBeforeFetch.js";
import { StartFunc as StartFuncAfterFetch } from "./6-AfterFetch.js";

let StartFunc = async ({ inEvent }) => {
    let jVarLocalCurrentTarget = inEvent.currentTarget;
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Ok',
        focusCancel: true,
        focusButtonColor: "#0000ff"
    }).then((result) => {
        if (result.isConfirmed) {
            if (StartFuncCheckBeforeFetch()) {
                let jVarLocalBodyData = StartFuncPreparePostData({ inCurrentTarget: jVarLocalCurrentTarget });

                StartFuncFetchFunc({
                    inBodyData: jVarLocalBodyData
                }).then(ResponseData => {
                    if (ResponseData.KTF) {
                        StartFuncAfterFetch({ inQrCodeData: ResponseData.JsonData });
                    };
                });
            };
        }
    });
};

export { StartFunc };