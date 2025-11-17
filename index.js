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
