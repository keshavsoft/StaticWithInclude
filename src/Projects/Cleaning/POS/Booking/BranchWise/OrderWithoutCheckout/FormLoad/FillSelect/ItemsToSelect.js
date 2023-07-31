let StartFunc = () => {
    var element = document.getElementById('MenRadioId');
    var event = new Event('click');
    element.dispatchEvent(event);

    var element = document.getElementById('ItemSelectId');
    var event = new Event('change');
    element.dispatchEvent(event);
};

export { StartFunc };