let StartFunc = () => {    
    const myUrlWithParams = new URL("../SettlementWithDiscount/SettlementWithDiscount.html", window.location.href);
    
    window.location.href = `${myUrlWithParams.href}${window.location.search}`;
};

export { StartFunc }