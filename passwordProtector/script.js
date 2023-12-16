const eyeicon=document.getElementById("eyeicon");
const input=document.getElementById("password");


eyeicon.addEventListener("click",function(){
   if(password.type=="password"){
    password.type="text"
    eyeicon.src="eyeOpen.png"
   }
   else{
    password.type="password"
    eyeicon.src="eyeClose.png"
   }
})