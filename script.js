let a =document.getElementById("home1");
let d =document.getElementById("about1");
let s =document.getElementById("portfolio1");
let q =document.getElementById("mods1");
let e =document.getElementById("contact1");

a.addEventListener("click", () => {
    a.classList.add("active")
    d.classList.remove("active")
    s.classList.remove("active")
    q.classList.remove("active")
    e.classList.remove("active")
})
let f =document.getElementById("btn1")
let u =document.getElementById("btn2")
let h =document.getElementById("btn3")

f.addEventListener("click", () => {
    f.classList.add("active");
    u.classList.remove("active");
    h.classList.remove("active");   
})

let i =document.getElementById("card1");
let n =document.getElementById("card2");
let l =document.getElementById("card3");

function sey1() {
    i.style.display ="block";
    n.style.display ="none";
    l.style.display ="none";
}
function sey2(){
    n.style.display ="block";
    i.style.display ="none";
    l.style.display ="none";
}
function sey3() {
    l.style.display ="block";
    n.style.display ="none";
    i.style.display ="none";
}
let qw = document.querySelectorAll("#inp");
let zv = document.querySelector("send");
let rg =document.getElementById("tb");
let yh =document.getElementById("tt");

function name2() {
    if(qw == 1){
        tb.style.display ="block";
        tt.style.display ="none";
    }
    else{
        tt.style.display="block";
        tb.style.display="none";
    }
}
TELRGRAM_BOT_TOKEN ='6625343016:AAH-nud9cJgLSLwDMxnxoPjX3UxpstdWxJA';
const TeleBot = require('telebot');
const bot =new TeleBot(TELRGRAM_BOT_TOKEN);

bot.on('text',(msg) => msg.reply.text('Kelgan habar:'+msg.text));

bot.start();