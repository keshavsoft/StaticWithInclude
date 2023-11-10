let StartFunc = () => {
    let jVarLocalDCFactory = jFLocalFromDomDCFactoryTextId();
    console.log(jVarGlobalPresentViewData2)
    if (jVarGlobalPresentViewData2 === undefined === false){
        if (jVarGlobalPresentViewData2.location === jVarLocalDCFactory){
            return true;
        }
        else{
            Swal.fire({
                icon: "error",
                title: "Error",
                text: `This item should be sent to ${jVarGlobalPresentViewData2.location}`
            });
        }
    }
    return false;
};

let jFLocalFromDomDCFactoryTextId = () => {
    let jVarLocalHtmlDCFactoryTextId = 'DCFactoryTextId';
   let jVarHtmlDCFactoryTextId = document.getElementById(jVarLocalHtmlDCFactoryTextId);
   let jVarHtmlDCFactoryTextIdValue = jVarHtmlDCFactoryTextId.value.trim();
   return jVarHtmlDCFactoryTextIdValue;
};

export { StartFunc };