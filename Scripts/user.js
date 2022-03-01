
// Saving the inputted values to a variable.
function Register(){
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("Password1").value;
    const confpassword = document.getElementById("Password2").value;
    const phone = document.getElementById("phone").value;
    const checkbox = document.getElementById("checkbox");

    // Credential Validation ; Checking if Null.
    if (name === "" || phone === "" || email === "" || password === ""){
        if (name === ""){ document.getElementById("nameError").innerHTML}
        if (phone === ""){ document.getElementById("phoneError").innerHTML}
        if (email === ""){ document.getElementById("emailError").innerHTML}
        if (password === ""){ document.getElementById("pass1Error").innerHTML}
    }
    // Checking if the passwords are the same.
    else if (password !== confpassword){
        alert("Your passwords do not match!")
    }
    else if (!checkbox.checked){
        alert("Please check the validation box!")
    }
    else
    {
        var user = {
            name:name,
            email:email,
            password:password,
            phone:phone
        }
    
        // Saving the inputted valies into the local storage.
        localStorage.setItem("userInfo", JSON.stringify(user));
    }
}