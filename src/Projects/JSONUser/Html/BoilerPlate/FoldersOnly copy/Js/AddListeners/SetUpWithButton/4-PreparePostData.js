let StartFunc = ({CurrentTarget}) => {

    let LocalDataPK = CurrentTarget.dataset.pk;

    return {
        DataPK: LocalDataPK
    };
};


export { StartFunc };