let StartFunc = () => {
    if ("ItemsInOrder" in localStorage === false) {
        localStorage.setItem("ItemsInOrder", JSON.stringify({}));
    };

    if ("AddOnData" in localStorage === false) {
        localStorage.setItem("AddOnData", JSON.stringify({}));
    };
};

export { StartFunc }