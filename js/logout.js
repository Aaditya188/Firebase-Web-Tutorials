function logout() {
    firebase.auth().signOut().then(function() {
        // Sign-out successful.
        window.location="googleLogin.php";
    }).catch(function(error) {
        // An error happened.
    });
}
