/**
 * Navigates the HTML menus
 */

function goToMainMenu() {
    let menus = document.getElementsByClassName("menu");
    
    for(let i = 0; i < menus.length; i++) {
        menus.item(i).style.visibility = "hidden";
    }
    
    document.getElementById("mainMenu").style.visibility = "visible";
}

function goToTimeTrial() {
    console.log("menu nav: going to time trial");
}

function goToRaceCPU() {
    console.log("menu nav: going to race cpu");
}

function goToRaceOnline() {
    console.log("menu nav: going to race online");
}

function goToCustomize() {
    document.getElementById("mainMenu").style.visibility = "hidden";
    document.getElementById("customize").style.visibility = "visible";
}