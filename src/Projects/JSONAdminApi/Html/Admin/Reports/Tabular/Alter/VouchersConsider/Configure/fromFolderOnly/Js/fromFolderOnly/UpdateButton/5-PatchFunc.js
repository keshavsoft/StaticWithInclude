import ApiConfigJson from '../../../../../../../../../ApiConfig.json' assert {type: 'json'};
import { StartFunc as StartFuncAfterFetchFunc } from "./6-AfterFetchFunc.js";


let StartFunc = async ({ inFetchBody, inBodyData }) => {

    const newPath = `/${ApiConfigJson.ProjectName}/Html/Admin/Reports/Tabular/Alter/VouchersConsider/Configure/fromFolderOnly/FromFolderOnly.html` // Replace this with the new path you want

    Swal.fire({
        title: 'Do you want to Update the changes?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Update',
        denyButtonText: `Don't Update`,
        focusDeny: true
    }).then((result) => {
        if (result.isConfirmed) {
            localFetchFunc({ inFetchBody, inBodyData });
        } else if (result.isDenied) {
            window.location.href = newPath;
            Swal.fire('Changes are not saved', '', 'info');

        };
    });

};

const localFetchFunc = async ({ inFetchBody, inBodyData }) => {
    let jFetchUrl = `/${ApiConfigJson.ProjectName}/AdminApi/AsTree/Json/UserFolders/ReportsFolder/LedgerAutoJsonFile/FromReports/FromVoucherConsider/FromKeys/FromFolderOnly`;

    let jLocalFetchConfig = {
        method: "PATCH",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(inFetchBody)
    };

    let response = await fetch(jFetchUrl, jLocalFetchConfig);

    let jVarLocalResponseData = await response.json();
    console.log('jVarLocalResponseData:', jVarLocalResponseData, inBodyData);

    StartFuncAfterFetchFunc({ inResponse: jVarLocalResponseData, inBodyData });

    // return await response.status;

}

export { StartFunc };