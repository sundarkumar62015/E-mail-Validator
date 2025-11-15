// console.log("this is my script")
// let result = {
    
//   "tag": "",
//   "free": true,
//   "role": false,
//   "user": "sundarkumar3585",
//   "email": "sundarkumar3585@gmail.com",
//   "score": 0.64,
//   "state": "deliverable",
//   "domain": "gmail.com",
//   "reason": "valid_mailbox",
//   "mx_found": true,
//   "catch_all": null,
//   "disposable": false,
//   "smtp_check": true,
//   "did_you_mean": "",
//   "format_valid": true
// }

// submitBtn = addEventListener("click", async (e) => {
//     e.preventDefault()
//     console.log("clicked!")

// let key="ema_live_3mGHWF5MUycerU3m6tkXmOHtjEJfMdrLfW0cVLJ9"

// let email = document.getElementById("username").value



// let url =`https://api.emailvalidation.io/v1/info?apikey=${key}&email={email}`

// let res = await fetch(url) 
// let result = await res.json()

// let str =``
// for (key of Object.keys(result)) {
//    str = str + `<div>${key}: ${result[key]}</div>`
// }

// console.log(str)
// resultCont.innerHTML = str

// })



console.log("this is my script");

let submitBtn = document.getElementById("submitBtn");
let resultCont = document.getElementById("resultCont");

submitBtn.addEventListener("click", async (e) => {
    e.preventDefault();
    console.log("clicked!");

    let key = "ema_live_3mGHWF5MUycerU3m6tkXmOHtjEJfMdrLfW0cVLJ9";
    let email = document.getElementById("username").value;

    // Correct API URL
    let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`;

    let res = await fetch(url);
    let data = await res.json();

    let str = ``;
    for (let k of Object.keys(data)) {

        if(data[k] !== "" && data[k] !== " ")

        str += `<div>${k}: ${data[k]}</div>`;
    }

    console.log(str);
    resultCont.innerHTML = str;
});




