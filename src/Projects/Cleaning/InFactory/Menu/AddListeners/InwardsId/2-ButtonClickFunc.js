import { StartFunc as StartFuncToUrl } from "./3-ToUrl.js";

const StartFunc = () => {

    let jVarLocalHtmlIdFactoryNameInHtml = "FactoryNameInHtml";
    let jVarLocalFactoryNameInHtml = document.getElementById(jVarLocalHtmlIdFactoryNameInHtml);
    if (jVarLocalFactoryNameInHtml.value === "Select Factory") {
        Swal.fire({
            icon: 'warning',
            title: 'Factory Not Selected',
            text: "Please Select Factory"
        }).then(()=>{
            Swal.close();
            jVarLocalFactoryNameInHtml.focus();
        });
    } else {
        StartFuncToUrl({
            inFactoryName: jVarLocalFactoryNameInHtml.value
        });
    };
};

export { StartFunc };