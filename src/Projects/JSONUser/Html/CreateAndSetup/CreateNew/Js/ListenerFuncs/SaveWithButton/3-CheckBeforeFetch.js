let StartFunc = ({ PreparePostData }) => {
    let localuserNameId = document.getElementById("UserName");
    let localPassWordId = document.getElementById("PassWord");

    if (PreparePostData.FormData.UserName === "") {
        localuserNameId.classList.add("is-invalid");

    };

    if (PreparePostData.FormData.PassWord === "") {
        localPassWordId.classList.add("is-invalid");
    };

    let localFunckCondition = JfLocalFunc({ PreparePostData });
    if (localFunckCondition) {
        return true;
    };


    return false;
};

const JfLocalFunc = ({ PreparePostData }) => {

    if (PreparePostData.FormData.UserName === "" === false) {
        if (PreparePostData.FormData.PassWord === "" === false) {

            return true;
        };
    };
    return false;
}



export { StartFunc };