let StartFunc = async ({ inFromFetch }) => {
    let LocalReturnObject = { KTF: false, KResult: "", JsonData: {} };
console.log("inFromFetch:",inFromFetch);
    if (inFromFetch.KTF === false) {
        // LocalReturnObject.KReason = data.KReason;
        // return await LocalReturnObject;
        Swal.fire({
            icon: 'success',
            title: 'Raised',
            text: inFromFetch.KReason
        });
    } else {
        // LocalReturnObject.JsonData = data.JsonData;
        // LocalReturnObject.KTF = true;
        let timerInterval
        Swal.fire({
            title: 'QR Code Generatimg..!',
            html: 'Generating QR <b></b>',
            timer: 2000,
            timerProgressBar: true,
            didOpen: () => {
                Swal.showLoading()
                const b = Swal.getHtmlContainer().querySelector('b')
                timerInterval = setInterval(() => {
                    b.textContent = Swal.getTimerLeft()
                }, 100)
            },
            willClose: () => {
                clearInterval(timerInterval)
            }
        }).then((result) => {
            /* Read more about handling dismissals below */
            if (result.dismiss === Swal.DismissReason.timer) {
                console.log('I was closed by the timer')
            }
        })
    };

};

export { StartFunc };