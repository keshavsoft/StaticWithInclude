let StartFunc = ({ PreparePostData }) => {

    let localFunckCondition = JfLocalFunc({ PreparePostData });
    if (localFunckCondition) {
        return true;
    };


    return false;
};

const JfLocalFunc = ({ PreparePostData }) => {
    if (PreparePostData.UserName === "") {
        window.alert("Please Enter UserName");

    } else if (PreparePostData.PassWord === "") {
        window.alert("Please Enter PassWord");
    };

    if (PreparePostData.UserName === "" === false) {
        if (PreparePostData.PassWord === "" === false) {

            return true;
        };
    };
    return false;
}



export { StartFunc };