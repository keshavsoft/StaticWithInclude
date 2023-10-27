import { StartFunc as StartFuncFetchFunc } from "./5-FetchFunc.js";
import { StartFunc as StartFuncPreparePostData } from "./4-PreparePostData.js";
import { StartFunc as StartFuncCheckBeforeFetch } from "./3-CheckBeforeFetch.js";

let StartFunc = () => {
    let jVarLocalCurrentTarget = event.currentTarget;
    // console.log("jVarLocalCurrentTarget : ", jVarLocalCurrentTarget);
    if (jVarLocalCurrentTarget.dataset.issettled === "false") {
        Swal.fire("Need to Settle first");
        return;
    };
    // console.log("jVarLocalCurrentTa---------");


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
                let jVarLocalBodyData = StartFuncPreparePostData({ jVarLocalCurrentTarget });

                StartFuncFetchFunc({
                    inBodyData: jVarLocalBodyData
                }).then(ResponseData => {

                });
            };
        }
    });
};

export { StartFunc };