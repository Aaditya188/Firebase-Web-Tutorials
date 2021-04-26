function loginUser() {
    var email=document.getElementById("u_email").value;
    var password=document.getElementById("u_password").value;

    //firebase have pre built login function
    //it takes two parameters first email and second is password

    firebase.auth().signInWithEmailAndPassword(email,password).then(function () {
        //this function works when login successfully

        window.location="home.php";
    }).catch(function (error) {
       //this will handle error
        var errorMessage=error.message;
        alert(errorMessage);
    });
}
