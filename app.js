let number = Number(prompt("raqamingizni kiriting: "))
const API = 'https://common.insales.help/biostore_uz/sms_send.php?phone=' + number + '&act=get_sms';
const getData = (resource) => {
    return new Promise((resolve, rejact) => {
        const request = new XMLHttpRequest()
        request.open('GET', resource)
        request.send()
        request.addEventListener('readystatechange', () =>{
            if (request.readyState === 4 && request.status === 200){
                const data = JSON.parse(request.responseText)
                console.log("Server ishlayapti");
                if(data.what === "empty_phone" || data.status === "error"){
                    alert("Telefon raqam kiriting")
                }else{
                    if(number > 998000000000){
                        var cod = Number(prompt("Kodni kiriting: "))
                        if (data.code == cod){
                            alert("Siz muvaffaqiyatli ro'yxatdan o'tingiz");
                        }else{
                            alert("kod xato");
                        }
                    }else{
                        alert("Telefon raqamni to'g'ri kiriting")
                    }
                }
            }else if (request.readyState === 4){
                alert("Serverda nosozlik");
            }
        })
    })
}
getData(API)
// fetch(API)
// .then((data) => {
//     return data.json()
// })
// .then((dataJson) => {
//     console.log(dataJson);
// })
// .catch((err) => {
//     console.log(err);
// })