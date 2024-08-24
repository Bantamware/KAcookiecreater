function setCookie(cookieName, cookieValue, cookieExpire) {
    const date = new Date()
    date.setTime(date.getTime() + (cookieExpire * 24 * 60 *60  * 1000))
    let expires = "expires=" + date.toUTCString()
    document.cookie = cookieName + "=" + cookieValue + ";" + expires + ";path=/"
}

function getCookie(cookieName) {
    let name = cookieName + "="
    let cookieA = document.cookie.split(';')
    for (let i = 0; i < cookieA.length; i++) {
        let c = cookieA[i]
        while (c.charAt(0) == ' ') {
            c = c.substring(1)
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length)
        }
    }
    return ""
}

function getDetails() {
    let newInput = document.getElementById("yourname").value
    if (newInput != "" && newInput != null) {
        setCookie("username", newInput, 365)
    }
}

function displayDetails(name) {
    let output = document.getElementById("newoutput")
    let distroyInput = document.getElementById("newinput")
    distroyInput = ""
    let out = ""
    out += `
        <h1>Welcome back ${name}!</h1>
    `
    output.innerHTML = out
}

function checkCookie() {
    let user = getCookie("username")
    if (user != "" && user != null) {
        displayDetails(user)
    }
}
checkCookie()