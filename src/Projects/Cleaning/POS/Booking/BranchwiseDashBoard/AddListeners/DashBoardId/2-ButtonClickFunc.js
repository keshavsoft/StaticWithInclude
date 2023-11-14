import { StartFunc as StartFuncToUrl } from "./3-ToUrl.js";

const StartFunc = () => {

    let jVarLocalHtmlIdBranchNameInHtml = "BranchNameInHtml";
    let jVarLocalBranchNameInHtml = document.getElementById(jVarLocalHtmlIdBranchNameInHtml);
    if (jVarLocalBranchNameInHtml.value === "Select Branch") {
        Swal.fire({
            icon: 'warning',
            title: 'Branch Not Selected',
            text: "Please Select Branch"
        }).then(()=>{
            Swal.close();
            jVarLocalBranchNameInHtml.focus();
        });
    } else {
        StartFuncToUrl({
            inBranchName: jVarLocalBranchNameInHtml.value
        });
    };
};

export { StartFunc };