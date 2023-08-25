// import { StartFunc as StartFuncChangePcs } from "../../../../ToLocalStorage/ItemsInOrder/ChangePcs.js";
import { StartFunc as StartFuncChangePcs } from "../../../../../../ToLocalStorage/ItemsInOrder/ChangePcs.js";

let StartFunc = (event) => {
    let jVarLocalEvent = event;
    let jVarLocalCurrentTarget = jVarLocalEvent.currentTarget;
    let jVarLocalitemserial = jVarLocalCurrentTarget.dataset.itemserial;

    jFLocalSwal({
        inItemSerial: jVarLocalitemserial,
        inPcs: jVarLocalCurrentTarget.value
    });
};

const jFLocalSwal = ({ inItemSerial, inPcs }) => {
    Swal.fire({
        title: `${inItemSerial} : Change Pcs`,
        input: 'number',
        inputAttributes: {
        },
        inputValue: inPcs,
        showCancelButton: true,
        confirmButtonText: 'Save Pcs',
        showLoaderOnConfirm: true,
        allowOutsideClick: () => !Swal.isLoading()
    }).then((result) => {
        if (result.isConfirmed) {
            let jVarLocalFromChange = StartFuncChangePcs({ inKey: inItemSerial, inPcs: parseInt(result.value) });
            console.log("jVarLocalFromChange : ", jVarLocalFromChange);
            if (jVarLocalFromChange) {
                // StartFuncToOrderItems();
            };
        }
    });
};

export { StartFunc };