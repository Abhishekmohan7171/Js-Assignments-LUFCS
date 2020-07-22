function show(){
    console.log("Hello")
    let name = window.prompt("Enter name:");
    title.innerText += `,Welcome to the Family ${name}`;
}

const ctime = document.getElementById('time')

function clock(){
    let date = new Date();
    let time = date.toLocaleTimeString();
    ctime.innerText = time;
}

setInterval(clock,1000);

function dark() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }