// register Js
const forminfo=document.querySelector("#forminfo")
const KYCLink ="http://localhost:3000/" // local host address kyc link
forminfo.addEventListener('submit',event=>{
    event.preventDefault()
    console.log(forminfo)
    console.log(forminfo.elements)
    if(forminfo.elements['pass'].value==forminfo.elements['pass2'].value){
        console.log("ok")
        window.location.href=KYCLink
    }

    else{
        alert("confirm Password didn't Match!")
    }
})