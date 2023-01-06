// selecting the username and password input box 
var username = document.getElementById('username');
var password = document.getElementById('password');

var flag = true;

function formValidate(){
    // selecting the error paragraphs 
    var userError = document.getElementById('userError');
    var passError = document.getElementById('passError');

    // function for validating username 
    if(username.value == ''){
        userError.innerHTML = 'Please enter username';
        flag = false;
    }
    else if(username.value.length < 3){
        userError.innerHTML = 'Username should be atleast 3 charater';
        flag = false;
    }
    else{
        userError.value = '';
        flag = true;
    }


    // function for validating password 
    if(password.value == ''){
        passError.innerHTML = 'Please enter password';
        flag = false;
    }
    else if(password.value.length < 4){
        passError.innerHTML = 'Password should be atleast 4 character'
        flag = false;
    }
    else{
        passError.value = '';
        flag = true;
    }



    // form only be submit when this condition will return true 
    if(flag){
        return true;
    }
    else{
        return false;
    }

}

