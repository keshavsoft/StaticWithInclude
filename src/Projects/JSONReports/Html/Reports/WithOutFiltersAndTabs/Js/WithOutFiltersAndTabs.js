import { StartFunc as StartFuncToStaticDom } from "./ToStaticDom/AddListenerFuncs/StartFunc.js";

let StartFunc = () => {
    StartFuncToStaticDom();
};

let StartFunc1 = () => {
    let jVarLocalHtmlId = 'GoButtonOnDomId';
    let jVarLocalGoButtonOnDomId = document.getElementById(jVarLocalHtmlId);

    jVarLocalGoButtonOnDomId.addEventListener("click", () => {
        let jVarLocalCurrentTarget = inEvent.currentTarget;
        let jVarClosestInputGroup = jVarLocalCurrentTarget.closest(".input-group");
        let jVarClosestCard = jVarLocalCurrentTarget.closest(".tab-pane");
        let jVarClosestContainer = jVarLocalCurrentTarget.closest(".container");
        let jVarClosestTabPane = jVarLocalCurrentTarget.closest(".tab-pane");;
        let jVarLocalHtmlCardBody = jVarClosestCard.querySelector(".TabPaneKCont1");

        let jVarLocalRoute = jVarGlobalProject;
        let jVarLocalSubRoute = jVarGlobalSubRoute;
        let jVarLocalReportSelected = jVarClosestInputGroup.querySelector(".ReportSelectedClass").value;
        let jVarCurrentTabButton = jVarClosestContainer.querySelector(`ul.nav-tabs button[data-bs-target='#${jVarClosestTabPane.id}']`);
        jVarCurrentTabButton.innerText = jVarLocalReportSelected;

        let jVarLocalFetchUrl = `/${jVarLocalRoute}/${jVarLocalSubRoute}/Reports/PullData/WithOutFilters/AsTable/DataWithConfig/${jVarLocalReportSelected}`;

        fetch(jVarLocalFetchUrl)
            .then(response => {
                if (response.status === 403) {
                    let jVarLocalModalId = this.Config.Ht.HtmlIds.Modals.LoginModalId;
                    let jVarLocalLoginFormPopUpId = document.getElementById(jVarLocalModalId);

                    if (jVarLocalLoginFormPopUpId !== null) {
                        var myModal = new bootstrap.Modal(jVarLocalLoginFormPopUpId, { keyboard: false, focus: true });
                        myModal.show();
                    };
                    return null;
                };

                return response.json();
            })
            .then(FetchData => {
                if (FetchData !== null) {
                    if (FetchData.KTF) {
                        localStorage.setItem("KeshavSoftReportData", JSON.stringify({
                            HTMLControlType: "Table",
                            KData: FetchData.DataFromServer.KData
                        }));

                        jVarGlobalPresentViewData = KeshavSoftCrud.BuildFromArray([JSON.parse(localStorage.getItem("KeshavSoftReportData"))]);

                        jVarGlobalKeshavSoftLocalFuncsObject.AppendToDOM.RequiredHtml({
                            inData: jVarGlobalPresentViewData,
                            inHtmlParent: jVarLocalHtmlCardBody
                        });

                        jVarGlobalKeshavSoftLocalFuncsObject.AppendToDOM.SetFocusFuncs.TableShow({ inHtmlParent: jVarLocalHtmlCardBody });
                    };
                };
            });
    });
};

StartFunc();