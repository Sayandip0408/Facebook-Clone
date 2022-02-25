

function homepage() {

    let user = "Zuku Kaku";
    let password = "metaverse";

    var u_id = document.getElementById("phone").value;
    var pass = document.getElementById("password").value;


    if ((user == u_id) && (password == pass)) {
        window.location.href = "/home.html";
    }
    else if ((u_id == "") && (pass == "")) {
        alert("Username & Password is Required !!");
    }
    else if (user != u_id) {
        alert("User Doesn't Exist !!");
    }
    else {
        alert("Wrong Password !!");
    }

}

function messenger() {
    var x = document.getElementById("msngr");
    if (x.style.display == "none")
        x.style.display = "block";
    else
        x.style.display = "none";
}

function msg1(){
    var x = document.getElementById("chatbox");
    x.style.display = "block";
}

function minimise(){
    var x = document.getElementById("chatbox");
    x.style.display = "none";
}

function alert_function() {
    alert("This Feature is Under Development.");
}