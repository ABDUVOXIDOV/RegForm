var p = true;
var tp = document.getElementById('password');
function eye() {
    
    if (p == true) {
        p = false;
        return tp.type = "text";
    } 
    else {
        p = true;
        return tp.type = "password";   
    }
}