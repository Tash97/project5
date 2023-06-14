function signin(){
    localStorage.setItem("loggedin?", "yes");
}



function signout(){
    const stor = localStorage.getItem("loggedin?");
    if(stor === "yes"){
    localStorage.setItem("loggedin?", "no");
    }
}

function checksign(){
    const stor = localStorage.getItem("loggedin?");
    if(stor === "yes") {
        document.getElementById("sign_in_link").href = "sign-out.html"
        document.getElementById("sign_in_link").innerHTML = "Sign Out"

    }
}
checksign();






let fwrd = document.getElementById("updates_and_info");

function go() {
    let scroll = document.body.clientWidth;
    let max = fwrd.scrollWidth - scroll;
    if(fwrd.scrollLeft != max) {
        fwrd.scrollLeft = fwrd.scrollLeft + scroll;
    }
    
}

function goback() {
    let scroll = document.body.clientWidth;
        if(fwrd.scrollLeft != 0) {
              fwrd.scrollLeft = fwrd.scrollLeft - scroll;
        }
}


document.getElementById("forwards").addEventListener('click', go);
document.getElementById("backwards").addEventListener('click', goback);

let youthscroll = document.getElementById("kids_climb_image_scroll");
let totalscroll = youthscroll.scrollWidth;
let onescroll = totalscroll / 5;
let threeandsumscrolls = onescroll * 3.5;

function scroller(){
    if(youthscroll.scrollLeft < threeandsumscrolls ) {
        youthscroll.scrollLeft = youthscroll.scrollLeft + onescroll;
    }
    else {
        youthscroll.scrollLeft = 0;
    }
}

setInterval(scroller, 5000);

let fitscroll = document.getElementById("fitness_classes_image_scroll");
let fittotalscroll = fitscroll.scrollWidth;
let fitonescroll = fittotalscroll / 5;
let fitthreeandsumscrolls = fitonescroll * 3.5;

function fitscroller(){
    if(fitscroll.scrollLeft < fitthreeandsumscrolls ) {
        fitscroll.scrollLeft = fitscroll.scrollLeft + fitonescroll;
    }
    else {
        fitscroll.scrollLeft = 0;
    }
}

function delay(){
    setInterval(fitscroller, 5000);
    clearInterval(delayint);
 }

 delayint = setInterval(delay, 2500);


