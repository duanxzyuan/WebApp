
function show(it){
 var register=document.getElementById("register");
 var login=document.getElementById("login");

 if(it.textContent=="Register"){
 register.style.display="block";
 login.style.display="none";}
 else{
 register.style.display="none";
 login.style.display="block";
 }
}
function close(it) {
    it.parentNode.style.display="none";
}
