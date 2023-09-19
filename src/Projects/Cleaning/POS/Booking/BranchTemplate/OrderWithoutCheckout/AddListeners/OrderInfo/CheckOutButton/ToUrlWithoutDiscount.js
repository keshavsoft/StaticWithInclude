let StartFunc = () => {
    const myUrlWithParams = new URL("../Settlement/Settlement.html", window.location.href);
    
    window.location.href = `${myUrlWithParams.href}${window.location.search}`;
};

export { StartFunc }