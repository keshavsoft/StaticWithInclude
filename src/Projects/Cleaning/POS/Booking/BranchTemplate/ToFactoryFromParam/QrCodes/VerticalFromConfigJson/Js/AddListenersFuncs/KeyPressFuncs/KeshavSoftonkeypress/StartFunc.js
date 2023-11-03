let StartFunc = async (inEvent) => {
    if (inEvent.keyCode === 13) {
        let jVarLocalCurrentTarget = inEvent.currentTarget;
        let jVarLocalClosestForm = jVarLocalCurrentTarget.closest("tr");
        if ("clienteval" in jVarLocalCurrentTarget.dataset) {
            let jVarLocalClientEval = inEvent.currentTarget.dataset.clienteval;
            let jVarLocalReplaced = jVarLocalClientEval.replaceAll("{{KS}}", `"${jVarLocalCurrentTarget.value}"`);
            let jVarLocalEvalValue = `'${jVarLocalCurrentTarget.value}'.${jVarLocalClientEval}`;
            // inEvent.currentTarget.value = eval(jVarLocalEvalValue);
            inEvent.currentTarget.value = eval(jVarLocalReplaced);


        } else {

        };

    };
};

export { StartFunc };
