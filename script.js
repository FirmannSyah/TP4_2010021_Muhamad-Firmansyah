
function myFunc() {

    getName()
    getBirthD()
    getGender()
    getHobby()
    getReligion()
    getText()
    document.getElementById("table").style.display = "table";
}

function getName(){
    var name = document.getElementById("name").value;
    document.getElementById("printName").innerHTML = name;
}

function getBirthD(){
    var birthD = document.getElementById("birth_date").value;
    document.getElementById("printBirthD").innerHTML = birthD;
}

function getGender(){
    var gender = document.querySelector('input[name="your_gender"]:checked').value;
    document.getElementById("printGender").innerHTML = gender;
}

function getHobby(){
    var hobby = ""
    var checkHobby = document.querySelectorAll('input[type=checkbox]:checked')
    for (var i = 0; i < checkHobby.length; i++) {
        hobby = hobby + checkHobby[i].value;
        if(i < checkHobby.length-1) {
            hobby = hobby + ', '
        }
    }
    document.getElementById("printHobby").innerHTML = hobby;    
}

function getReligion(){
    var religion = document.getElementById("religion").value;
    document.getElementById("printReligion").innerHTML = religion;
}

function getText(){
    var message = document.getElementById("pesan").value;
    document.getElementById("printText").innerHTML = message;
}
    