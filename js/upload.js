function insert() {
    var name=document.getElementById("name").value;
    var gender=document.getElementById("gender").value;
    var country=document.getElementById("country").value;

    //pre built function to upload data to firebase
    //path where your data will be stored
    firebase.database().ref('user/'+name).set({
       userName: name,
        userGender: gender,
        userCountry: country
    });

}