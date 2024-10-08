window.onload = loginLoad;
function loginLoad(){
	var form = document.getElementById("myLogin");
	form.onsubmit = checkLogin;
}

function checkLogin(){
	//ถ้าตรวจสอบแล้วพบว่ามีการ login ไม่ถูกต้อง ให้ return false ด้วย
	const queryString = window.location.search;
	console.log(queryString);
	const urlParams = new URLSearchParams(queryString);
	const username = urlParams.get('username');
	const password = urlParams.get('password');
	var login_username = document.forms["myLogin"]["username"].value;
	var login_password = document.forms["myLogin"]["password"].value;

	if (login_username == username && login_password == password) {
		alert("Login success")
	}
	else {
		alert("Username or Password incorrect");
		return false;
	}

}

			