import { StartFunc as StartFuncFetchFunc } from "./FetchFunc.js";

let StartFunc = async (event) => {
    let jVarLocalCurrentTarget = event.currentTarget;

    Swal.fire({
        title: 'Do you want to Delete the changes?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Delete',
        denyButtonText: `Don't Delete`,
    }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
            StartFuncFetchFunc({ currentTarget: jVarLocalCurrentTarget })
            // Swal.fire('Saved!', '', 'success')
        } else if (result.isDenied) {
            Swal.fire('Changes are not saved', '', 'info')
        }
    });

};

export { StartFunc }