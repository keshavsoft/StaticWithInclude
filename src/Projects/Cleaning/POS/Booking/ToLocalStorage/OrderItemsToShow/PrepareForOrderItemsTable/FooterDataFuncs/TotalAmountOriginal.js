let StartFunc = ({ inData }) => {
    let jVarLocalItemsArray = Object.values(inData).map(element => {
        return element.TotalOriginal;
    });

    const sum = jVarLocalItemsArray.reduce((partialSum, a) => partialSum + a, 0);

    return Number(sum.toFixed(2));

};

export { StartFunc };