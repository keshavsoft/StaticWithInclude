let StartFunc = ({ inDataToShow }) => {
    console.log("inDataToShow:", inDataToShow.JsonData.CustomerName );
    jFLocalToInnerHtmlCustomerNameId({ inCustomerNameId: inDataToShow.JsonData.CustomerName });
    jFLocalToInnerHtmlCityId({ inCityId: inDataToShow.JsonData.City });
    jFLocalToInnerHtmlMobileId({ inMobileId: inDataToShow.JsonData.Mobile });

};

let jFLocalToInnerHtmlCustomerNameId = ({ inCustomerNameId }) => {
    let jVarLocalHtmlId = 'CustomerNameId';
    let jVarLocalCustomerNameId = document.getElementById(jVarLocalHtmlId);
    jVarLocalCustomerNameId.value = inCustomerNameId;
};

let jFLocalToInnerHtmlCityId = ({ inCityId }) => {
    let jVarLocalHtmlId = 'CityId';
    let jVarLocalCityId = document.getElementById(jVarLocalHtmlId);
    jVarLocalCityId.value = inCityId;
};

let jFLocalToInnerHtmlMobileId = ({ inMobileId }) => {
    let jVarLocalHtmlId = 'MobileId';
    let jVarLocalMobileId = document.getElementById(jVarLocalHtmlId);
    jVarLocalMobileId.value = inMobileId;
};

export { StartFunc };