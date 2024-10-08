window.onload = pageLoad;
function pageLoad(){
	var form = document.getElementById("myRegister");
    form.onsubmit = validateForm;
}

function validateForm() {
    //ถ้าตรวจสอบแล้วว่ามีการ register ไม่ถูกต้องให้ return false ด้วย
    var regis = document.forms["myRegister"];
    var firstname = regis["firstname"].value;
    var lastname = regis["lastname"].value;
    var gender = regis["gender"].value;
    var birthday = regis["bday"].value;
    var email = regis["email"].value;
    var username = regis["username"].value;
    var password = regis["password"][0].value;
    var retypePassword = regis["password"][1].value;
    var errorMsg = document.getElementById("errormsg");

    if (!firstname || !lastname || !gender || !birthday || !email || !username || !password || !retypePassword) {
        errorMsg.innerHTML = "Please fill in all information";
        // alert("Please fill in all information");
        return false;
    }

    if (password != retypePassword) {
        errorMsg.innerHTML = "Password doesn't match";
        // alert("Password doesn't match");
        return false;
    }
}