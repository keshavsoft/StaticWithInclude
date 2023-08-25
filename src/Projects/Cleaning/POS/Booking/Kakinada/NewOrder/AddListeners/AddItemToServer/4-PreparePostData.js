const StartFunc = () => {

    let jVarLocalToLocalStorage = {};

    jVarLocalToLocalStorage.inJsonConfig = {};
    jVarLocalToLocalStorage.inJsonConfig.inFolderName = "Transactions";
    jVarLocalToLocalStorage.inJsonConfig.inJsonFileName = "Gurudwara.json";

    jVarLocalToLocalStorage.inItemConfig = {};
    jVarLocalToLocalStorage.inItemConfig.inItemName = 'Orders';

    jVarLocalToLocalStorage.inPostData = {
        ItemsInOrder: {}
    };
    jVarLocalToLocalStorage.inPostData.ItemsInOrder[1] = jFLocalPrepareObject();

    return jVarLocalToLocalStorage;
};

let jFLocalPrepareObject = () => {
    try {
        let jVarClosestTabPane = document.getElementById("MenItemsTabId");

        let jVarLocalWashType = jVarClosestTabPane.querySelector(".WashTypeClass");
        let jVarLocalPcs = jVarClosestTabPane.querySelector(".PcsClass");
        let jVarLocalRate = jVarClosestTabPane.querySelector(".RateClass");
        let jVarLocalDisPer = jVarClosestTabPane.querySelector(".DisPerClass");

        let jVarLocalCategory = jVarClosestTabPane.dataset.category;
        let jVarLocalItemSelect = jFLocalItemSelect({ inTabPane: jVarClosestTabPane });

        let localItemSelect = selectItemByValue({ inHtmlSelect: jVarLocalItemSelect.ItemSerialID });
        let localWashSelect = selectItemByValue({ inHtmlSelect: jVarLocalWashType });
        let localPcs = jFLocalFromDomAsInt({ inHtmlId: jVarLocalPcs });
        let localRate = jFLocalFromDomAsInt({ inHtmlId: jVarLocalRate });
        let localDisPer = jFLocalFromDomAsInt({ inHtmlId: jVarLocalDisPer });
        let jVarlocalItemSerial = jFLocalItemSerialClass({ inTabPane: jVarClosestTabPane });
        let jVarlocalLocation = jFLocalFactoriesSelect({ inTabPane: jVarClosestTabPane });
        let localLocationSelect = selectItemByValue({ inHtmlSelect: jVarlocalLocation.locationID });
        let jVarLocalDeliveryDateTime = jFLocalDeliveryDateTimeClass({ inTabPane: jVarClosestTabPane });

        let localReturnObject = {
            ItemSerial: jVarlocalItemSerial.ItemSerial,
            Category: jVarLocalCategory,
            ItemName: localItemSelect,
            ItemNamePk: jVarLocalItemSelect.ItemSerial,
            WashType: localWashSelect,
            WashTypePk: jVarLocalItemSelect.ItemSerial,
            locationPk: jVarlocalLocation.location,
            location: localLocationSelect,
            ...localPcs,
            ...localRate,
            ...localDisPer,
            AddOn: "0-0",
            DeliveryDateTime: jVarLocalDeliveryDateTime.DeliveryDateTime,
            Total: Object.values(localPcs)[0] * Object.values(localRate)[0]
        };

        return localReturnObject;
    } catch (error) {
        console.log("error : ", error);
    };
};

let jFLocalItemSerialClass = ({ inTabPane }) => {
    try {
        let jVarLocalItemsTableBodyId = document.getElementById("ItemsTableBodyId");

        let localReturnObject = {
            ItemSerial: jVarLocalItemsTableBodyId.rows.length + 1
        };

        return localReturnObject;
    } catch (error) {
        console.log("error : ", error);
    };
};

let jFLocalItemSelect = ({ inTabPane }) => {
    try {
        let jVarClosestTabPane = inTabPane;
        let jVarLocalItemSerialClass = jVarClosestTabPane.querySelector(".ItemSelect");

        let localReturnObject = {
            ItemSerial: jVarLocalItemSerialClass.value,
            ItemSerialID: jVarLocalItemSerialClass
        };

        return localReturnObject;
    } catch (error) {
        console.log("error : ", error);
    };
};

let jFLocalFactoriesSelect = ({ inTabPane }) => {
    try {
        let jVarClosestTabPane = inTabPane;
        let jVarLocalFactorySelectClass = jVarClosestTabPane.querySelector(".FactorySelectClass");

        let localReturnObject = {
            location: jVarLocalFactorySelectClass.value,
            locationID: jVarLocalFactorySelectClass
        };

        return localReturnObject;
    } catch (error) {
        console.log("error : ", error);
    };
};

let jFLocalFromDomAsInt = ({ inHtmlId }) => {
    let jVarLocalReturnObject = {};
    let jVarLocalPcsId = inHtmlId;

    let jVarLocalPcsIdValue = jVarLocalPcsId.value;
    let jVarLocalPcsIdName = jVarLocalPcsId.name;

    jVarLocalReturnObject[jVarLocalPcsIdName] = parseInt(jVarLocalPcsIdValue);
    return jVarLocalReturnObject;
};

function selectItemByValue({ inHtmlSelect }) {
    for (var i = 0; i < inHtmlSelect.options.length; i++) {
        if (inHtmlSelect.options[i].value === inHtmlSelect.value) {
            return inHtmlSelect.options[i].text;
        }
    }
};

let jFLocalDeliveryDateTimeClass = ({ inTabPane }) => {
    try {
        let jVarClosestTabPane = inTabPane;
        let jVarLocalItemSerialClass = jVarClosestTabPane.querySelector(".DeliveryDateTimeClass");

        let localReturnObject = {
            DeliveryDateTime: jVarLocalItemSerialClass.value
        };

        return localReturnObject;
    } catch (error) {
        console.log("error : ", error);
    };
};

export { StartFunc };