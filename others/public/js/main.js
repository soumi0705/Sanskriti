// register Js
const forminfo = document.querySelector("#forminfo")
const KYCLink = "http://localhost:3000/" // local host address kyc link
forminfo.addEventListener('submit', event => {
    event.preventDefault()
    console.log(forminfo)
    console.log(forminfo.elements)
    if (forminfo.elements['pass'].value == forminfo.elements['pass2'].value) {
        console.log("ok")
            // window.location.href = KYCLink
    } else {
        alert("confirm Password didn't Match!")
    }
    func();
});

async function func() {
    var formData = new FormData(forminfo);
    var request = new XMLHttpRequest();
    var acc = await accountAddress();

    request.open("POST", "/register");
    var formData1 = 'email=' + formData.get("email") + '&acc=' + acc + '&tel=' + formData.get("tel") + '&address=' + formData.get("address") + '&pass=' + formData.get("pass");

    console.log("ok");
    request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    request.send(formData1);
    window.location.href = "http://localhost:5000/";
}