const login = document.querySelector("#login")
const dashboardLink = "http://localhost:3000/" // localhost server link
    // default cred
    // email  = admin@admin.com
    // pass = admin


login.addEventListener('click', event => {
    event.preventDefault()
    const email = document.querySelector("#email").value
    const password = document.querySelector("#password").value
    const acc = accountAddress();
    // console.log(email+ password)
    if (email == "admin@admin.com" && password == "admin" && acc == "0xf8950a1575486d214292f5111a5C7cBfD5D4b635") {
        console.log("logged")
        window.location.href = dashboardLink
    } else {
        login.style.backgroundColor = 'red'
        login.innerHTML = "Retry"
        window.location.reload();
    }

})