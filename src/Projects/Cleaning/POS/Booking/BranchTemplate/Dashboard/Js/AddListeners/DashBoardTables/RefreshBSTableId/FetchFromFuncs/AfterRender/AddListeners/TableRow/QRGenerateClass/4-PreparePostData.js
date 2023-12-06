import ApiConfigJson from "../../../../../../../../../../ApiConfig.json" assert {type: 'json'};

const StartFunc = ({ jVarLocalCurrentTarget }) => {
    let jVarLocalBodyData = {};
    let jVarLocalRowPk = jVarLocalCurrentTarget.dataset.ordernumber;
    jVarLocalBodyData.inProjectName = ApiConfigJson.ProjectName;
    jVarLocalBodyData.inRowPk = jVarLocalRowPk;
    return jVarLocalBodyData;
};

export { StartFunc };