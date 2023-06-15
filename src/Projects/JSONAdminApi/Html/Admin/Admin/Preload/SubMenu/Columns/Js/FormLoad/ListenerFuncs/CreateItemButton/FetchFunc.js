const StartFunc = async ({inBodyData, Url}) => {

        let localUrl = Url;
    
        let jFetchBody = {
            method: "post",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(inBodyData)
        };
    
        let response = await fetch(localUrl, jFetchBody);
    
        if (response.status === 200) {
            return await response.json();
        };
    };

export { StartFunc };